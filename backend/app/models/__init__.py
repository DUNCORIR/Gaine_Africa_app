#!/usr/bin/python3
"""
Initialize the models package.

This module imports all models to make them accessible
when the package is imported.
"""

from .base_model import BaseModel
from .user import User
from .record import Record
from .market_data import MarketData  # Optional, if needed