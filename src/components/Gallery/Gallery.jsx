import React, { useState, useMemo } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import './Gallery.css';

const images = [
    { src: "https://plus.unsplash.com/premium_photo-1674605365723-15e6749630f4?q=80&w=687", tag: "Штип 2024", className: "large" },
    { src: "https://images.unsplash.com/photo-1452626038306-9aae5e071dd3?q=80&w=800", tag: "Подготовки", className: "" },
    { src: "https://images.unsplash.com/photo-1590333748338-d629e4564ad9?w=500", tag: "Штип 2024", className: "" },
    { src: "https://images.unsplash.com/photo-1532444458054-01a7dd3e9fca?q=80&w=1000", tag: "Штип 2023", className: "wide" },
    { src: "https://images.unsplash.com/photo-1574288763758-a17ce17c4088?w=500", tag: "Подготовки", className: "" },
    { src: "https://images.unsplash.com/flagged/photo-1556746834-cbb4a38ee593?w=500", tag: "Целна линија", className: "" },
    { src: "https://plus.unsplash.com/premium_photo-1726097593632-003c63d1dbb8?w=500", tag: "Штип 2023", className: "" },
    { src: "https://plus.unsplash.com/premium_photo-1664537976485-86c3a5d22ce9?w=500", tag: "Целна линија", className: "" },
    { src: "https://images.unsplash.com/photo-1502224562085-639556652f33?w=500", tag: "Штип 2024", className: "" }
];

const Gallery = () => {
    const [open, setOpen] = useState(false);
    const [index, setIndex] = useState(0);
    const [filter, setFilter] = useState('Сите');

    const filteredItems = useMemo(() => {
        return filter === 'Сите' ? images : images.filter(img => img.tag === filter);
    }, [filter]);

    const slides = useMemo(() => {
        return filteredItems.map((item) => ({ src: item.src }));
    }, [filteredItems]);

    const categories = ['Сите', 'Штип 2024', 'Штип 2023', 'Подготовки', 'Целна линија'];

    return (
        <section className="gallery-section">
            <div className="container">
                <h2 className="section-title">Фото <span className="highlight">Галерија</span></h2>

                <div className="filter-container">
                    {categories.map(category => (
                        <button
                            key={category}
                            className={`filter-btn ${filter === category ? 'active' : ''}`}
                            onClick={() => setFilter(category)}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                <div className="gallery-grid">
                    {filteredItems.map((image, i) => (
                        <div
                            key={`${filter}-${i}`}
                            className={`gallery-item ${image.className || ''}`}
                            onClick={() => {
                                setIndex(i);
                                setOpen(true);
                            }}
                        >
                            <img src={image.src} alt={image.tag} loading="lazy" />
                            <div className="overlay">
                                <span>Види 🔍</span>
                            </div>
                        </div>
                    ))}
                </div>

                <Lightbox
                    open={open}
                    close={() => setOpen(false)}
                    index={index}
                    slides={slides}
                />
            </div>
        </section>
    );
};

export default Gallery;