#!/usr/bin/python3

"""
Configuration settings for the Gaine Africa Flask application.

This module defines the configuration variables required for the application,
such as the database connection URI.
"""

from dotenv import load_dotenv
import os


# Load environment variables from .env file
load_dotenv()


class Config:
    """
    Configuration class for the Flask application.

    Attributes:
        SQLALCHEMY_DATABASE_URI (str): The URI for the MySQL database.
        SQLALCHEMY_TRACK_MODIFICATIONS (bool): Disable modification tracking.
    """

    # Database configuration
    SQLALCHEMY_DATABASE_URI = os.getenv('DATABASE_URI', 'mysql+pymysql://root:maunyit@localhost/gaine_africa')
    SQLALCHEMY_TRACK_MODIFICATIONS = False

    # Debugging: Print the DATABASE_URI
    print(f"Database URI: {SQLALCHEMY_DATABASE_URI}")