import React from "react";


const Projects = ( project ) => {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{project.title}</h5>
        <p className="card-text">{project.description}</p>
        <p className="card-text">Status: {project.status}</p>
        <p className="card-text">Assigned To: {project.assignedTo}</p>
        <a href={project.link} className="btn btn-primary">View Project</a>
      </div>
    </div>
  );
};

export default Projects;
