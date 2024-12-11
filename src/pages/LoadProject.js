import React from "react";
import { useNavigate } from "react-router-dom";

function DynamicButtons() {
  const [buttons, setButtons] = React.useState([]);

  React.useEffect(() => {
    const projectObj = localStorage.getItem("project");

    if (projectObj) {
      const projNameArray = Object.values(JSON.parse(projectObj)).map(
        (item) => item[0]
      );
      setButtons(projNameArray);
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
            <button key={index} onClick={() => handleButtonClick(buttonLabel)}>
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

const LoadProject = () => {
  const navigate = useNavigate();

  const [disableButton, setDisableButton] = React.useState(false);

  const handleBackClick = () => {
    navigate("/home");
  };

  const handleMakeClick = () => {
    navigate("/workbench");
  };

  const handleProjButtonClick = () => {
    setDisableButton(true);
  };

  const handleElseProjButtonClick = () => {
    setDisableButton(false);
  };

  return (
    <div>
      <button onClick={handleBackClick}>BACK</button>
      <h1>LOAD PROJECT</h1>
      <DynamicButtons />
      <button onClick={handleMakeClick}>MAKE PROJECT</button>
    </div>
  );
};

export default LoadProject;
