import { useState, useEffect } from 'react';
import './News.css';

const News = () => {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts?_limit=3')
            .then(response => response.json())
            .then(data => {
                setArticles(data);
                setLoading(false);
            })
            .catch(error => console.error("Грешка при вчитување:", error));
        },[]);

    return (
        <section className="news-section">
            <h2>Најнови вести</h2>
            {loading ? (
                <p>Се Вчитува...</p>
            )
         : (
            <div className="news-grid">
                {articles.map(post => (
                    <div key={post.id} className="news-card">
                        <h3>{post.title.substring(0,  20)}...</h3>
                        <p>Прочитајте ги најновите информации околу подготовките за патеката.</p>
                        <span className="news-date">05.02.2026</span>    
                    </div>
                ))}
            </div>
         )}
        </section>
    );
    };
    export default News;
