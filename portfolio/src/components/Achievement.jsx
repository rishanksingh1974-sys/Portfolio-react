import "./Achievement.css";
import AcCard from "./AcCard.jsx";

export default function Achievement() {
    const achievements = [
        {
            icon: "🏆",
            title: "JEE Examination",
            value: "94,662 Rank",
            description: "Secured a top percentile rank of 94,662 in the Joint Entrance Examination (JEE Main)."
        },
        {
            icon: "🎓",
            title: "Academic Excellence",
            value: "9.2 CGPA",
            description: "Achieved an outstanding 9.2 CGPA in my first year of B.Tech Computer Science."
        },
        {
            icon: "🚀",
            title: "Technical Leadership",
            value: "IoT Co-Lead",
            description: "Serving as IoT Co-Lead at the R&D Cell, contributing to hardware innovation and collaborative engineering projects."
        },
        {
            icon: "💻",
            title: "Problem Solving",
            value: "100+ Problems",
            description: "Successfully solved 100+ algorithmic problems on LeetCode, strengthening DSA in C++."
        },
        {
            icon: "📚",
            title: "CBSE Academic Excellence",
            value: "91% Aggregate",
            description: "Secured 91% in CBSE Class 12, with 95 marks each in Mathematics, Physics, and Chemistry."
        }
    ];

    return (
        <section className="achievement-section">
            <div className="achievement-heading">
                <span className="achievement-subtitle">MY JOURNEY SO FAR</span>
                <h1 className="achievement-title">Achievements & Milestones</h1>
                <p className="achievement-desc">
                    A reflection of dedication, continuous learning, and technical milestones.
                </p>
            </div>

            <div className="AchieveCard">
                {achievements.map((item, index) => (
                    <AcCard
                        key={index}
                        icon={item.icon}
                        title={item.title}
                        value={item.value}
                        description={item.description}
                    />
                ))}
            </div>
        </section>
    );
}
