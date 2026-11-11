import "./Skills.css";

export default function Skills() {
    return (
        <div className="Skills">
            <div className="skills-header">
                <span className="skills-subtitle">MY TECH ARSENAL</span>
                <h1 className="mainHeading">Skills & Technologies</h1>
                <h3 className="subHeading">The tools and technologies I use to turn ideas into reality.</h3>
            </div>

            <div className="skills-grid">
                {/* Frontend Development */}
                <div className="SkillCard">
                    <div className="card-top-icon">🎨</div>
                    <h2 className="alpha">Frontend Development</h2>
                    <p className="gama">Building responsive, modern, and interactive user interfaces.</p>
                    <div className="skills-badge-list">
                        <span className="beta">HTML5</span>
                        <span className="beta">CSS3</span>
                        <span className="beta">JavaScript</span>
                        <span className="beta">React.js</span>
                        <span className="beta">Bootstrap</span>
                    </div>
                </div>

                {/* Backend Development */}
                <div className="SkillCard">
                    <div className="card-top-icon">⚙️</div>
                    <h2 className="alpha">Backend Development</h2>
                    <p className="gama">Developing server-side logic, APIs, and scalable database systems.</p>
                    <div className="skills-badge-list">
                        <span className="beta">Node.js</span>
                        <span className="beta">Express.js</span>
                        <span className="beta">MongoDB</span>
                        <span className="beta">Mongoose</span>
                        <span className="beta">REST APIs</span>
                        <span className="beta">Authentication & Authorization</span>
                    </div>
                </div>

                {/* IoT & Hardware */}
                <div className="SkillCard">
                    <div className="card-top-icon">📡</div>
                    <h2 className="alpha">IoT & Hardware</h2>
                    <p className="gama">Connecting hardware, sensors, and software to build smart systems.</p>
                    <div className="skills-badge-list">
                        <span className="beta">Arduino</span>
                        <span className="beta">ESP32</span>
                        <span className="beta">Sensors & Actuators</span>
                        <span className="beta">Embedded Systems</span>
                        <span className="beta">Microcontrollers</span>
                        <span className="beta">IoT Communication Protocols</span>
                    </div>
                </div>

                {/* Programming & Academics */}
                <div className="SkillCard">
                    <div className="card-top-icon">💻</div>
                    <h2 className="alpha">Programming & Academics</h2>
                    <p className="gama">Strengthening programming fundamentals, problem solving, and core knowledge.</p>
                    <div className="skills-badge-list">
                        <span className="beta">C++</span>
                        <span className="beta">Data Structures & Algorithms</span>
                        <span className="beta">Object-Oriented Programming</span>
                        <span className="beta">Problem Solving</span>
                        <span className="beta">Engineering Fundamentals</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
