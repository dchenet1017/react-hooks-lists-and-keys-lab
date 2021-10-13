import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  console.log(projects);
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">
        {projects.map((masterPeice)=>{
          return(
            <ProjectItem key = {masterPeice.id} name = {masterPeice.name} about ={masterPeice.about} technologies={masterPeice.technologies} />
             
          )
          
        })}</div>
      
    </div>
  );
}

export default ProjectList;
