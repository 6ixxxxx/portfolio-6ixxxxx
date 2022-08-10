import "./ProjectsCard.css"
import React, { useEffect } from "react"
import Aos from "aos"
import "aos/dist/aos.css"

const ProjectsCard = (props) =>{

    useEffect(()=>{
        Aos.init({duration: 2000})
    }, [])
    return(
        <div className="project-card" data-aos="slide-up">
            <img src={props.imgsrc} alt="" />
            <h2 className="project-title">{props.title}</h2>
            <div className="pro-details">
                <p>{props.text}</p>
                <div className="pro-btns">
                    <a href={props.view}
                    target="_blank" 
                    rel="noreferrer"
                    className="btn">View</a>
                    
                    <a href={props.source}
                    target="_blank"
                    rel="noreferrer" 
                    className="btn">Source</a>
                </div>
            </div>
        </div>
    )
}

export default ProjectsCard