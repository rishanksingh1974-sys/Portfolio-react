import "./AcCard.css"


export default function AcCard({ icon, title, value, description }) {
    return (
        <div className="AcCard">
            <div className="Ac-icon">{icon}</div>

            <h3>{title}</h3>
            <h2>{value}</h2>
            <p>{description}</p>
        </div>
    );
}
