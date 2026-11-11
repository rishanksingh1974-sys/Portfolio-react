
import ProjectCard from "./ProjectCard.jsx";
import "./Projects.css";

export default function Projects() {
  const majorProjects = [
    {
      id: 1,
      title: "Wanderlust",
      description:
        "A full-stack travel listing platform where users can explore stays, create listings, and manage their travel experiences.",
      image: "/Wanderlust.png",
      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
        "Node.js",
        "Express.js",
        "MongoDB"
      ],
      github: "https://github.com/rishanksingh1974-sys/Air-bnb", // Add your GitHub repository URL
     
    }
  ];

  const minorProjects = [
    {
      id: 2,
      title: "Weather Search",
      description:
        "A React application that allows users to search for weather information by entering a city name.",
      image: "/weather.png",
      technologies: ["React", "JavaScript", "Weather API", "CSS"],
      github: "https://github.com/rishanksingh1974-sys/Weather-App",
      live: "https://weather-app-rho-lovat-71.vercel.app/"
    },
    {
      id: 3,
      title: "Simon Game",
      description:
        "A browser-based memory game where players repeat an increasingly complex sequence of colors and sounds.",
      image: "/simon.png",
      technologies: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/rishanksingh1974-sys/Simon-game",
      live: "https://simongame-five-lovat.vercel.app/"
    },
    {
      id: 4,
      title: "Spotify Clone",
      description:
        "A frontend recreation of Spotify's music player interface, built to practice website layouts and CSS styling.",
      image: "/spotify.png",
      technologies: ["HTML", "CSS"],
      github: "https://github.com/rishanksingh1974-sys/Project-Spotify-",
      live: "https://spotify-rishank3.vercel.app/"
    }
  ];

  return (
    <section className="projects-section" id="projects">

      <div className="projects-heading">
        <span className="projects-subtitle">WHAT I'VE BUILT</span>
        <h2>My Projects</h2>
        <p>
          Turning ideas into reality through code, creativity,
          and continuous learning.
        </p>
      </div>

      {/* Major Projects */}
      <div className="project-category">
        <div className="category-heading">
          <h3>Major Projects</h3>
          <span>{majorProjects.length} Project</span>
        </div>

        <div className="projects-grid">
          {majorProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>

      {/* Minor Projects */}
      <div className="project-category">
        <div className="category-heading">
          <h3>Minor Projects</h3>
          <span>{minorProjects.length} Projects</span>
        </div>

        <div className="projects-grid">
          {minorProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>

    </section>
  );
}
