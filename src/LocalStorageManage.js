// import React from "react";

function isString(value) {
  return typeof value === "string";
}

export function ProjectIdAuto() {
  const projectId = JSON.parse(localStorage.getItem("project"));
  if (!projectId || projectId === null) {
    return 0;
  } else {
    const new_id = projectId["id"][projectId["id"].length - 1] + 1;
    return new_id;
  }
}

export function SetNewProjectData(project_id, project_name) {
  // Import project id and project name from localStorage
  let project_data = JSON.parse(localStorage.getItem("project"));
  if (
    project_data === null ||
    (typeof project_data === "object" && project_data[0])
  ) {
    project_data = {
      id: [project_id],
      name: [project_name],
    };
  } else {
    project_data["id"].push(project_id);
    project_data["name"].push(project_name);
  }

  console.log(project_data["id"]);
  console.log(project_data["name"]);

  // Save localStorage
  localStorage.setItem(
    "project",
    JSON.stringify({ id: project_data["id"], name: project_data["name"] })
  );
}
