import { useEffect, useState } from "react";
import "../css/Home.css";
import Slideshow from "../components/Slideshow";
import GameCard from "../components/GameCard";
import NewsCard from "../components/NewsCard";

import Spiderman from "../images/Spiderman.jpg";
import MortalKombat from "../images/mortalkombat.png";

const newsItems = [
  {
    title: "Spider-Man 2",
    tag: "Coming April 2026",
    description:
      "The highly anticipated sequel returns with bigger set pieces, new villains, and a sprawling New York to explore.",
    image: Spiderman,
    to: "/spider-man-2",
  },
  {
    title: "Mortal Kombat",
    tag: "Coming September 2026",
    description: "New fighters and next-level visuals announced.",
    image: MortalKombat,
  },
];

const Home = () => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    fetch("https://demo-backend-4rk5.onrender.com/api/catalog")
      .then((response) => response.json())
      .then((data) => setGames(data))
      .catch((error) => console.error("Error loading featured games:", error));
  }, []);

  const featuredGames = games.slice(0, 4);

  return (
    <main id="home" className="home-page">
      <div className="home-wrap">
        <Slideshow />

        <section aria-labelledby="featured-title" className="content-section">
          <h2 id="featured-title" className="section-title">
            Featured Games
          </h2>

          <div className="featured-grid">
            {featuredGames.map((game) => (
              <GameCard key={game._id} game={game} />
            ))}
          </div>
        </section>

        <section aria-labelledby="news-title" className="content-section">
          <h2 id="news-title" className="section-title">
            Gaming News
          </h2>

          <div className="news-grid">
            {newsItems.map((news) => (
              <NewsCard key={news.title} news={news} />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
};

export default Home;