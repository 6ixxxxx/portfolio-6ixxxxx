import React from 'react'
import Navbar from '../components/Navbar'
import BgImg from '../components/BgImg'
import Footer from '../components/Footer'
import AboutContent from '../components/AboutContent'

const About = () => {
  return (
    <div>
        <Navbar/>
        <BgImg heading="About Me"
        text="" />
        <AboutContent/>
        <Footer />
    </div>
  )
}

export default About