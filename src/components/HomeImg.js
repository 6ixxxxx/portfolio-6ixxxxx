import React from "react";
import "./HomeImg.css";
import IntroImg from "../assets/intro-bg.jpg";
import { HashLink } from "react-router-hash-link";

const HomeImg = () => {
    return(
        <div className="hero">
            <div className="mask">
                <img className="intro-img" 
                src={IntroImg} alt="vscode on monitor" />
            </div>
            <div className="content">
                <p>Hi, I'm Francis Onyenwe</p>
                <h3> A Freelance</h3>
                <h1>React Developer</h1>
            <div>
                <HashLink to="#projects"     
                    spy={true} smooth={true} offset={-100} duration={500}
                    className="btn">Projects</HashLink>
                <HashLink to="#contact"     
                    spy={true} smooth={true} offset={-100} duration={500}
                    className="btn light">Contact</HashLink>
            </div>
            </div>
        </div>
    )
}

export default HomeImg