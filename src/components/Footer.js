import "./FooterStyles.css";
import React from "react";
import {FaHome, FaPhone, FaLinkedin, FaGithub,
     FaTwitter, FaMailBulk} from "react-icons/fa";

const Footer = () =>{
    return(
        <div className="footer">

            <div className="footer-container">

                <div className="left">

                    <div className="location">
                        <FaHome size={20} 
                        style={{ color:"#fff", marginRight: "2rem" }} />
                        <div>
                            <p>Enugu, Enugu State</p>
                            <p>Nigeria</p>
                        </div>
                    </div>

                    <div className="phone">
                        <h4>
                        <FaPhone size={20} 
                        style={{ color:"#fff", marginRight: "2rem" }} />
                            (+234) 814-0880-126
                        </h4>
                    </div>
                    
                    <div className="email">
                        <h4>
                         <a 
                        href="mailto:Francistrix@gmail.com"
                            >
                        <FaMailBulk size={20} 
                            style={{ color:"#fff", marginRight: "2rem" }} />                        
                            francistrix@gmail.com
                        </a>
                        </h4>
                    </div>
                    
                </div>

                <div className="right">
                        <h4>My Socials</h4>
                    <div className="socials" >
                        <a
                        href="https://www.linkedin.com/in/francis-onyenwe-516b2a233"
                        >
                         <FaLinkedin size={20} 
                        style={{ color:"#fff", marginRight: "2rem" }} />
                        </a>

                        <a 
                        href="https://github.com/6ixxxxx"
                        >
                        <FaGithub size={20} 
                        style={{ color:"#fff", marginRight: "2rem" }} />
                        </a>

                        <a
                        href="https://twitter.com/too6ixxxxy"
                        >
                            <FaTwitter size={20} 
                        style={{ color:"#fff", marginRight: "2rem" }} />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer