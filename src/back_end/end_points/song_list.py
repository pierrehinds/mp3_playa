from webbrowser import get
from models.model import Song
from models.song_db_schema import SongData
from sqlalchemy.orm import Session

from back_end.database import get_db
from fastapi import FastAPI, Depends
from back_end.app import app


@app.get(path="/songs/", response_model=list[Song])
def get_songs(db=get_db()):
    songs = db.query(SongData).all()
    return songs
