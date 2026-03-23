import "../css/About.css";
import Slideshow from "../components/Slideshow";

const highlights = [
    {
        title: "Extensive Catalog",
        description: "Browse thousands of games across all major platforms and genres.",
        icon: "🎮",
    },
    {
        title: "Community Driven",
        description: "Join a thriving community of players who share resources and tips.",
        icon: "👥",
    },
    {
        title: "Best Prices",
        description: "Competitive pricing and regular deals on top releases.",
        icon: "💳",
    },
    {
        title: "24/7 Support",
        description: "Our support team is ready to help with orders and questions.",
        icon: "🛟",
    },
];

const About = () => {
    return (
        <main id="about" className="about-page">
            <div className="about-wrap">

                {}
                <Slideshow />

                <section className="highlights-grid">
                    {highlights.map((item) => (
                        <article className="highlight-card" key={item.title}>
                            <div className="highlight-icon">{item.icon}</div>

                            <div className="highlight-copy">
                                <h2>{item.title}</h2>
                                <p>{item.description}</p>
                            </div>
                        </article>
                    ))}
                </section>

                <section className="mission-card">
                    <h2>Our Mission</h2>
                    <p>
                        At GamerGauntlet, gaming is more than entertainment — it&apos;s a way of life.
                        We provide easy access to great games, keep players informed on industry news,
                        and build a welcoming community for players of every level. Whether you play
                        casually or competitively, we make discovery, discussion, and shopping
                        delightful and simple.
                    </p>
                </section>

            </div>
        </main>
    );
};

export default About;