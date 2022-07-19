import React from 'react'
import Navbar from '../components/Navbar'
import HomeImg from '../components/HomeImg'
import Footer from '../components/Footer'
import MyProjects from '../components/MyProjects'

const Home = () => {
  return (
    <div>
        <Navbar />
        <HomeImg />
        <MyProjects />
        <Footer />
    </div>
  )
}

export default Home