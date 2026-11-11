import "./Skills.css"

export default function Skills(){
    return(<div className="Skills">
       
        <div className="SkillCard">
            <h2 className="alpha">Frontend Development</h2>
            <p className="gama">Building responsive and interactive user interfaces.</p>
            
                <h5 className="beta">HTML5</h5>
                <h5 className="beta">CSS3</h5>
                <h5 className="beta">JavaScript</h5>
                <h5 className="beta">React.js</h5>
                <h5 className="beta">Bootstrap</h5>
            
        </div>

         <div className="SkillCard">
             <h2 className="alpha">Backend Development</h2>
            <p className="gama">Developing server-side logic, APIs, and database systems.</p>
            
                <h5 className="beta">Node.js</h5>
                <h5 className="beta">Express.js</h5>
                <h5 className="beta">MongoDB</h5>
                <h5 className="beta">Mongoose</h5>
                <h5 className="beta">REST APIs</h5>
                <h5 className="beta">Authentication & Authorization</h5>
        </div>

         <div className="SkillCard">
              <h2 className="alpha">IoT & Hardware</h2>
            <p className="gama">Connecting hardware, sensors, and software to build smart systems.</p>
            
                <h5 className="beta">Arduino</h5>
                <h5 className="beta">ESP32</h5>
                <h5 className="beta">Sensors & Actuators</h5>
                <h5 className="beta">Embedded Systems</h5>
                <h5 className="beta">Microcontrollers</h5>
                <h5 className="beta">IoT Communication Protocols</h5>
        </div>

         <div className="SkillCard">
               <h2 className="alpha">Programming & Academics</h2>
            <p className="gama" >Strengthening programming fundamentals and engineering knowledge.</p>
            
                <h5 className="beta">C++</h5>
                <h5 className="beta">Data Structures & Algorithms</h5>
                <h5 className="beta">Object-Oriented Programming</h5>
                <h5 className="beta">Problem Solving</h5>
                <h5 className="beta">Engineering Fundamentals</h5>
        </div>

    </div>);
}