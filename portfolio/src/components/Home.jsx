import "./Home.css"

export default function Home() {
    return (
        <div className="Home">
            <div className="homeBox">
                <img src="/rishank.jpeg" alt="Rishank" height="250px" ></img>
                <h1>From Intelligent Devices to Interactive Experiences.</h1>
                <p>Bringing together IoT, web development, and problem-solving.</p>
                <p>I'm a Computer Science undergraduate passionate about building innovative solutions through technology.
                    My interests span <b>Full-Stack Web Development (MERN), IoT, and Data Structures & Algorithms in C++</b>.
                    Alongside exploring different areas of technology, I maintain a strong academic foundation,
                    securing a <b>9.2 CGPA</b> in my first year. With a <b>JEE rank of 94,662</b>, I'm driven by curiosity, continuous learning, and the
                    ambition to turn ideas into impactful real-world solutions.</p>
            </div>
            <div className="homeBox">
                <div>
                    <h4 style={{ whiteSpace: "pre-line" }}>
                        {`
           let developer={
           name:"Rishank",
           skills:["React","Node.js","MongoDb","Express,"IOT"],
           passion:"Exploring about technology and building products with it"
           current:"B-Tech Student"
           }
           `}
                    </h4>
                </div>

                <div className="homeCard">
                    <div className="Card">
                        <h1>9.2</h1>
                        <h4>First-year cgp</h4>
                    </div>

                    <div className="Card">
                        <h1>94,662</h1>
                        <h4>Jee-Rank</h4>
                    </div >

                    <div className="Card">
                        <h1>MERN Stack</h1>
                        <h4>Full-stack development</h4>
                    </div>

                    <div className="Card">
                        <h1>C++ & IoT</h1>
                        <h4>Problem solving & connected devices</h4>
                    </div>

                </div>
            </div>
        </div>);
}