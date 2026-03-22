import {Link} from "react-router-dom";
import "../css/Header.css";
import Navigation from "./Navigation";
import logo from "../images/game.jpeg";

const Header = () => {
    return (
        <header id="main-header">
            <Link to="/"><img id="logo" src={logo} alt="Site logo" /></Link>
            <h1>Gamer Gauntlet</h1>
            <Navigation />
        </header>
    );
};

export default Header;