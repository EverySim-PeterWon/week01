// import React from "react";

export function ProjectIdAuto() {
  const projectObj = JSON.parse(localStorage.getItem("project"));
  if (!projectObj || projectObj === null) {
    return 0;
  } else {
    const keysObj = Object.keys(projectObj);
    const IntKeys = keysObj.map((key) => parseInt(key, 10));
    return Math.max(...IntKeys) + 1;
  }
}

export function SetNewProjectData(project_id, project_name) {
  // Import project id and project name from localStorage
  let storedData = JSON.parse(localStorage.getItem("project"));
  const array_new = [project_name, Date.now()];

  function valid_project_data(storedData) {
    return (
      storedData === null ||
      (typeof storedData === "object" &&
        storedData[Object.keys(storedData)[0]].length === 1)
    );
  }

  if (valid_project_data(storedData)) {
    // const objData = {${project_id}: [${project_name}, ${Date.now()}]};
    // storedData = localStorage.setItem(JSON.stringify(objData));
    // storedData[Object.keys(storedData)[0]] = array_new;
    const objData = {};
    const key_new = [project_id];
    objData[key_new] = array_new;
    localStorage.setItem("project", JSON.stringify(objData));
  } else {
    storedData[project_id] = array_new;
    localStorage.setItem("project", JSON.stringify(storedData));
  }
}
