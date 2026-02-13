import { useState, useEffect } from 'react';
import './News.css';
const newData = [
    {
        id: 1,
        title: "Регистрациите се отворени!",
        date: "15 Март, 2026",
        image: "https://images.unsplash.com/photo-1530541930197-ff16ac917b0e?q=80&w=500",
        description: "Биди дел од најголемиот спортски настап во Македонија. Пријави се на време за твојата омилена трка."
    },
    {
        id: 2,
        title: "Нова рута за маратонот",
        date: "20 Март, 2026",
        image: "https://images.unsplash.com/photo-1452626038306-9aae5e071dd3?q=80&w=500",
        description: "Годинава воведуваме нова, побрза рута која поминува низ срцето на градот."
    },
    {
        id: 3,
        title: "Совети за тренинг",
        date: "02 Април, 2026",
        image: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?q=80&w=500",
        description: "Нашите врвни тренери подготвија специјална програма за почетници која ќе ви помогне да се подготвите."
    }
];

const News = () => {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setArticles(newData);
            setLoading(false);
        }, 1000);
    }, []);

    return (
        <section className="news-section">
            <h2>Најнови вести</h2>
            {loading ? (
                <p className="loading-text">Се Вчитува...</p>
            )
         : (
            <div className="news-grid">
                {articles.map(item => (
                    <div key={item.id} className="news-card">
                        <img src={item.image} alt={item.title} className="news-image" />
                        <div className="news-content">
                            <span className="news-date">{item.date}</span>
                            <h3>{item.title}</h3>
                            <p>{item.description}</p>
                            <button className="read-more">Прочитај повеќе</button>
                        </div>   
                    </div>
                ))}
            </div>
         )}
        </section>
    );
    };
    export default News;
