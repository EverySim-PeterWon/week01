import React from "react";
import { useNavigate } from "react-router-dom";
import { ProjectIdAuto, SetNewProjectData } from "../LocalStorageManage";

const NewProject = () => {
  const navigate = useNavigate();

  const [projectId] = React.useState(() => ProjectIdAuto());
  const [projectName, setProjectName] = React.useState("");

  const handleBackClick = () => {
    navigate("/home");
  };

  const handleMakeClick = () => {
    SetNewProjectData(projectId, projectName);
    navigate("/workbench");
  };

  // Define handle function of input at project name
  const handleNewInputChange = (e) => {
    e.preventDefault();
    setProjectName(e.target.value);
  };

  // Define handle function of MAKE button when click
  return (
    <div>
      <button onClick={handleBackClick}>BACK</button>
      <h1>NEW PROJECT</h1>
      <div style={{ display: "flex", alignItems: "center" }}>
        <label htmlFor="inputid">PROJECT ID</label>
        <input id="inputid" type="number" value={projectId} disabled />
      </div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <label htmlFor="inputProjName">PROJECT NAME</label>
        <input
          id="inputProjName"
          placeholder="Input project name"
          type="text"
          value={projectName}
          onChange={handleNewInputChange}
        />
      </div>
      <button onClick={handleMakeClick}>MAKE PROJECT</button>
    </div>
  );
};

export default NewProject;
