from fastapi import FastAPI
from database import engine, Base
from models import SongData
from back_end.end_points.song_list import router as song_list

Base.metadata.create_all(bind=engine)

app = FastAPI()
app.include_router(router=song_list)
