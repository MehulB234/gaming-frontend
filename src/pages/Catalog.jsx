import { useEffect, useState } from "react";
import GameCard from "../components/GameCard";
import Slideshow from "../components/Slideshow";
import "../css/Catalog.css";

const Catalog = () => {
  const [games, setGames] = useState([]);
  const [category, setCategory] = useState("All");
  const [platform, setPlatform] = useState("All");

  useEffect(() => {
    fetch("https://demo-backend-4rk5.onrender.com/")
      .then((res) => res.json())
      .then((data) => setGames(data))
      .catch((err) => console.error(err));
  }, []);

  const filteredGames = games.filter((game) => {
    const categoryMatch =
      category === "All" ||
      game.genre.toLowerCase().includes(category.toLowerCase());

    const platformMatch =
      platform === "All" || game.platform === platform;

    return categoryMatch && platformMatch;
  });

  const categories = ["All", "RPG", "Shooter", "Action", "Sports", "Adventure", "Sandbox"];
  const platforms = ["All", "PlayStation", "Xbox", "PC"];

  return (
    <div className="catalog-page">
      <div className="catalog-wrap">

        {}
        <div className="catalog-hero">
          <Slideshow />
        </div>

        <h1 className="page-title">Game Catalog</h1>

        {}
        <div className="filter-group">
          <h2>Category</h2>
          <div className="filter-row">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`filter-btn ${category === cat ? "active" : ""}`}
                onClick={() => setCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {}
        <div className="filter-group">
          <h2>Console</h2>
          <div className="filter-row">
            {platforms.map((plat) => (
              <button
                key={plat}
                className={`filter-btn ${platform === plat ? "active" : ""}`}
                onClick={() => setPlatform(plat)}
              >
                {plat}
              </button>
            ))}
          </div>
        </div>

        {}
        <div className="catalog-grid">
          {filteredGames.map((game) => (
            <GameCard key={game._id} game={game} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Catalog;