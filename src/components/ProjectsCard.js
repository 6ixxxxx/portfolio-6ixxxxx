import "./ProjectsCard.css"
import React from "react"

const ProjectsCard = (props) =>{
    return(
        <div className="project-card">
            <img src={props.imgsrc} alt="image" />
            <h2 className="project-title">{props.title}</h2>
            <div className="pro-details">
                <p>{props.text}</p>
                <div className="pro-btns">
                    <a href={props.view}
                    target="_blank" 
                    className="btn">View</a>
                    
                    <a href={props.source}
                    target="_blank" 
                    className="btn">Source</a>
                </div>
            </div>
        </div>
    )
}

export default ProjectsCard