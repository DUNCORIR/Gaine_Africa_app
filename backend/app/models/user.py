#!/usr/bin/python3
"""
Defines the User model for the Gaine Africa application.
"""

from werkzeug.security import generate_password_hash, check_password_hash
from .base_model import BaseModel
from . import db


class User(BaseModel):
    """
    Represents a user in the system.
    """

    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    email = db.Column(db.String(100), unique=True, nullable=False)
    password_hash = db.Column(db.String(256), nullable=False)  # Store hashed password
    records = db.relationship('Record', backref='user', lazy=True)

    def set_password(self, password):
        """Hashes and sets the password."""
        self.password_hash = generate_password_hash(password)

    def check_password(self, password):
        """Checks if the given password matches the stored hash."""
        return check_password_hash(self.password_hash, password)

    def to_dict(self):
        """Convert user instance to dictionary (excluding password hash)."""
        user_dict = super().to_dict()  # Get base attributes
        user_dict.pop("password_hash", None)  # Exclude password hash
        return user_dict