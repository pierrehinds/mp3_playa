import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchSongs } from "../api";

// Your Song model's exact field names aren't known on the frontend side,
// so these two helpers try a few common possibilities. If your song title
// or filename field is called something else, add it to these lists.
function getTitle(song, index) {
  return song.title || song.name || song.song_name || `Track ${index + 1}`;
}

function getFileName(song) {
  return song.file_name || song.filename || song.file || song.name;
}

export default function SongList() {
  const [songs, setSongs] = useState([]);
  const [status, setStatus] = useState("loading"); // "loading" | "ready" | "error"

  useEffect(() => {
    fetchSongs()
      .then((data) => {
        setSongs(data);
        setStatus("ready");
      })
      .catch((err) => {
        console.error(err);
        setStatus("error");
      });
  }, []);

  return (
    <div className="page page-list">
      <h1 className="page-title">Songs</h1>

      {status === "loading" && <p className="state-text">Loading songs…</p>}

      {status === "error" && (
        <p className="state-text state-error">
          Couldn't reach the backend at localhost:8000. Make sure it's
          running, and that CORS is enabled (see the setup notes).
        </p>
      )}

      {status === "ready" && songs.length === 0 && (
        <p className="state-text">No songs found yet.</p>
      )}

      {status === "ready" && songs.length > 0 && (
        <ul className="song-list">
          {songs.map((song, index) => {
            const fileName = getFileName(song);
            return (
              <li key={song.id ?? fileName ?? index}>
                <Link to={`/play/${encodeURIComponent(fileName)}`} className="song-row">
                  <span className="song-index">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="song-name">{getTitle(song, index)}</span>
                  <span className="song-play-icon">▶</span>
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
