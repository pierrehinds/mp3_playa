from fastapi import APIRouter, Depends

from backend.database import get_db
from models.model import Song
from models.song_db_schema import SongData

router = APIRouter()


@router.get(path="/songs/", response_model=list[Song])
def get_songs(db=Depends(get_db)):
    songs = db.query(SongData).all()
    return songs
