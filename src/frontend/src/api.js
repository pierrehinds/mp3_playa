// Every call to your FastAPI backend lives in this one file.
// If your backend runs somewhere other than localhost:8000, change it here only.
const BASE_URL = "http://localhost:8000";

async function request(path, options = {}) {
  const response = await fetch(`${BASE_URL}${path}`, options);
  if (!response.ok) {
    throw new Error(`Request to ${path} failed with status ${response.status}`);
  }
  // /volume and /volume/{level} etc. return JSON; play/stop do too.
  return response.json();
}

// GET /songs/  -> list of songs
export function fetchSongs() {
  return request("/songs/");
}

// POST /play/{file_name}
export function playSong(fileName) {
  return request(`/play/${encodeURIComponent(fileName)}`, { method: "POST" });
}

// POST /stop
export function stopSong() {
  return request("/stop", { method: "POST" });
}

// GET /volume
export function fetchVolume() {
  return request("/volume");
}

// POST /volume/{level}   level is expected to be 0.0 - 1.0
export function setVolume(level) {
  return request(`/volume/${level}`, { method: "POST" });
}
