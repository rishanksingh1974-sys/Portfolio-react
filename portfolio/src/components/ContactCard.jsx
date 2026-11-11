import "./ContactCard.css";

export default function ContactCard({ icon, title, value, btnText, link, description }) {
    return (
        <div className="ContactCard">
            <div className="contact-icon-wrapper">
                <span className="contact-icon">{icon}</span>
            </div>

            <h3 className="contact-channel-title">{title}</h3>
            <p className="contact-channel-value">{value}</p>
            <p className="contact-channel-desc">{description}</p>

            <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-btn"
            >
                <span>{btnText}</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    <polyline points="15 3 21 3 21 9"></polyline>
                    <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
            </a>
        </div>
    );
}
