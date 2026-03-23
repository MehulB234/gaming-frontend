import { Link } from "react-router-dom";
import "../css/SpiderMan.css";
import SpidermanImg from "../images/Spiderman.jpg";

const SpiderMan = () => {
    return (
        <main id="spider-man-page" className="news-detail-page">
            <div className="detail-wrap">
                <Link to="/news" className="back-link">
                    ← Back to News
                </Link>

                <section className="top-grid">
                    <div className="cover-card">
                        <img src={SpidermanImg} alt="Spider-Man 2" />
                    </div>

                    <div className="summary-card">
                        <div className="pill">Coming April 2026</div>
                        <h1>Spider-Man 2</h1>
                        <p className="summary-text">
                            The highly anticipated sequel returns with bigger set pieces, new villains, and a sprawling New York to explore.
                        </p>

                        <div className="action-row">
                            <button type="button" className="primary-btn">
                                🛒 Add to Cart
                            </button>
                            <button type="button" className="secondary-btn">
                                ♡ Add to Wishlist
                            </button>
                        </div>
                    </div>
                </section>

                <section className="panel">
                    <h2>Full Story</h2>
                    <p>
                        Insomniac Games is back with a bold follow-up that expands the story and the city. Spider-Man 2 brings upgraded traversal mechanics, larger set pieces, and a deeper story focused on the partnership and rivalry between Peter Parker and Miles Morales.
                    </p>
                    <p>
                        The sequel introduces new enemy factions and a roster of fan-favorite villains reimagined with modern visuals and advanced AI. Players can expect a campaign filled with cinematic encounters, side content across New York neighborhoods, and expanded cooperative moments that highlight both heroes&apos; unique playstyles.
                    </p>
                    <p>
                        From web-swinging through densely populated streets to high-impact boss battles on rooftops, Spider-Man 2 aims to deliver a more dynamic, expressive, and connected superhero experience.
                    </p>
                </section>

                <section className="panel">
                    <h2>Key Details</h2>

                    <div className="details-grid">
                        <div className="detail-row">
                            <span>Release Window:</span>
                            <span>April 2026</span>
                        </div>
                        <div className="detail-row">
                            <span>Modes:</span>
                            <span>Single-player</span>
                        </div>
                        <div className="detail-row">
                            <span>Platforms:</span>
                            <span>PlayStation</span>
                        </div>
                        <div className="detail-row">
                            <span>Expected Price:</span>
                            <span>TBD</span>
                        </div>
                        <div className="detail-row">
                            <span>Developer:</span>
                            <span>Insomniac Games</span>
                        </div>
                        <div className="detail-row">
                            <span>Rating:</span>
                            <span>TBA</span>
                        </div>
                    </div>
                </section>

                <section className="panel">
                    <h2>Why We&apos;re Hyped</h2>
                    <ul className="bullet-list">
                        <li>Expanded traversal and new web gadgets</li>
                        <li>More dynamic side content and location variety</li>
                        <li>Improved enemy AI and cinematic boss encounters</li>
                    </ul>
                </section>
            </div>
        </main>
    );
};

export default SpiderMan;