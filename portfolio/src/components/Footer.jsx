import "./Footer.css";

export default function Footer() {
    return (
        <footer className="footer-container">
            <div className="footer-content">
                {/* Cursive Signature */}
                <div className="footer-signature-wrapper">
                    <span className="footer-signature">Rishank</span>
                </div>

                {/* Motto */}
                <p className="footer-motto">
                    Always learning. Always building. Always improving.
                </p>

                <div className="footer-divider"></div>

                {/* Copyright */}
                <p className="footer-copyright">
                    © 2026 <span className="gold-text">Rishank Singh</span>. All rights reserved.
                </p>
            </div>
        </footer>
    );
}
