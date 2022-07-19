import React from "react";
import "./HomeImg.css";
import IntroImg from "../assets/intro-bg.jpg";
import { Link } from "react-router-dom";

const HomeImg = () => {
    return(
        <div className="hero">
            <div className="mask">
                <img className="intro-img" 
                src={IntroImg} alt="Intro-Image"/>
            </div>
            <div className="content">
                <p>Hi, I'm Francis Onyenwe</p>
                <h3> A Freelance</h3>
                <h1>React Developer</h1>
            <div>
                <Link to="/projects" className="btn">Projects</Link>
                <Link to="/contact" className="btn light">Contact</Link>
            </div>
            </div>
        </div>
    )
}

export default HomeImg