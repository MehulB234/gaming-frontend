import { Link } from "react-router-dom";
import "../css/GameCard.css";

const GameCard = ({ game }) => {
  if (!game || !game.img_name) return null;

  const imageName = game.img_name.split("/").pop();

  return (
    <div className="game-card">
      <div className="game-thumb">
        <img
          src={`http://localhost:3001/images/${imageName}`}
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
          <button className="add-btn">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default GameCard;