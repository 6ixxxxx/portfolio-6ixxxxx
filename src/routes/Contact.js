import React from 'react'
import Navbar from '../components/Navbar'
import BgImg from '../components/BgImg'
import Footer from '../components/Footer'
import Form from '../components/Form'

const Contact = () => {
  return (
    <div>
        <Navbar/>
        <BgImg heading="Contact"
        text="Shoot me an email"   />
        <Form />
        <Footer />
    </div>
  )
}

export default Contact