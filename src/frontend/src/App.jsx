import { Outlet } from "react-router-dom";

// App is the shared shell around every page: the header stays put,
// and <Outlet /> is where the current page (Home, SongList, NowPlaying) renders.
export default function App() {
  return (
    <div className="shell">
      <header className="shell-header">
        <span className="brand-mark">◍</span>
        <span className="brand-name">Player</span>
      </header>
      <main className="shell-main">
        <Outlet />
      </main>
    </div>
  );
}
