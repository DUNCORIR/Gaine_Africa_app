#!/usr/bin/python3
"""
The script defines the database models for
Flask application using SQLAlchemy
"""

from . import db


class User(db.Model):
    """
    Represents a user in the system.

    Attributes:
        id (int): Primary key.
        name (str): User's full name.
        email (str): User's email address (unique).
        password (str): User's hashed password.
    """
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    email = db.Column(db.String(100), unique=True, nullable=False)
    password = db.Column(db.String(100), nullable=False)


class Record(db.Model):
    """
    Represents a farming record for a user.

    Attributes:
        id (int): Primary key.
        user_id (int): Foreign key linking to the User table.
        input_amount (float): Amount of input used.
        output_amount (float): Amount of output produced.
        expenses (float): Total expenses incurred.
    """
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    input_amount = db.Column(db.Float, nullable=False)
    output_amount = db.Column(db.Float, nullable=False)
    expenses = db.Column(db.Float, nullable=False)