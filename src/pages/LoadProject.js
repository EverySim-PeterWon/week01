import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CurrentProjectUpdate } from "../LocalStorageManage";

function DynamicButtons({ onButtonClick }) {
  const [buttons, setButtons] = useState([]);
  const [selectedButton, setselectedButton] = useState(null);

  // Import project name from localStorage and make dynamic button information
  useEffect(() => {
    const projectObj = JSON.parse(localStorage.getItem("project"));

    if (projectObj) {
      const projNameArray = Object.entries(projectObj).map(([key, value]) => ({
        id: key,
        name: value[0],
      }));
      setButtons(projNameArray);
    }
  }, []);

  const handleButtonClick = (buttonLabel) => {
    console.log(`Button clicked: ${buttonLabel}`);
    setselectedButton(buttonLabel);
    if (onButtonClick) {
      onButtonClick(buttonLabel);
    }
  };

  return (
    <div>
      <div>
        {buttons.length > 0 ? (
          buttons.map((buttonLabel, index) => (
            <button
              key={index}
              onClick={() => handleButtonClick(buttonLabel)}
              style={{
                // Yellow background when selected
                backgroundColor:
                  selectedButton === buttonLabel.name ? "yellow" : "",
                color: selectedButton === buttonLabel.name ? "black" : "",
                border:
                  selectedButton === buttonLabel.name ? "2px solid black" : "",
              }}
            >
              {buttonLabel.name}
            </button>
          ))
        ) : (
          <p>NO PROJECT</p>
        )}
      </div>
    </div>
  );
}

const LoadProject = () => {
  const navigate = useNavigate();
  const [disableButton, setDisableButton] = useState(true);
  const [selectedProject, setSelectedProject] = React.useState(null);

  const handleBackClick = () => {
    navigate("/home");
  };

  const handleMakeClick = () => {
    if (selectedProject) {
      CurrentProjectUpdate(selectedProject.id);
      navigate("/workbench");
    }
  };

  const handleDynamicButtonClick = (project) => {
    setDisableButton(false);
    setSelectedProject(project);
  };

  return (
    <div>
      <button onClick={handleBackClick}>BACK</button>
      <h1>LOAD PROJECT</h1>
      <DynamicButtons onButtonClick={handleDynamicButtonClick} />
      <button onClick={handleMakeClick} disabled={disableButton}>
        MAKE PROJECT
      </button>
    </div>
  );
};

export default LoadProject;
