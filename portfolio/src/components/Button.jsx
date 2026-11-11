import "./Button.css";

export default function Button({ name, handleClick, isActive = false }) {
  return (
    <button
      className={`button nav-button ${isActive ? "active" : ""}`}
      onClick={handleClick}
      name={name}
      type="button"
    >
      {name}
    </button>
  );
}
