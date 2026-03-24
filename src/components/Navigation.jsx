import { Link } from "react-router-dom";
import {useState} from "react";
import "../css/Navigation.css";

const Navigation = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
        console.log(menuOpen);
    };

    return (
        <nav id="main-nav" aria-label="Primary">
            <a id="toggle-nav" onClick={toggleMenu} href ="#">
                {menuOpen? (<p> &#8963; </p>) : (<p> &#8964; </p>)}
                </a>
            <ul className={menuOpen?"columns": "hide-small"}>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/catalog">Catalog</Link></li>
                <li><Link to="/news">News</Link></li>
                <li><Link to="/about">About Us</Link></li>
            </ul>
        </nav>
    );
};

export default Navigation;