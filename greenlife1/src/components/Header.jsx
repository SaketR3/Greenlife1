import {Link} from "react-router-dom";

export default function Header() {
    return (<>
        <nav className="header">
          <p id="logo">Greenlife</p>
          <div className="header-links">
            <Link to="/" onClick={() => window.scroll(0, 0)}>Home</Link>
            <Link to="/create" className="guide-creation-link" onClick={() => window.scroll(0, 0)}>Create Your Guide</Link>
          </div>
        </nav>
        <div id="header-spacer"></div>
    </>)
}