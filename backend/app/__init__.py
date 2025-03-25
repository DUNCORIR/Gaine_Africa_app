#!/usr/bin/python3
"""
The script initializes the SQLAlchemy and Flask application.
"""

from flask import Flask
from flask_cors import CORS
from flask_migrate import Migrate
from .db import db


def create_app():
    """
    Create and configure the Flask application.

    Returns:
        Flask: The configured Flask application.
    """
    app = Flask(__name__)
    app.config.from_object('config.Config')
    app.secret_key = "maunyit"

    # Enable CORS for all routes
    CORS(app)

    # Initialize the database with the app
    db.init_app(app)
    
    # Import models within the function
    with app.app_context():
        from .models import User, Record

    # Register the main routes blueprint
    from .routes import main_routes
    app.register_blueprint(main_routes)

    # Initialize Flask-Migrate here, AFTER app is created
    Migrate(app, db)

    return app