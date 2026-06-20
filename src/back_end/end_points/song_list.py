from webbrowser import get
from models.model import Song
from models.song_db_schema import SongData
from sqlalchemy.orm import Session
from back_end.database import get_db
from fastapi import APIRouter, Depends

router = APIRouter()

@router.get(path="/songs/", response_model=list[Song])
def get_songs(db=Depends(get_db)):
    songs = db.query(SongData).all()
    return songs
