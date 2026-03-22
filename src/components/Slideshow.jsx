import "../css/Slideshow.css";
import Home from "../images/slideshow/Home.png";

const Slideshow = () => {
    const importAll = (resource) => {
        return resource.keys().map(resource);
    };

    const images = importAll(
        require.context("../images/slideshow", false, /\.(png|jpe?g|svg|webp)$/)
    );

    return (
        <section className="slideshow">
            <img src={Home} alt="Country house" />

            <button id="next-arrow" className="arrow">
                &rsaquo;
            </button>

            <button id="prev-arrow" className="arrow">
                &lsaquo;
            </button>
        </section>
    );
};

export default Slideshow;