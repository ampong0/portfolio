import "./AboutContent.css"
import React from 'react'
import { Link } from "react-router-dom"
import React1 from "../assets/intro-bg.jpg"
import Project4 from "../assets/images.jpg"

export default function () {
  return (
      
    <div className="about">
        <div className="left">
     <h1>Who Am I ?</h1>
     <p>
         I'm very ambitious front-end developer looking for a role in established IT company with
         the opportunity to work with the latest technologies on chellenging and diverse projects.<br />
         I'm quietly confident,naturally curious, and perpetually working on improving my chops one 
         design problem at a time.<br />
         if I need to define myself in one sentence that would be a sports fanatic and tech-obsessed!!!
     </p>
     <Link to="/contact">
     <button className="btn">Contact</button>
     </Link>
        </div>
        
       
        <div className="right">
            <div className="img-container">
                <div className="img-stack top">
                    <img src={React1}
                    className = "img" alt= "true" /> 
                    
                </div>

                <div className="img-stack bottom">
                    <img src={Project4}
                    className = "img" alt= "true" />
                    
                </div>

            </div>
        </div>
    </div>
    
  )
}
