import React from "react";
import ProjectCard from "./Pages/ProjectCard"; 

const projects = [
  {
    id: 1,
    title: "Project A",
    description: "Description of Project A",
    status: "In Progress",
    assignedTo: "John Doe",
    link: "/projects/1"
  },
  {
    id: 2,
    title: "Project B",
    description: "Description of Project B",
    status: "Completed",
    assignedTo: "Jane Smith",
    link: "/projects/2"
  },
  // Add more project objects as needed
];

const ProjectList = () => {
  return (
    <div className="row row-cols-1 row-cols-md-3 g-4">
      {projects.map((project) => (
        <div key={project.id} className="col">
          <ProjectCard project={project} />
        </div>
      ))}
    </div>
  );
};

export default ProjectList;
