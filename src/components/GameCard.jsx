import { Link } from "react-router-dom";
import "../css/GameCard.css";

const GameCard = ({ game }) => {
    return (
        <article className="game-card">
            <div className="game-thumb">
                <img src={game.image} alt={`${game.title} cover`} />
            </div>

            <div className="game-body">
                <h3 className="game-title">
                    {game.detailPath ? (
                        <Link to={game.detailPath} className="game-link">
                            {game.title}
                        </Link>
                    ) : (
                        game.title
                    )}
                </h3>

                <p className="game-meta">{game.console}</p>

                <div className="game-footer">
                    <span className="game-price">{game.price}</span>
                    <button type="button" className="add-btn">
                        Add to Cart
                    </button>
                </div>
            </div>
        </article>
    );
};

export default GameCard;