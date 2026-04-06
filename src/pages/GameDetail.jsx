import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "../css/GameDetail.css";

const BASE_URL = "https://demo-backend-4rk5.onrender.com";

const GameDetail = () => {
  const { id } = useParams();
  const [game, setGame] = useState(null);

  useEffect(() => {
    fetch(`${BASE_URL}/api/catalog/${id}`)
      .then((res) => res.json())
      .then((data) => setGame(data))
      .catch((err) => console.error(err));
  }, [id]);

  if (!game) return <p style={{ color: "white" }}>Loading...</p>;

  const imageName = game.img_name.split("/").pop();

  return (
    <div className="game-detail-page">
      <div className="game-detail-container">

        <Link to="/catalog" className="back-link">
          ← Back to Catalog
        </Link>

        <div className="game-detail-top">
          <div className="game-detail-image">
            <img
              src={`${BASE_URL}/images/${imageName}`}
              alt={game.img_alt}
            />
          </div>

          <div className="game-detail-info">
            <h1>{game.title}</h1>

            <div className="game-tags">
              <span className="genre">{game.genre}</span>
              <span className="platform">{game.platform}</span>
            </div>

            <div className="game-price-box">
              <span className="price">{game.price_display}</span>
            </div>

            <div className="game-buttons">
              <button className="add-btn">Add to Cart</button>
              <button className="wishlist-btn">Add to Wishlist</button>
            </div>

            <div className="game-meta-box">
              <p><strong>Platform:</strong> {game.platform}</p>
              <p><strong>Genre:</strong> {game.genre}</p>
            </div>
          </div>
        </div>

        <div className="game-section">
          <h2>About This Game</h2>
          <p>
            This is a featured game in GamerGauntlet. Explore exciting gameplay,
            immersive worlds, and challenging adventures across multiple platforms.
          </p>
        </div>

        <div className="game-section">
          <h2>Key Features</h2>
          <ul>
            <li>Immersive gameplay experience</li>
            <li>Challenging missions and progression</li>
            <li>Multiplayer and co-op modes</li>
            <li>High-quality visuals and design</li>
          </ul>
        </div>

        <div className="game-section">
          <h2>System Requirements</h2>

          <div className="requirements-grid">
            <div>
              <h3>Minimum</h3>
              <ul>
                <li>OS: Windows 10</li>
                <li>Processor: Intel Core i5-8400 / AMD Ryzen 3 3300X</li>
                <li>Memory: 12 GB RAM</li>
                <li>Graphics: NVIDIA GTX 1060 3GB / AMD RX 580 4GB</li>
              </ul>
            </div>

            <div>
              <h3>Recommended</h3>
              <ul>
                <li>OS: Windows 10 / 11</li>
                <li>Processor: Intel Core i7-8700K / AMD Ryzen 5 3600X</li>
                <li>Memory: 16 GB RAM</li>
                <li>Graphics: NVIDIA GTX 1070 8GB / AMD RX Vega 56</li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default GameDetail;