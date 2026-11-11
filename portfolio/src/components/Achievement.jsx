import "./Achievement.css"
import AcCard from "./AcCard";
export default function Achievement() {

    const achievements = [
        {
            icon: "🏆",
            title: "JEE Examination",
            value: "94,662",
            description: "Secured a rank of 94,662 in the Joint Entrance Examination."
        },
        {
            icon: "🎓",
            title: "Academic Excellence",
            value: "9.2 CGPA",
            description: "Achieved an outstanding 9.2 CGPA in my first year of B.Tech."
        },
        {
            icon: "🚀",
            title: "Technical Leadership",
            value: "IoT Co-Lead",
            description: "Serving as IoT Co-Lead at the R&D Cell, contributing to technical innovation and collaborative projects."
        },

        {
            icon: "💻",
    title: "Problem Solving",
    value: "100+ Problems",
    description: "Successfully solved 100 problems on LeetCode, strengthening my DSA and programming skills."
        },{
    icon: "🎓",
    title: "CBSE Academic Excellence",
    value: "91%",
    description: "Secured 91% in CBSE Class 12, with 95 marks each in Mathematics, Physics, and Chemistry."
},
    ];

    return (
        <div style={{ textAlign: "center" }}>
            <h3>MY JOURNEY SO FAR</h3>
            <h1>Achievements & Milestones</h1>
            <p>A reflection of my dedication, learning, and growth.</p>

            <div class="AchieveCard">

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
        </div>);
}