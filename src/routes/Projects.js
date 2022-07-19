import React from 'react'
import Navbar from '../components/Navbar'
import BgImg from '../components/BgImg'
import Footer from '../components/Footer'
import PriceCard from '../components/PriceCard'
import MyProjects from '../components/MyProjects'

const Projects = () => {
  return (
    <div>
        <Navbar/>
        <BgImg heading="My Projects" 
        text="Here are some of my most recent
        works" />
        <MyProjects/>
        {/* <PriceCard/> */}
        <Footer />
    </div>
  )
}

export default Projects