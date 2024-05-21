import React from "react";
import "./Projects.css";
import github_logo from "../Assets/github_3291695.png";
import projects from "../../projects.json";

function Projects() {
  return (
  
  <div className="container d-flex justify-content-center">
      <div className="row mt-5">
        {projects.map((project) => (
          <div key={project.id} className="col-md-4 col-lg-3 col-sm-6 mb-4">
            <div className="card">
              <div className="image-cotainer"><img src={project.image} className="card-img-top" alt={project.title} /></div>
              <div className="card-body">
                <h5 className="card-title">{project.title}</h5>
                <h6 className="card-text">{project.domain}</h6>
                <a href={project.link} className="mt-1" target="_blank" rel="noreferrer">
                  <img src={github_logo} alt="GitHub logo" className="github" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
