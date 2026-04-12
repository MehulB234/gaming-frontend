
import { Link } from "react-router-dom";
import "../css/GameCard.css";
import defaultImage from "../images/Default.png";

const BASE_URL = "https://demo-backend-4rk5.onrender.com";

const GameCard = ({ game, onDelete }) => {
  if (!game || !game.img_name) return null;

  const isFullUrl = game.img_name.startsWith("http");

  const imageSrc = isFullUrl
    ? game.img_name
    : `${BASE_URL}/images/${game.img_name.split("/").pop()}`;

  return (
    <div className="game-card">
      <div className="game-thumb">
        <img
          src={imageSrc}
          alt={game.img_alt}
          onError={(e) => {
            e.currentTarget.src = defaultImage;
          }}
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