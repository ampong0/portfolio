import React from 'react'
import NavBar from '../components/NavBar'
import Footer from "../components/Footer"
import HeroImg2 from '../components/HeroImg2'
import AboutContent from '../components/AboutContent'
export default function About() {
  return (

    
    <div>
       <NavBar />
      
        
       <HeroImg2  heading="ABOUT." text = "Im a friendly Front-End Web Developer coding on JavaScript"
        tex = "dreaming to help build complex web applications serving 2,000,000+ Users with Javascript technologies" />

     
      
       
       <AboutContent />
      <Footer />
    </div>
  )
}
