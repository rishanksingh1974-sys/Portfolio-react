import Button from "./Button"
import "./navbar.css"
export default function Navbar({handleClick}){
  return(
  <div className="navbar">
  <Button name="Home" handleClick={handleClick}/>
  <Button name="Skills" handleClick={handleClick}/>
  <Button name="Achievement" handleClick={handleClick}/>
  <Button name="Project" handleClick={handleClick}/>
  <Button name="Contact" handleClick={handleClick}/>
  </div>);
}