import "./NavbarStyle.css"
import React, { useState } from 'react'
import { Link } from "react-router-dom"
import {FaBars,FaTimes} from "react-icons/fa"


export default function NavBar() {
    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    const[color, setColor] = useState(false)
    const changeColor = () => {
      if(window.scrollY >= 100) {
        setColor(true)
      } else {
        setColor(false)
      }
     };
     window.addEventListener("scroll", changeColor);
  return (
    <div className="header"> 
    <Link to="/">
        <h1>Reuben Ampong</h1>
        </Link>
        <ul className={click ? "nav-menu   active" : 
         "nav-menu"}>
        <li>
            <Link to="/" >Home</Link>

        </li>

        <li>
            <Link to="/project" >
                Project</Link>

        </li>

        <li>
            <Link to="/about" >
                About</Link>

        </li>

        <li>
            <Link to="/contact" >
                Contact</Link>

        </li>
        </ul>
        <div className="hamburg" onClick={handleClick}>
          {click ? (<FaTimes size={20} style ={{color: "#fff"} 
          } />
          ) : (
           <FaBars size={20} style ={{color: "#fff"} 
          } />
          
          )}
            

        </div>

    </div>
  )
}
 