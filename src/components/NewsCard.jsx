import { Link } from "react-router-dom";
import "../css/NewsCard.css";

const NewsCard = ({ news }) => {
    const content = (
        <>
            <div className="news-thumb">
                <img src={news.image} alt={`${news.title} image`} />
            </div>

            <div className="news-body">
                <div className="tag">{news.tag}</div>
                <h3 className="news-title">{news.title}</h3>
                <p className="news-desc">{news.description}</p>
            </div>
        </>
    );

    if (news.to) {
        return (
            <article className="news-card clickable">
                <Link to={news.to} className="news-link-card">
                    {content}
                </Link>
            </article>
        );
    }

    return <article className="news-card">{content}</article>;
};

export default NewsCard;