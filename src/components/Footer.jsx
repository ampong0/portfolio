import React from 'react'
import "./FooterStyle.css"
import {FaHome,FaPhone,FaMailBulk,FaFacebook,FaTwitter,} from "react-icons/fa"

export default function Footer() {
  return (
    <div className='footer'>
    <div className='footer-container'> 
        <div className='left'>
            <div className='location'>
                <FaHome  size= {20} style = {{color:
                "#fff", marginRight: "2rem"}} />
                <div>
                    <p>123 Housing Society</p>
                    <p>Accra</p>
                 </div>
                 </div>
            <div className='phone'>
                <h4>
                <FaPhone  size= {20} style = {{color:
                "#fff", marginRight: "2rem"}} />
                +23548056290</h4>
            </div>
            <div className='email'>
                <h4>
                <FaMailBulk  size= {20} style = {{color:
                "#fff", marginRight: "2rem"}} />
                ampongreuben90@gmail.com
                </h4>
            </div>
        </div>

     <div className='right'>
        <h4>Qotes</h4>
        <p>The skillful are not abvious they appear to be Simple-minded<br />
        those who knows this knows the patterns of the Absolute<br />
        To knows the patterns is the subtle power.The Subtle power moves all things and has no name."
        </p>
            <div className='social'>
            <FaFacebook  size= {30} style = {{color:
                "#fff", marginRight: "1rem"}} />

            <FaTwitter  size= {30} style = {{color:
                "#fff", marginRight: "1rem"}} />
            </div>
            
            </div>
            
    </div>
    
    </div>
  )
}
