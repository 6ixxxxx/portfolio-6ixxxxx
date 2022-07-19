import "./AboutContentStyles.css";
import reactjs from "../assets/reactjs.jpg"
import dev from "../assets/dev.jpg"
import React from 'react'
import { Link } from "react-router-dom";

const AboutContent = () => {
  return (
    <div className="about">
        <div className="left">
            <h1>Who am I?</h1>
            <p>I'm a React developer. <br/> I create smooth, 
             fast responsive websites for my clients.</p> 
             <p>
             I have over 1 year experience with Wordpress development.<br/>
             I decided to switch to React in 2022 in order to have more 
             control of my tools and environment. </p> 
             <p>
             I also have basic control of Photoshop and figma.
             </p>

            <Link  to="../contact">
                <button className="btn">Contact</button>
            </Link>
        </div>

        <div className="right">
            <div className="img-container">
                <div className="img-stack top">
                    <img src={dev} className="img" 
                    alt="skillstack" />
                </div>
                <div className="img-stack bottom">
                    <img src={reactjs} className="img" 
                    alt="skillstack" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutContent