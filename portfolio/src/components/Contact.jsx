import ContactCard from "./ContactCard";

export default function Contact() {

    const contactData = [
        {
            icon: "📧",
            title: "Email",
            value: "rishanksingh1974@gmail.com",
            link: "mailto:rishanksingh1974@gmail.com",
            description: "Feel free to reach out for opportunities."
        },
        {
            icon: "💼",
            title: "LinkedIn",
            value: "Connect with me",
            link: "https://www.linkedin.com/in/rishank-singh-11161139b?utm_source=share_via&utm_content=profile&utm_medium=member_android",
            description: "Let's connect professionally."
        },
        {
            icon: "💻",
            title: "GitHub",
            value: "Explore my repositories",
            link: "https://github.com/rishanksingh1974-sys",
            description: "Check out my projects and contributions."
        },
        {
            icon: "⚡",
            title: "LeetCode",
            value: "My Coding Journey",
            link: "https://leetcode.com/u/rishank05072006/",
            description: "Explore my DSA and problem-solving journey."
        }
    ];

    return (
        <div>
            <h3 className="con" style={{textAlign:"center"}}>GET IN TOUCH</h3>
            <h1 className="con" style={{textAlign:"center"}}>Let's Build Something Great Together.</h1>
            <p className="con" style={{textAlign:"center"}}>Have an interesting idea, opportunity, or project in mind? I'd love to connect and explore possibilities together.</p>
            <div className="contact-container">
                {contactData.map((item, index) => (
                    <ContactCard
                        key={index}
                        icon={item.icon}
                        title={item.title}
                        value={item.value}
                        link={item.link}
                        description={item.description}
                    />
                ))}
            </div>
        </div>);
}