import "./AcCard.css";

export default function AcCard({ icon, title, value, description }) {
    return (
        <div className="AcCard">
            <div className="Ac-header">
                <div className="Ac-icon-box">
                    <span className="Ac-icon">{icon}</span>
                </div>
                <span className="Ac-badge">{title}</span>
            </div>

            <div className="Ac-body">
                <h2 className="Ac-value">{value}</h2>
                <p className="Ac-desc">{description}</p>
            </div>
        </div>
    );
}
