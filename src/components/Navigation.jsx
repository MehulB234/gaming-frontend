import { Link } from "react-router-dom";
import "../css/Navigation.css";

const Navigation = () => {
    return (
        <nav id="main-nav" aria-label="Primary">
            <ul className="main-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/catalog">Catalog</Link></li>
                <li><Link to="/news">News</Link></li>
                <li><Link to="/about">About Us</Link></li>
            </ul>
        </nav>
    );
};

export default Navigation;