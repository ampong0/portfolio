import "./WorkCard.css"
import React from 'react'
import project1 from "../assets/project1.png"
import { NavLink } from "react-router-dom"
import WorkCards from "./WorkCards"
import workCardData from "./WorkCardData"
export default function work() {
  return (
    <div className="work-container">
      <h1 className="project-heading">Projects</h1>
      <div className="project-container">
        {workCardData.map((val,ind) =>{
          return(
            <WorkCards
            key = {ind}
            imgsrc={val.imgsrc}
            title={val.title}
            text={val.text} 
            view={val.view}

            />
          )
        })}
         
    </div>
  </div>
  )
}
