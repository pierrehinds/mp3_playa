from models.model import Song
from sqlalchemy.testing.config import db
from sqlalchemy.engine.base import Engine
from sqlalchemy.orm.session import Session
from mimetypes import init
from sqlalchemy import create_engine, Column, Integer, String, Float, select
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
from pathlib import Path

BASE_DIR = Path(__file__).resolve().parents[2]
db_path = BASE_DIR / "songs.db"
DATABASE_URL = f"sqlite:///{db_path}"
engine: Engine = create_engine(DATABASE_URL)
SessionLocal: sessionmaker[Session] = sessionmaker(bind=engine)
Base = declarative_base()

def init_db():
    if not Path("songs.db").exists():
        return

def get_db():
    db = SessionLocal()
    return db
