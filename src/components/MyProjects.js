import "./ProjectsCard.css"
import React from "react"
import ProjectsCard from "./ProjectsCard"
import ProjectsCardData from "./ProjectsCardData"

const Projects = () =>{
    return(
        <div className="work-container">
            <h1 className="project-heading" >Projects</h1>
            <div className="project-container">
                {ProjectsCardData.map((val, ind) => {
                    return (
                        <ProjectsCard
                            key={ind}
                            imgsrc={val.imgsrc}
                            title={val.title}
                            text={val.text}
                            view={val.view}
                            source={val.source}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default Projects