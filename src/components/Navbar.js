import React, {useState} from "react";
import "./NavbarStyles.css";
import {Link} from "react-router-dom";
import {FaBars, FaTimes, FaGreaterThan, FaLessThan } from "react-icons/fa";
import {BsSlashLg} from "react-icons/bs";


const Navbar = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

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
            <Link to="/">
                <h1>
                    <FaLessThan size={15} />
                    Portfolio-6ixxxxx
                    <BsSlashLg size={15} />
                    <FaGreaterThan size={15} />
                </h1>
            </Link>
            <ul className={click ? "nav-menu active":"nav-menu"}>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/projects">Projects</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
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