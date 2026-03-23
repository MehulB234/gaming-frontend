import { Link } from "react-router-dom";
import "../css/EldenRing.css";
import EldenRingImg from "../images/EldenRing.png";

const EldenRing = () => {
    return (
        <main id="elden-ring-page" className="game-detail-page">
            <div className="detail-wrap">
                <Link to="/catalog" className="back-link">
                    ← Back to Catalog
                </Link>

                <section className="top-grid">
                    <div className="cover-card">
                        <img src={EldenRingImg} alt="Elden Ring cover" />
                    </div>

                    <div className="summary-card">
                        <h1>Elden Ring</h1>

                        <div className="meta-row">
                            <span className="pill">RPG</span>
                            <span className="platform">PlayStation</span>
                        </div>

                        <div className="rating-row" aria-label="Rating">
                            <span className="stars">★★★★★</span>
                            <span className="rating-text">(4.9 out of 5)</span>
                        </div>

                        <div className="price-box">
                            <span className="price">$59.99</span>
                        </div>

                        <div className="action-row">
                            <button type="button" className="primary-btn">
                                🛒 Add to Cart
                            </button>
                            <button type="button" className="secondary-btn">
                                ♡ Add to Wishlist
                            </button>
                        </div>

                        <div className="info-box">
                            <div className="info-row">
                                <span>Release Date:</span>
                                <span>February 25, 2022</span>
                            </div>
                            <div className="info-row">
                                <span>Publisher:</span>
                                <span>Bandai Namco Entertainment</span>
                            </div>
                            <div className="info-row">
                                <span>Developer:</span>
                                <span>FromSoftware</span>
                            </div>
                            <div className="info-row">
                                <span>Players:</span>
                                <span>Single-player, Online Co-op</span>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="panel">
                    <h2>About This Game</h2>
                    <p>
                        THE NEW FANTASY ACTION RPG. Rise, Tarnished, and be guided by grace to
                        brandish the power of the Elden Ring and become an Elden Lord in the Lands
                        Between. In the Lands Between ruled by Queen Marika the Eternal, the Elden Ring,
                        the source of the Erdtree, has been shattered.
                    </p>
                    <p>
                        Marika&apos;s offspring, demigods all, claimed the shards of the Elden Ring known as
                        the Great Runes, and the mad taint of their newfound strength triggered a war:
                        The Shattering. A war that meant abandonment by the Greater Will. And now the
                        guidance of grace will be brought to the Tarnished who were spurned by the grace
                        of gold and exiled from the Lands Between.
                    </p>
                    <p>
                        A vast world where open fields with a variety of situations and huge dungeons
                        with complex and three-dimensional designs are seamlessly connected. As you
                        explore, the joy of discovering unknown and overwhelming threats await you,
                        leading to a high sense of accomplishment.
                    </p>
                </section>

                <section className="panel">
                    <h2>Key Features</h2>

                    <div className="feature-grid">
                        <ul>
                            <li>A vast world full of excitement</li>
                            <li>Epic boss battles and challenging encounters</li>
                            <li>Online multiplayer and co-op gameplay</li>
                        </ul>
                        <ul>
                            <li>Create your own character and combat style</li>
                            <li>Seamless open-world exploration on horseback</li>
                            <li>Dark fantasy world created by Hidetaka Miyazaki and George R.R. Martin</li>
                        </ul>
                    </div>
                </section>

                <section className="panel">
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
                                <li>Graphics: NVIDIA GTX 1070 8GB / AMD RX Vega 56 8GB</li>
                            </ul>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
};

export default EldenRing;