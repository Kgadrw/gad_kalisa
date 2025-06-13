'use client'
import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import Experience from "../components/Experience"
import Projects from "../components/Projects"
import Contact from "../components/Contact"
import Footer from "../components/Footer"
import '../styles/globals.css'

import React from 'react'

const page = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Experience />
      <Projects />
      
      <Contact />
      <Footer />
    </div>
  )
}

export default page
