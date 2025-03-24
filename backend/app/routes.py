#!/usr/bin/python3
"""
Defines the API routes for the Gaine Africa application.
"""

from flask import Blueprint, jsonify, request, session
from .models import User, Record
from . import db
from flask_bcrypt import Bcrypt

bcrypt = Bcrypt()
main_routes = Blueprint('main', __name__)

def authenticate_user(email, password):
    """Authenticate user by email and password."""
    user = User.query.filter_by(email=email).first()
    if user and user.check_password(password):
        return user
    return None

@main_routes.route('/api/users', methods=['GET'])
def get_users():
    """
    Retrieve all users.

    Returns:
        JSON response containing a list of users.
    """
    users = User.query.all()
    return jsonify([{'id': user.id, 'name': user.name} for user in users])

@main_routes.route('/api/users', methods=['POST'])
def create_user():
    """
    Create a new user with email uniqueness check.

    Returns:
        JSON response with a success message or an error message.
    """
    data = request.get_json()
    
    if not all(key in data for key in ['name', 'email', 'password']):
        return jsonify({'error': 'Missing required fields'}), 400
    
    existing_user = User.query.filter_by(email=data['email']).first()
    if existing_user:
        return jsonify({'error': 'Email already in use'}), 409
    
    new_user = User(name=data['name'], email=data['email'])
    new_user.set_password(data['password'])
    db.session.add(new_user)
    db.session.commit()
    
    return jsonify({'message': 'User created successfully'}), 201

@main_routes.route('/api/login', methods=['POST'])
def login():
    """
    Authenticate a user and return user details.

    Returns:
        JSON response with user details or an error message.
    """
    data = request.get_json()

    if not data or not data.get('email') or not data.get('password'):
        return jsonify({'error': 'Email and password are required'}), 400

    user = authenticate_user(data['email'], data['password'])
    
    if user:
        session['user_id'] = user.id  # Store user ID in session

        # ✅ Return full user details (excluding password)
        return jsonify({
            'message': 'Login successful',
            'user': {
                'id': user.id,
                'name': user.name,
                'email': user.email
            }
        }), 200
    else:
        return jsonify({'error': 'Invalid email or password'}), 401

@main_routes.route('/api/logout', methods=['POST'])
def logout():
    """
    Logs out a user by clearing the session.
    """
    session.pop('user_id', None)
    return jsonify({'message': 'Logout successful'}), 200

@main_routes.route('/api/users/<int:user_id>/records', methods=['GET'])
def get_records(user_id):
    """
    Retrieve all records for a specific user.
    """
    records = Record.query.filter_by(user_id=user_id).all()

    # Return an empty array is returned instead of a 404 error
    if not records:
        return jsonify([]), 200  #  Return empty list instead of error

    return jsonify([
        {
            'id': record.id,
            'input': record.input_amount,
            'output': record.output_amount
        } for record in records
    ])

@main_routes.route('/api/users/<int:user_id>/records', methods=['POST'])
def create_record(user_id):
    """
    Create a new record for a specific user.
    
    Args:
        user_id (int): The ID of the user.

    Returns:
        JSON response with a success message or an error message.
    """
    data = request.get_json()
    
    if not all(key in data for key in ['input', 'output', 'expenses']):
        return jsonify({'error': 'Missing required fields'}), 400
    
    new_record = Record(
        user_id=user_id,
        input_amount=data['input'],
        output_amount=data['output'],
        expenses=data['expenses']
    )
    db.session.add(new_record)
    db.session.commit()
    
    return jsonify({'message': 'Record created successfully'}), 201

@main_routes.route('/api/users/<int:user_id>', methods=['GET'])
def get_user(user_id):
    """
    Retrieve a single user by ID.
    
    Args:
        user_id (int): The ID of the user.

    Returns:
        JSON response containing the user details or an error message.
    """
    user = User.query.get(user_id)
    if not user:
        return jsonify({'error': 'User not found'}), 404

    return jsonify({'id': user.id, 'name': user.name, 'email': user.email})

@main_routes.route('/api/users/<int:user_id>', methods=['PUT'])
def update_user(user_id):
    """
    Update a user's details.

    Args:
        user_id (int): The ID of the user.

    Returns:
        JSON response with success or error message.
    """
    user = User.query.get(user_id)
    if not user:
        return jsonify({'error': 'User not found'}), 404

    data = request.get_json()
    
    if 'name' in data:
        user.name = data['name']
    if 'email' in data:
        user.email = data['email']

    db.session.commit()
    return jsonify({'message': 'User updated successfully'}), 200

@main_routes.route('/api/register', methods=['POST'])
def register():
    """Register a new user with hashed password"""
    data = request.get_json()
    
    # Check if required fields are provided
    if not data or not all(key in data for key in ["name", "email", "password"]):
        return jsonify({"error": "Missing required fields"}), 400

    # Check if user already exists
    if User.query.filter_by(email=data["email"]).first():
        return jsonify({"error": "User already exists"}), 400

    # Create a new user instance
    new_user = User(name=data["name"], email=data["email"])
    new_user.set_password(data["password"])  # ✅ Correct way to store password

    # Save user to database
    db.session.add(new_user)
    db.session.commit()

    return jsonify({"message": "User registered successfully"}), 201
