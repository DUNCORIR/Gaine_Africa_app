#!/usr/bin/python3
"""
Defines the BaseModel class for common database operations.
"""

from ..db import db
class BaseModel(db.Model):
    """
    Base model class for common database operations.
    """

    __abstract__ = True  # Prevents SQLAlchemy from creating a table

    def save(self):
        """
        Save the current instance to the database.
        """
        db.session.add(self)
        db.session.commit()

    def delete(self):
        """
        Delete the current instance from the database.
        """
        db.session.delete(self)
        db.session.commit()