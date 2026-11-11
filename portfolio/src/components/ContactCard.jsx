import "./ContactCard.css"
export default function ContactCard({ icon, title, value, link, description }) {
    return (
        <div className="ContactCard">

            <div className="Contact-icon">
                {icon}
            </div>

            <h3>{title}</h3>

            <a href={link} target="_blank" rel="noopener noreferrer">
                {value}
            </a>

            <p className="des">{description}</p>

        </div>
    );
}
