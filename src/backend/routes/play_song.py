from pathlib import Path
from webbrowser import get
from models.model import Song
from models.song_db_schema import SongData
from sqlalchemy.orm import Session
from backend.database import get_db
from fastapi import APIRouter, Depends
import pygame

router = APIRouter()
BASE_DIR = Path(__file__).resolve().parents[3]
pygame.mixer.init()

@router.post("/play/{file_name}")
def play_song(file_name: str):

    song_path = f"{BASE_DIR}/data/music/{file_name}.mp3"
    current_song = pygame.mixer.Sound(song_path)
    current_song.play()
    return {"status": "playing", "file_name": file_name}

@router.post("/stop")
def stop():
    pygame.mixer.stop()
    return {"status": "stopped"}

@router.get("/volume")
def get_volume():
    return {"volume": pygame.mixer.music.get_volume()}

@router.post("/volume/{level}")
def set_volume(level: float):
    pygame.mixer.music.set_volume(level)
    return {"volume": level}
