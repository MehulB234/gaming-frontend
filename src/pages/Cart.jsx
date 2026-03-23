import { Link } from "react-router-dom";
import "../css/Cart.css";

const Cart = () => {
    return (
        <main id="cart" className="cart-page">
            <div className="cart-wrap">
                <h1 className="page-title">Shopping Cart</h1>

                <section className="empty-state" aria-label="Empty cart">
                    <div className="empty-icon" aria-hidden="true">
                        🛒
                    </div>

                    <h2>Your cart is empty</h2>
                    <p>Add some games to get started!</p>

                    <Link to="/catalog" className="cta-btn">
                        Browse Catalog
                    </Link>
                </section>
            </div>
        </main>
    );
};

export default Cart;