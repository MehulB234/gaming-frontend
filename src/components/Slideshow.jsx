import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../css/Slideshow.css";
import HomeSlide from "../images/slideshow/Home.png";
import HotDeals from "../images/slideshow/HotDeals.png";
import TopReleases from "../images/slideshow/TopReleases.png";

const defaultSlides = [
    {
        eyebrow: "GamerGauntlet",
        title: "Welcome to GamerGauntlet",
        subtitle: "Find the latest titles and deals.",
        image: HomeSlide ,
        cta: "Browse Games",
    },
    {
        eyebrow: "GamerGauntlet",
        title: "Hot Deals",
        subtitle: "Limited-time discounts!",
        image: HotDeals,
        cta: "Browse Games",
    },
    {
        eyebrow: "GamerGauntlet",
        title: "Top Releases",
        subtitle: "New and trending games.",
        image: TopReleases,
        cta: "Browse Games",
    },
];

const Slideshow = ({ slides = defaultSlides }) => {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        setActiveIndex(0);
    }, [slides]);

    const goPrev = () => {
        setActiveIndex((current) => (current - 1 + slides.length) % slides.length);
    };

    const goNext = () => {
        setActiveIndex((current) => (current + 1) % slides.length);
    };

    const currentSlide = slides[activeIndex];

    if (!slides.length) {
        return null;
    }

    return (
        <section className="slideshow" aria-label="Featured promotions">
            <div
                className="hero-slide"
                style={{ backgroundImage: `url(${currentSlide.image})` }}
            >
                <div className="hero-overlay" />

                <button
                    type="button"
                    className="hero-side hero-side-left"
                    onClick={goPrev}
                    aria-label="Previous slide"
                >
                    ‹
                </button>

                <div className="hero-inner">
                    <div className="eyebrow">{currentSlide.eyebrow}</div>
                    <h1>{currentSlide.title}</h1>
                    <p>{currentSlide.subtitle}</p>
                    <Link className="cta" to="/catalog">
                        {currentSlide.cta}
                    </Link>
                </div>

                <button
                    type="button"
                    className="hero-side hero-side-right"
                    onClick={goNext}
                    aria-label="Next slide"
                >
                    ›
                </button>

                <div className="hero-controls" aria-label="Slide controls">
                    {slides.map((slide, index) => (
                        <button
                            key={`${slide.title}-${index}`}
                            type="button"
                            className={`dot${index === activeIndex ? " active" : ""}`}
                            onClick={() => setActiveIndex(index)}
                            aria-label={`Show slide ${index + 1}`}
                            aria-pressed={index === activeIndex}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Slideshow;