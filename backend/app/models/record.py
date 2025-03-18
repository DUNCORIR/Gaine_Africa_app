#!/usr/bin/python3
"""
Defines the Record model for the Gaine Africa application.
"""

from .base_model import BaseModel
from . import db


class Record(BaseModel):
    """
    Represents a farming record for a user.
    """

    __tablename__ = 'records'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    input_amount = db.Column(db.Float, nullable=False)
    output_amount = db.Column(db.Float, nullable=False)
    expenses = db.Column(db.Float, nullable=False)