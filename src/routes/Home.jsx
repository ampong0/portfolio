import React from 'react'
import NavBar from '../components/NavBar'
import HeroImg from "../components/HeroImg"
import Footer from "../components/Footer"
import Work from "../components/Work"

export default function Home() {
  return  (
      <div>
      <NavBar />
      <HeroImg />
      <Work />
      <Footer />
    </div>
  )
};
