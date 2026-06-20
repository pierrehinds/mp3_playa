from sqlalchemy.orm import Session
import pydantic

class Song(pydantic.BaseModel):

    file_name: str
    song_name: str | None = None
    artist_name: str | None = None
    album_name: str | None = None
    release_date: str | None = None

    class Config:
        from_attributes = True
