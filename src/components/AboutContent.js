import "./AboutContentStyles.css";
import reactjs from "../assets/reactjs.jpg"
import dev from "../assets/dev.jpg"
import React, { useEffect } from 'react'
import Aos from "aos"
import "aos/dist/aos.css"
import { HashLink } from "react-router-hash-link";
import { Link } from "react-scroll";;

const AboutContent = () => {

    useEffect(()=>{
        Aos.init({duration: 2000})
    }, [])    
  return (
    <section className="about" id="about">
        <div className="left" >
            <h1>Who am I?</h1>
          <div data-aos="slide-up">

            <p>I'm a React developer. <br/> I create smooth, 
             fast responsive websites for my clients.</p> 
             <p>
             I have over 2 years of experience with Wordpress development.<br/>
             I decided to switch to React in 2022 in order to have more 
             control of my tools and environment. </p> 
             <p>
             I also have basic control of Photoshop and figma.
             </p>

            <HashLink  to="#contact"    
                    spy={true} smooth={true} offset={-150} duration={500}
                    >
                <button className="btn">Contact</button>
            </HashLink>
           </div>
        </div>

        <div className="right">
            <div className="img-container" >
                <div className="img-stack top" data-aos="fade-right">
                    <img src={dev} className="img" 
                    alt="me at a party" />
                </div>
                <div className="img-stack bottom" data-aos="fade-down">
                    <img src={reactjs} className="img" 
                    alt="skillstack" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default AboutContent