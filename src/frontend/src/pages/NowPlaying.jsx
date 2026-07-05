import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { playSong, stopSong } from "../api";

export default function NowPlaying() {
  const { fileName } = useParams();
  const [status, setStatus] = useState("starting"); // "starting" | "playing" | "stopped" | "error"

  // Your backend builds the path as data/music/{file_name}.mp3,
  // so if the value already ends in .mp3 we strip it to avoid "song.mp3.mp3".
  const cleanFileName = fileName.replace(/\.mp3$/i, "");
  const displayName = decodeURIComponent(cleanFileName);

  useEffect(() => {
    let cancelled = false;
    playSong(cleanFileName)
      .then(() => {
        if (!cancelled) setStatus("playing");
      })
      .catch((err) => {
        console.error(err);
        if (!cancelled) setStatus("error");
      });
    return () => {
      cancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cleanFileName]);

  function handleStop() {
    stopSong()
      .then(() => setStatus("stopped"))
      .catch((err) => console.error(err));
  }

  return (
    <div className="page page-playing">
      <Link to="/songs" className="back-link">
        ← Song list
      </Link>

      <div className={`vinyl ${status === "playing" ? "vinyl-spin" : ""}`}>
        <div className="vinyl-center" />
      </div>

      <h1 className="playing-title">{displayName}</h1>

      <p className="state-text">
        {status === "starting" && "Starting playback…"}
        {status === "playing" && "Now playing"}
        {status === "stopped" && "Stopped"}
        {status === "error" &&
          "Couldn't play this track. Check the backend logs and that the file exists in data/music."}
      </p>

      <button
        className="stop-button"
        onClick={handleStop}
        disabled={status !== "playing"}
      >
        Stop
      </button>
    </div>
  );
}
