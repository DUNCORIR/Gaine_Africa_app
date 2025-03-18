#!/usr/bin/python3
"""
Defines the User model for the Gaine Africa application.
"""

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
    password = db.Column(db.String(100), nullable=False)