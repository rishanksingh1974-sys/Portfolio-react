import Navbar from "./components/navbar";
import Home from "./components/Home.jsx";
import Skills from "./components/Skills.jsx";
import Project from "./components/Projects.jsx";
import Contact from "./components/Contact.jsx";
import Achievement from "./components/Achievement.jsx";
import Footer from "./components/Footer.jsx";
import { useState } from "react";

export default function Components() {
    let [hide, setHide] = useState({
        Home: false,
        Achievement: true,
        Skills: true,
        Project: true,
        Contact: true
    });

    let handleClick = (event) => {
        let selected = event.target.name;
        console.log(selected);
        setHide({
            Home: true,
            Achievement: true,
            Skills: true,
            Project: true,
            Contact: true,
            [selected]: false
        });
    };

    // Determine the active tab
    const activeTab = Object.keys(hide).find((key) => !hide[key]) || "Home";

    return (
        <div className="portfolio-app">
            <Navbar handleClick={handleClick} activeTab={activeTab} />
            <main className="main-content">
                {!hide.Home && <Home />}
                {!hide.Achievement && <Achievement />}
                {!hide.Skills && <Skills />}
                {!hide.Project && <Project />}
                {!hide.Contact && <Contact />}
            </main>
            <Footer />
        </div>
    );
}
