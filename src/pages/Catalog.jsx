import "../css/Catalog.css";
import Slideshow from "../components/Slideshow";
import GameCard from "../components/GameCard";

import Assassin from "../images/Assassin.png";
import CallOfDuty from "../images/CallOfDuty.png";
import Cyberpunk2077 from "../images/Cyberpunk2077.png";
import EldenRing from "../images/EldenRing.png";
import FC26 from "../images/FC26.png";
import GodOfWar from "../images/GodOfWar.png";
import Halo from "../images/Halo.png";
import Minecraft from "../images/Minecraft.png";

const categoryFilters = [
    "All",
    "RPG",
    "Shooter",
    "Action",
    "Sports",
    "Adventure",
    "Sandbox",
    "Battle Royale",
];

const consoleFilters = ["All", "PlayStation", "Xbox", "PC", "Nintendo Switch"];

const catalogGames = [
    {
        title: "Elden Ring",
        console: "PlayStation",
        price: "$59.99",
        image: EldenRing,
        detailPath: "/elden-ring",
    },
    {
        title: "Call of Duty",
        console: "Xbox",
        price: "$59.99",
        image: CallOfDuty,
    },
    {
        title: "Cyberpunk 2077",
        console: "PC",
        price: "$49.99",
        image: Cyberpunk2077,
    },
    {
        title: "FC 26",
        console: "PlayStation",
        price: "$69.99",
        image: FC26,
    },
    {
        title: "Assassin's Creed",
        console: "Xbox",
        price: "$54.99",
        image: Assassin,
    },
    {
        title: "Minecraft",
        console: "PC",
        price: "$29.99",
        image: Minecraft,
    },
    {
        title: "God of War",
        console: "PlayStation",
        price: "$59.99",
        image: GodOfWar,
    },
    {
        title: "Halo Infinite",
        console: "Xbox",
        price: "$59.99",
        image: Halo,
    },
];

const Catalog = () => {
    return (
        <main id="catalog" className="catalog-page">
            <div className="catalog-wrap">
                <section className="catalog-hero" aria-label="Catalog feature">
                    <Slideshow />
                </section>

                <section className="catalog-content">
                    <h1 className="page-title">Game Catalog</h1>

                    <div className="filter-group">
                        <h2>Category</h2>
                        <div className="filter-row">
                            {categoryFilters.map((filter, index) => (
                                <button
                                    key={filter}
                                    type="button"
                                    className={index === 0 ? "filter-btn active" : "filter-btn"}
                                >
                                    {filter}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="filter-group">
                        <h2>Console</h2>
                        <div className="filter-row">
                            {consoleFilters.map((filter, index) => (
                                <button
                                    key={filter}
                                    type="button"
                                    className={index === 0 ? "filter-btn active" : "filter-btn"}
                                >
                                    {filter}
                                </button>
                            ))}
                        </div>
                    </div>

                    <section className="catalog-grid" aria-label="Game catalog">
                        {catalogGames.map((game) => (
                            <GameCard key={game.title} game={game} />
                        ))}
                    </section>
                </section>
            </div>
        </main>
    );
};

export default Catalog;