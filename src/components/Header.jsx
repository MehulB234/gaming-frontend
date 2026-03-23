import { Link } from "react-router-dom";
import Navigation from "./Navigation";
import "../css/Header.css";

const Header = () => {
    return (
        <header id="main-header">
            <div className="header-inner">

                <Link to="/" className="brand">
                    <span className="brand-white">Gamer</span>
                    <span className="brand-green">Gauntlet</span>
                </Link>

                <Navigation />

                <div className="header-actions">
                    <Link to="/wishlist" className="header-icon">♥</Link>
                    <Link to="/cart" className="header-icon">🛒</Link>
                </div>

            </div>
        </header>
    );
};

export default Header;