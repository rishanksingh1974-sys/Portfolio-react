import Navbar from "./components/navbar";
import Home from "./components/Home.jsx"

import Skills from "./components/Skills.jsx";
import Project from "./components/Project.jsx";
import Contact from "./components/Contact.jsx";
import { useState } from "react";
import Achievement from "./components/Achievement.jsx";
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
        setHide((prev) => ({
            ...prev,
            Home: true,
            Achievement: true,
            Skills: true,
            Project: true,
            Contact: true,
            [selected]: false
        }));
    };
    return (
        <>
            <Navbar handleClick={handleClick} />
            {!hide.Home && <Home />}
            {!hide.Achievement && <Achievement />}
            {!hide.Skills && <Skills />}
            {!hide.Project && <Project/>}
            {!hide.Contact && <Contact/>}

        </>
    );
}