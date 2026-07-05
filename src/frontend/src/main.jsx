import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./index.css";
import App from "./App.jsx";
import Home from "./pages/Home.jsx";
import SongList from "./pages/SongList.jsx";
import NowPlaying from "./pages/NowPlaying.jsx";

// This is the entry point. It renders <App /> and hands routing
// (which page shows for which URL) over to react-router-dom.
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="songs" element={<SongList />} />
          <Route path="play/:fileName" element={<NowPlaying />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
