import "../css/Game.css";
import gamePic from "../images/game.jpeg";

const Game = (props) => {
    return (
        <section className="game">
            <h3>{props.title}</h3>
            <img src={gamePic} alt="Game cover" />
        </section>
    )
};

export default Game;