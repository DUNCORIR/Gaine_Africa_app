#!/usr/bin/python3
"""
The script initializes the SQLAlchemy
"""

from flask import Flask
from flask_cors import CORS
from .db import db



def create_app():
    """
    Create and configure the Flask application.

    Returns:
        Flask: The configured Flask application.
    """
    app = Flask(__name__)
    app.config.from_object('config.Config')

    # Enable CORS for all routes
    CORS(app)

    # Initialize the database with the app
    db.init_app(app)

    # Import and register models within the function
    with app.app_context():
        from .models import User, Record

    # Register the main routes blueprint
    from .routes import main_routes
    app.register_blueprint(main_routes)

    return app