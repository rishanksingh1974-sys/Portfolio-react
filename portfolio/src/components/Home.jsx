import "./Home.css";

export default function Home() {
    return (
        <div className="home-container">
            {/* Left Box: Profile Banner, Headline & Bio */}
            <div className="home-profile-card">
                <div className="profile-banner-container">
                    <div className="profile-img-wrapper">
                        <img 
                            src="/rishank.jpeg" 
                            alt="Rishank - Full Stack Developer & IoT Enthusiast" 
                            className="profile-img" 
                        />
                    </div>
                    <div className="status-badge">
                        <span className="status-dot"></span>
                        <span>Open to Opportunities</span>
                    </div>
                </div>

                <h1 className="hero-headline">
                    From Intelligent Devices to <span className="gold-accent">Interactive Experiences</span>.
                </h1>

                <h3 className="hero-subheadline">
                    Bringing together IoT, Web Development & Problem Solving
                </h3>

                <p className="hero-bio">
                    I'm a Computer Science undergraduate passionate about building innovative solutions through technology.
                    My interests span <b>Full-Stack Web Development (MERN)</b>, <b>IoT</b>, and <b>Data Structures & Algorithms in C++</b>.
                    Alongside exploring diverse domains, I maintain a strong academic foundation, securing a <b>9.2 CGPA</b> in my first year.
                    With a <b>JEE rank of 94,662</b>, I'm driven by curiosity, continuous learning, and the ambition to turn ideas into impactful real-world solutions.
                </p>

                {/* Social Quick Connect */}
                <div className="hero-social-links">
                    <a
                        href="https://github.com/rishanksingh1974-sys"
                        target="_blank"
                        rel="noreferrer"
                        className="social-btn"
                        title="GitHub Profile"
                    >
                        <span>💻 GitHub</span>
                    </a>
                    <a
                        href="https://www.linkedin.com/in/rishank-singh-11161139b?utm_source=share_via&utm_content=profile&utm_medium=member_android"
                        target="_blank"
                        rel="noreferrer"
                        className="social-btn"
                        title="LinkedIn Profile"
                    >
                        <span>💼 LinkedIn</span>
                    </a>
                    <a
                        href="https://leetcode.com/u/rishank05072006/"
                        target="_blank"
                        rel="noreferrer"
                        className="social-btn"
                        title="LeetCode Profile"
                    >
                        <span>⚡ LeetCode</span>
                    </a>
                    <a
                        href="mailto:rishanksingh1974@gmail.com"
                        className="social-btn"
                        title="Send Email"
                    >
                        <span>📧 Email</span>
                    </a>
                </div>

                {/* Skill Tags */}
                <div className="skills-badge-list">
                    <span className="skill-pill">React.js</span>
                    <span className="skill-pill">Node.js</span>
                    <span className="skill-pill">MongoDB</span>
                    <span className="skill-pill">Express.js</span>
                    <span className="skill-pill">C++ (DSA)</span>
                    <span className="skill-pill">IoT & Arduino</span>
                </div>
            </div>

            {/* Right Box: Code Terminal & Metrics */}
            <div className="home-details-card">
                {/* Code Terminal Mockup */}
                <div className="code-terminal">
                    <div className="terminal-header">
                        <div className="terminal-dots">
                            <span className="dot dot-red"></span>
                            <span className="dot dot-yellow"></span>
                            <span className="dot dot-green"></span>
                        </div>
                        <span className="terminal-title">developer.js</span>
                        <div className="terminal-action"></div>
                    </div>
                    <pre className="terminal-code">
                        <code>
                            <span className="token-keyword">const</span> <span className="token-var">developer</span> = &#123;{'\n'}
                            {'  '}<span className="token-key">name</span>: <span className="token-string">"Rishank"</span>,{'\n'}
                            {'  '}<span className="token-key">current</span>: <span className="token-string">"B.Tech Computer Science"</span>,{'\n'}
                            {'  '}<span className="token-key">skills</span>: [<span className="token-string">"React"</span>, <span className="token-string">"Node.js"</span>, <span className="token-string">"MongoDB"</span>, <span className="token-string">"Express"</span>, <span className="token-string">"IoT"</span>, <span className="token-string">"C++"</span>],{'\n'}
                            {'  '}<span className="token-key">passion</span>: <span className="token-string">"Exploring technology & building products with it"</span>{'\n'}
                            &#125;;
                        </code>
                    </pre>
                </div>

                {/* Highlights Grid */}
                <div className="stats-grid">
                    <div className="stat-card">
                        <h2 className="stat-value">9.2</h2>
                        <h4 className="stat-label">First-Year CGPA</h4>
                        <p className="stat-desc">Strong Academic Record</p>
                    </div>

                    <div className="stat-card">
                        <h2 className="stat-value">94,662</h2>
                        <h4 className="stat-label">JEE Main Rank</h4>
                        <p className="stat-desc">Top Percentile</p>
                    </div>

                    <div className="stat-card">
                        <h2 className="stat-value">MERN Stack</h2>
                        <h4 className="stat-label">Full-Stack Dev</h4>
                        <p className="stat-desc">Interactive Web Apps</p>
                    </div>

                    <div className="stat-card">
                        <h2 className="stat-value">C++ & IoT</h2>
                        <h4 className="stat-label">Problem Solving</h4>
                        <p className="stat-desc">Hardware & Data Structures</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
