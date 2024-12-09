import React from "react";
import { SelectButton } from "./ProjectButton";
import { WorkbenchScreen } from "./WorkbenchScreen";
import { ProjectIdAuto, SetNewProjectData } from "./LocalStorageManage";

// Page of New Project
export function NewProjectScreen({ onBack }) {
  // Define useState
  const [projectId] = React.useState(() => ProjectIdAuto());
  const [projectName, setProjectName] = React.useState("");
  const [showWorkbench, setMakeWorkbench] = React.useState(false);
  const [showNewProject, setNewProject] = React.useState(true);

  // Define handle function of input at project name
  const handleNewInputChange = (e) => {
    e.preventDefault();
    setProjectName(e.target.value);
    // console.log(event.target.value);
  };

  // Define handle function of MAKE button when click
  const handleButtonMakeClick = () => {
    SetNewProjectData(projectId, projectName);
    setMakeWorkbench(true);
    setNewProject(false);
  };

  return (
    <div>
      {!showWorkbench && showNewProject && (
        <div>
          <button onClick={onBack}>BACK</button>
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
          <SelectButton
            onClick={handleButtonMakeClick}
            buttonName={"MAKE NEW PROJECT"}
          />
        </div>
      )}
      {showWorkbench && <WorkbenchScreen />}
    </div>
  );
}
