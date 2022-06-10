import React from "react";
import style from "./Projects.module.css";

const Projects = ({ project }) => {
  const { name, _id, image1 } = project;
  return (
    <div className={`${style.projects}`}>
      <img src={image1} alt="" className={`${style.projects_image}`} />
      <div className={`${style.projects_title}`}>
        <div className="text-center">
          <h2 className="text-2xl mb-5">{name}</h2>
          <button className="btn btn-outline btn-info rounded-none uppercase">
            Project Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default Projects;
