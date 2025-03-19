#!/usr/bin/python3
"""
Defines the API routes for the Gaine Africa application.
"""

from flask import Blueprint, jsonify, request
from .models import User, Record
from . import db

main_routes = Blueprint('main', __name__)


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
    Create a new user.

    Returns:
        JSON response with a success message or an error message.
    """
    data = request.get_json()

    # Validate required fields
    if not all(key in data for key in ['name', 'email', 'password']):
        return jsonify({'error': 'Missing required fields'}), 400

    new_user = User(name=data['name'], email=data['email'])
    new_user.set_password(data['password'])  # Hash and store password
    db.session.add(new_user)
    db.session.commit()

    return jsonify({'message': 'User created successfully'}), 201


@main_routes.route('/api/users/<int:user_id>/records', methods=['GET'])
def get_records(user_id):
    """
    Retrieve all records for a specific user.

    Args:
        user_id (int): The ID of the user.

    Returns:
        JSON response containing a list of records or an error message.
    """
    records = Record.query.filter_by(user_id=user_id).all()

    if not records:
        return jsonify({'error': 'No records found for this user'}), 404

    return jsonify([{
        'id': record.id,
        'input': record.input_amount,
        'output': record.output_amount
    } for record in records])


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

    # Validate required fields
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