import React, { useEffect } from "react";
import { SelectLoadProjButton, SelectButton } from "./ProjectButton";
import { WorkbenchScreen } from "./WorkbenchScreen";

export function LoadProjectScreen({ onBack }) {
  const [showWorkbench, setMakeWorkbench] = React.useState(false);
  const [showLoadProject, setLoadProject] = React.useState(true);
  const [disableButton, setDisableButton] = React.useState(false);

  function DynamicButtons() {
    const [buttons, setButtons] = React.useState([]);

    useEffect(() => {
      const storedData = localStorage.getItem("project");

      if (storedData) {
        const parsedData = JSON.parse(storedData);
        setButtons(parsedData["name"]);
      }
    }, []);

    const handleButtonClick = (buttonLabel) => {
      console.log(`Button clicked: ${buttonLabel}`);
    };

    return (
      <div>
        <div>
          {buttons.length > 0 ? (
            buttons.map((buttonLabel, index) => (
              <button
                key={index}
                onClick={() => handleButtonClick(buttonLabel)}
              >
                {buttonLabel}
              </button>
            ))
          ) : (
            <p>NO PROJECT</p>
          )}
        </div>
      </div>
    );
  }

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
        <DynamicButtons />
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
