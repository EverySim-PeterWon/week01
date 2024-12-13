import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ProjectIdAuto,
  SetNewProjectData,
  CurrentProjectUpdate,
} from "../LocalStorageManage";

const NewProject = () => {
  const navigate = useNavigate();

  const [projectId] = useState(() => ProjectIdAuto());
  const [projectName, setProjectName] = useState("");

  const [key, setKey] = useState("");
  const [value, setValue] = useState("");

  // Checking the Duplicate
  const [isDuplicate, setIsDuplicate] = useState(false);

  // Define action when click "BACK" button
  const handleBackClick = () => {
    navigate("/home");
  };

  // Define action when click "MAKE" button
  const handleMakeClick = () => {
    SetNewProjectData(projectId, projectName);
    CurrentProjectUpdate(projectId);
    navigate("/workbench");
    if (key && value) {
      localStorage.getItem(key, value);
    }
  };

  //
  const getStoredKeys = () => {
    const stored = JSON.parse(localStorage.getItem("project"));
    return stored ? stored : [];
  };

  // Define handle function of input at project name
  const handleNewInputChange = (e) => {
    e.preventDefault();
    setProjectName(e.target.value);
  };

  return (
    <div>
      <button onClick={handleBackClick}>BACK</button>
      <h1>NEW PROJECT</h1>
      {isDuplicate && <p style={{ color: "red" }}>This name alreay EXISTS</p>}
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
