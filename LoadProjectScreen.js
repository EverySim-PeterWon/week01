import React from "react";
import { SelectLoadProjButton, SelectButton } from "./ProjectButton";
import { WorkbenchScreen } from "./WorkbenchScreen";

export function LoadProjectScreen({ onBack }) {
  const [showWorkbench, setMakeWorkbench] = React.useState(false);
  const [showLoadProject, setLoadProject] = React.useState(true);
  const [disableButton, setDisableButton] = React.useState(false);

  const handleButtonMakeClick = () => {
    setMakeWorkbench(true);
    setLoadProject(false);
  };

  const handleProjButtonClick = () => {
    setDisableButton(true);
  };

  const handleElseProjButtonClick = () => {
    setDisableButton(false);
  };

  function LoadProjectComponents({ onBack }) {
    return (
      <div>
        <button onClick={onBack}>BACK</button>
        <h1>LOAD PROJECT</h1>
        <form>Select project</form>
        <div style={{ display: "flex", alignItems: "center" }}>
          <SelectLoadProjButton projName="Test01" />
          <SelectLoadProjButton projName="Test02" />
          <SelectLoadProjButton projName="Test03" />
        </div>
      </div>
    );
  }

  return (
    <div>
      {!showWorkbench && showLoadProject && LoadProjectComponents({ onBack })}
      {!showWorkbench && showLoadProject && (
        <SelectButton
          onClick={handleButtonMakeClick}
          buttonName={"LOAD PROJECT"}
        />
      )}
      {showWorkbench && <WorkbenchScreen onClick={handleButtonMakeClick} />}
    </div>
  );
}
