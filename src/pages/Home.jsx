import "../css/Home.css";
import Slideshow from "../components/Slideshow";
import GameCard from "../components/GameCard";
import NewsCard from "../components/NewsCard";

import EldenRing from "../images/EldenRing.png";
import CallOfDuty from "../images/CallOfDuty.png";
import Cyberpunk2077 from "../images/Cyberpunk2077.png";
import FC26 from "../images/FC26.png";
import Spiderman from "../images/Spiderman.jpg";
import MortalKombat from "../images/mortalkombat.png";

const featuredGames = [
    {
        title: "Elden Ring",
        console: "PS5/PC/Xbox",
        price: "$59.99",
        image: EldenRing,
        detailPath: "/elden-ring",
    },
    {
        title: "Call of Duty",
        console: "Xbox/PS5/PC",
        price: "$59.99",
        image: CallOfDuty,
    },
    {
        title: "Cyberpunk 2077",
        console: "PC/Xbox/PS5",
        price: "$49.99",
        image: Cyberpunk2077,
    },
    {
        title: "FC 26",
        console: "PS5/Xbox/PC",
        price: "$69.99",
        image: FC26,
    },
];

const newsItems = [
    {
        title: "Spider-Man 2",
        tag: "Coming April 2026",
        description: "The highly anticipated sequel returns with bigger set pieces, new villains, and a sprawling New York to explore.",
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
                            <GameCard key={game.title} game={game} />
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