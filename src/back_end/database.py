from models.model import Song
from sqlalchemy.testing.config import db
from sqlalchemy.engine.base import Engine
from sqlalchemy.orm.session import Session
from mimetypes import init
from sqlalchemy import create_engine, Column, Integer, String, Float, select
from sqlalchemy.orm import sessionmaker
from models.song_db_schema import Base as SongBase, SongData
from pathlib import Path

DATABASE_URL = "sqlite:///./songs.db"
engine: Engine = create_engine(DATABASE_URL)
Base = SongBase
SessionLocal: sessionmaker[Session] = sessionmaker(bind=engine)

def init_db():
    if not Path("songs.db").exists():
        Base.metadata.create_all(bind=engine)

def get_db():
    db = SessionLocal()
    return db
