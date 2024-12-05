// import React from "react";

function isString(value) {
  return typeof value === "string";
}

export function ProjectIdAuto() {
  const projectId = localStorage.getItem("project_id");
  if (!projectId) {
    return 0;
  } else {
    const array_id = JSON.parse(localStorage.getItem("project_id"));
    const new_id = array_id[array_id.length - 1] + 1;
    return new_id;
  }
}

export function SetNewProjectData(project_id, project_name) {
  // Import project id and project name from localStorage
  let array_id = JSON.parse(localStorage.getItem("project_id"));
  let array_project_name = localStorage.getItem("project_name");

  console.log(array_id);
  console.log(typeof array_id);
  console.log(array_project_name);
  console.log(typeof array_project_name);

  if (!Array.isArray(array_id) && Number.isFinite(array_id)) {
    array_id = [array_id];
  } else {
    array_id = [];
  }
  if (!Array.isArray(array_project_name) && isString(array_project_name)) {
    array_project_name = [array_project_name];
  } else {
    array_project_name = [];
  }

  //   console.log(array_id);
  //   console.log(typeof array_id);
  //   console.log(array_project_name);
  //   console.log(typeof array_project_name);

  // 배열에 새 데이터 추가
  array_id.push(project_id);
  array_project_name.push(project_name);

  console.log(array_id);
  console.log(typeof array_id);
  console.log(array_project_name);
  console.log(typeof array_project_name);

  // Save localStorage
  localStorage.setItem("project_id", JSON.stringify(array_id));
  localStorage.setItem("project_name", JSON.stringify(array_project_name));
}
