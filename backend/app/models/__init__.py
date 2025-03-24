#!/usr/bin/python3
"""
Initialize the models package.

This module imports all models to make them accessible
when the package is imported.
"""
from ..db import db  # Import db from the separate module
from .base_model import BaseModel
from .user import User
from .record import Record
from .prediction import Prediction 
from .market_data import MarketData 
