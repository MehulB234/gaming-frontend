import { Link } from "react-router-dom";
import "../css/GameCard.css";

const BASE_URL = "https://demo-backend-4rk5.onrender.com";

const GameCard = ({ game, onDelete }) => {
  if (!game || !game.img_name) return null;

  const imageName = game.img_name.split("/").pop();

  return (
    <div className="game-card">
      <div className="game-thumb">
        <img
          src={`${BASE_URL}/images/${imageName}`}
          alt={game.img_alt}
        />
      </div>

      <div className="game-body">
        <h3 className="game-title">
          <Link to={`/game/${game._id}`} className="title-link">
            {game.title}
          </Link>
        </h3>

        <p className="game-meta">{game.platform}</p>

        <div className="game-footer">
          <span className="game-price">{game.price_display}</span>
          <button className="add-btn" type="button">
            Add to Cart
          </button>
        </div>

        {onDelete && (
          <button
            className="delete-btn"
            type="button"
            onClick={onDelete}
          >
            Remove
          </button>
        )}
      </div>
    </div>
  );
};

export default GameCard;