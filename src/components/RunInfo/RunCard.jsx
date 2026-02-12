
const RunCard = ({ distance, title, description}) => {
    return (
        <div className="info-card">
            <h3>{distance}</h3>
            <p><strong>{title}</strong></p>
            <p>{description}</p>
        </div>
    );
};

export default RunCard;