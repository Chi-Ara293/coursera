import React from "react";
import { Link } from "react-router-dom";  
import instagram_icon from "../assets/instagram_icon.png"
import email_icon from "../assets/email_icon.png"

const Nav=()=>{
  return(
    <>
    <ul className="nav">
        <li className="nav-item">
          <a href="https://www.instagram.com/grasstone_/" target="_blank" rel="noopener noreferrer" className="nav-link">
            <img 
              src={instagram_icon} 
              alt="Instagram icon"
              className="nav-image" 
            />
            Instagram
          </a>
        </li>
        <li className="nav-item">
          <Link to="/contact"> 
            <img 
              src={email_icon} 
              alt="Email icon"
              className="nav-image" 
            />
            Contact me
          </Link>
        </li>
      </ul>
</>
  )
}
export default Nav;