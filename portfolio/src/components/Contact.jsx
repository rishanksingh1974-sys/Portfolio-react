import ContactCard from "./ContactCard";
import "./ContactCard.css";

export default function Contact() {
    const contactData = [
        {
            icon: "📧",
            title: "Email",
            value: "rishanksingh1974@gmail.com",
            btnText: "Send an Email",
            link: "mailto:rishanksingh1974@gmail.com",
            description: "Feel free to reach out for projects, internships, or questions."
        },
        {
            icon: "💼",
            title: "LinkedIn",
            value: "Rishank Singh",
            btnText: "Connect on LinkedIn",
            link: "https://www.linkedin.com/in/rishank-singh-11161139b?utm_source=share_via&utm_content=profile&utm_medium=member_android",
            description: "Let's connect professionally and share tech updates."
        },
        {
            icon: "💻",
            title: "GitHub",
            value: "@rishanksingh1974-sys",
            btnText: "Explore Repositories",
            link: "https://github.com/rishanksingh1974-sys",
            description: "Check out my full-stack and IoT repositories."
        },
        {
            icon: "⚡",
            title: "LeetCode",
            value: "@rishank05072006",
            btnText: "View LeetCode Profile",
            link: "https://leetcode.com/u/rishank05072006/",
            description: "Explore my DSA progress and problem-solving solutions."
        }
    ];

    return (
        <section className="contact-section">
            <div className="contact-heading">
                <span className="contact-subtitle">GET IN TOUCH</span>
                <h1 className="contact-title">Let's Build Something Great Together.</h1>
                <p className="contact-desc">
                    Have an interesting idea, opportunity, or project in mind? I'd love to connect and explore possibilities together.
                </p>
            </div>

            <div className="contact-container">
                {contactData.map((item, index) => (
                    <ContactCard
                        key={index}
                        icon={item.icon}
                        title={item.title}
                        value={item.value}
                        btnText={item.btnText}
                        link={item.link}
                        description={item.description}
                    />
                ))}
            </div>
        </section>
    );
}
