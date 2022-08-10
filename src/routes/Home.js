import React from 'react'
import Navbar from '../components/Navbar'
import HomeImg from '../components/HomeImg'
import AboutContent from '../components/AboutContent'
import Form from '../components/Form'
import MyProjects from '../components/MyProjects'
import Footer from '../components/Footer'

const Home = () => {
  
  return (
    <div>
        <Navbar />
        <HomeImg />
        <AboutContent/>
        <MyProjects />
        <Form/>
        <Footer />
    </div>
  )
}

export default Home