import { useState } from 'react';
import RunCard from './RunCard';
import './RunInfo.css';

const RunInfo = () => {

    const [filter, setFilter] = useState('all');

    const raceTypes = [
        {id: 1, distance: "42K", title: "Маратон", type: "pro", description: "Целосна патека за професионалци."},
        {id: 2, distance: "21K", title: "Полумаратон", type: "pro", description: "Најпопуларната трка за рекреативци."},
        {id: 3, distance: "5K", title: "Хуманитарна", type: "fun", description: "Трка за сите генерации и семејства."},
        {id: 4, distance: "500M", title: "Детска трка", type: "fun", description: "Забавна трка за најмалите учесници."}
    ];

    const filterOptions = [
        {id: 'all', label: 'Сите', icon: '🏁'},
        {id: 'pro', label: 'Професионални', icon: '🏃‍♂️'},
        {id: 'fun', label: 'За забава', icon: '🎉'}
    ];

    const filteredRaces = filter === 'all' ? raceTypes : raceTypes.filter(race => race.type === filter);

    return (
        <section className="run-info">
            <h2>Патеки на маратонот</h2>

            <div className="filter-container">
                {filterOptions.map(option => (
                    <button
                        key={option.id}
                        onClick={() => setFilter(option.id)}
                        className={`filter-btn ${filter === option.id ? 'active' : ''}`}
                    >
                        <span className="btn-icon">{option.icon}</span>
                        {option.label}
                    </button>
                ))}
            </div>
           {/*  <div className="filter-buttons">
                <button onClick={() => setFilter('all')} className={filter === 'all' ? 'active' : ''}>Сите</button>
                <button onClick={() => setFilter('pro')} className={filter === 'pro' ? 'active' : ''}>Професионални</button>
                <button onClick={() => setFilter('fun')} className={filter === 'fun' ? 'active' : ''}>За забава</button>
            </div>  */}
            <div className="info-grid">
            {filteredRaces.map((race) => (
                <RunCard
                    key={race.id}
                    {...race}
                    /* distance={race.distance}
                    title={race.title}
                    description={race.description} */
                />
            ))}
            </div>
        </section>
    );
};

export default RunInfo;