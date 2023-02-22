import "./HeroImgStyle.css"
import introImg from "../assets/intro-bn.jpg"
import React from 'react'
import { Link } from "react-router-dom"

export default function HeroImg() {
  return (
    <div className="hero">
    <div className="mask">
        <img  className ="intro-img" 
         src={introImg} alt = "introImg" />
    </div>
    <div className="content">
        <p>Hi, MY NAME IS REUBEN AMPONG</p>
        <h1>React and Javascript Developer</h1>
        <div>
            <Link to="/project" className="btn">Projects</Link>
            
            <Link to="/contact" className="btn btn-light">Contact</Link>   
        
        </div>

        
    </div>
    </div>
  )
}
