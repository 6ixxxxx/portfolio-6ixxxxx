import React, {useState} from "react";
import "./NavbarStyles.css";
import {FaBars, FaTimes, FaGreaterThan, FaLessThan } from "react-icons/fa";
import {BsSlashLg} from "react-icons/bs";
import { HashLink} from "react-router-hash-link";
import { Link } from "react-scroll";


const Navbar = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const homeClick = () => setClick(false);

    const [color, setColor] = useState(false);
    const changeColor = () => {
        if (window.scrollY >= 1) {
            setColor(true);
        } else {
            setColor(false);
        }
    };

    window.addEventListener("scroll", changeColor);

    return(
        <div className={color ? "header header-bg" : "header"}>
            <HashLink to="#"    
                    spy={true} smooth={true} offset={50} duration={500}
                    onClick={homeClick}>
                <h1>
                    <FaLessThan size={15} />
                    Portfolio-6ixxxxx
                    <BsSlashLg size={15} />
                    <FaGreaterThan size={15} />
                </h1>
            </HashLink>
            <ul className={click ? "nav-menu active":"nav-menu"}>
                <li>
                    <HashLink to="#"    
                    spy={true} smooth={true} offset={50} duration={500}
                    onClick={handleClick}>Home</HashLink>
                </li>
                <li>
                    <HashLink to="#about"  
                    spy={true} smooth={true} offset={-200} duration={500}
                    onClick={handleClick}>About</HashLink>
                </li>
                <li>
                    <HashLink to="#projects"   
                    spy={true} smooth={true} offset={50} duration={500}
                     onClick={handleClick}>Projects</HashLink>
                </li>
                <li>
                    <HashLink to="#contact"    
                    spy={true} smooth={true} offset={50} duration={500}
                    onClick={handleClick}>Contact</HashLink>
                </li>
            </ul>
            <div className="hamburger" onClick={handleClick}>
                {click ?
                (<FaTimes size={20} style={{color: "#fff"}}/>): 
                (<FaBars size={20}  style={{color: "#fff"}}/>) }
            </div>
        </div>
    )
}

export default Navbar;