from fastapi import FastAPI
from database import engine, Base
from models import SongData
from backend.routes.song_list import router as song_list
from backend.routes.play_song import router as play_song


Base.metadata.create_all(bind=engine)

app = FastAPI()
app.include_router(router=song_list)
app.include_router(router=play_song)
