import React from "react";
import { useNavigate } from "react-router-dom";

function DynamicButtons() {
  const [buttons, setButtons] = React.useState([]);

  React.useEffect(() => {
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
