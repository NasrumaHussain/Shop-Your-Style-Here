import hamburger from "./icons/hamburger.png"
import "./NavBar.css"
import {useState} from "react"

function NavBar({onCategorySelect}){

  const [menuOpen, setMenuOpen] = useState(false);

  return(
    <>
    <nav className="navigation_bar">
      <img className="hamburger_icon" 
      src={hamburger} 
      alt="menu"
      onClick={() => setMenuOpen(!menuOpen)}
      />

      <ul className="navigation_list">
        <li>Home</li>
        <li>About</li>
        <li>Products</li>
        <li>Contact</li>
      </ul>
    </nav>

    {menuOpen && (
      <div className="hamburger_menu">
      <p onClick={() => onCategorySelect("All")}>All</p>
      <p onClick={() => {onCategorySelect("Shoes"); 
      setMenuOpen(false);}}>Shoes</p>
      <p onClick={() => {onCategorySelect("Hair Pins"); 
      setMenuOpen(false);}}>Hair Pins</p>
      </div>)}
      </> 
  );

}

export default NavBar