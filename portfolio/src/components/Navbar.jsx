import Button from "./Button";
import "./navbar.css";

export default function Navbar({ handleClick, activeTab = "Home" }) {
  const navItems = ["Home", "Skills", "Achievement", "Project", "Contact"];

  return (
    <header className="navbar-header">
      <nav className="navbar">
        <div className="navbar-pill-container">
          {navItems.map((item) => (
            <Button
              key={item}
              name={item}
              handleClick={handleClick}
              isActive={activeTab === item}
            />
          ))}
        </div>
      </nav>
    </header>
  );
}
