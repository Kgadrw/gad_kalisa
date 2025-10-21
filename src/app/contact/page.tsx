'use client'
import Contact from "../../components/Contact"
import Aurora from "../../components/Aurora"
import '../../styles/globals.css'

import React from 'react'

const ContactPage = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gray-900">
      {/* Aurora Background */}
      <div className="absolute inset-0">
        <Aurora
          colorStops={["#3A29FF", "#FF94B4", "#FF3232"]}
          blend={0.5}
          amplitude={1.0}
          speed={0.5}
        />
      </div>
      
      <div className="relative z-10">
        <Contact />
      </div>
    </div>
  )
}

export default ContactPage
