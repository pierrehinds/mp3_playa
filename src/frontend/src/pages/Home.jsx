import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="page page-home">
      <h1 className="home-title">
        What do you
        <br />
        want to hear?
      </h1>
      <Link to="/songs" className="tile-link">
        <span className="tile-index">01</span>
        <span className="tile-label">Song list</span>
        <span className="tile-arrow">→</span>
      </Link>
    </div>
  );
}
