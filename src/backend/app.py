from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from backend.routes.play_song import router as play_song
from backend.routes.song_list import router as song_list

from .database import Base, engine

Base.metadata.create_all(bind=engine)

app = FastAPI()
app.include_router(router=song_list)
app.include_router(router=play_song)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_methods=["*"],
    allow_headers=["*"],
)
