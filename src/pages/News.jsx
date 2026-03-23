import "../css/News.css";
import NewsCard from "../components/NewsCard";

import Spiderman from "../images/Spiderman.jpg";
import MortalKombat from "../images/mortalkombat.png";
import HotDeals from "../images/slideshow/HotDeals.png";
import HomeSlide from "../images/slideshow/Home.png";

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
    {
        title: "Weekend Hot Deals — Up to 50% Off",
        tag: "Deal",
        description: "Stock up on the best titles this weekend. Limited time offers on top releases and indie gems.",
        image: HotDeals,
    },
    {
        title: "Release Roundup — February Highlights",
        tag: "Top Story",
        description: "A quick look at what shipped this month and what to watch for in March.",
        image: HomeSlide,
    },
];

const News = () => {
    return (
        <main id="news" className="news-page">
            <div className="news-wrap">
                <h1 className="page-title">Gaming News</h1>

                <section className="news-grid" aria-label="Gaming news articles">
                    {newsItems.map((item) => (
                        <NewsCard key={item.title} news={item} />
                    ))}
                </section>
            </div>
        </main>
    );
};

export default News;