import "./HeroImg2.css"

import React, { Component } from 'react'

  export default class  extends Component{
    render(){
        return (
            <div className="hero-img">
                <div className="heading">
            <h1>{this.props.heading}</h1>
            <p>{this.props.text}</p>
            <p>{this.props.tex}</p>
            </div>
            </div>
          )
    }
 
}
