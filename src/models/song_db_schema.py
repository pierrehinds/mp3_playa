import uuid

from sqlalchemy import Column, Integer, String, DateTime
from sqlalchemy.ext.declarative import declarative_base
from datetime import datetime, timezone
from .model import Song

Base = declarative_base()


class SongData(Base):
    __tablename__ = 'song_data'

    file_name = Column(String, primary_key=True)
    song_name = Column(String, nullable=True)
    artist_name = Column(String, nullable=True)
    album_name = Column(String, nullable=True)
    release_date = Column(DateTime, nullable=True)
    song_added = Column(DateTime, default=datetime.now(timezone.utc))
    plays = Column(Integer, default=0)


    def from_pydantic(self, song:Song):
        return SongData(**song.model_dump())
