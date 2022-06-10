import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useProjects from "../../Hooks/useProjects";

const ProjectDetails = () => {
  const { _id } = useParams();
  const [projects] = useProjects();
  console.log(projects);

  return <div>This is project details for {_id}</div>;
};

export default ProjectDetails;
