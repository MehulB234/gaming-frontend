import { Link } from "react-router-dom";
import "../css/Wishlist.css";

const Wishlist = () => {
    return (
        <main id="wishlist" className="wishlist-page">
            <div className="wishlist-wrap">
                <h1 className="page-title">My Wishlist</h1>

                <section className="empty-state" aria-label="Empty wishlist">
                    <div className="empty-icon" aria-hidden="true">
                        ♥
                    </div>

                    <h2>Your wishlist is empty</h2>
                    <p>Start adding games you&apos;d like to buy later!</p>

                    <Link to="/catalog" className="cta-btn">
                        Browse Catalog
                    </Link>
                </section>
            </div>
        </main>
    );
};

export default Wishlist;