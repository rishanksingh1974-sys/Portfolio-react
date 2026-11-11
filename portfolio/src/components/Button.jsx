import "./Button.css"
export default function Button({name,handleClick}){
    return(
        <button className="button" onClick={handleClick} name={name}>{name}</button>
    )
}