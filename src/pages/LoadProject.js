import React from "react";
import { useNavigate } from "react-router-dom";

function DynamicButtons({ onButtonClick }) {
  const [buttons, setButtons] = React.useState([]);
  const [selectedButton, setselectedButton] = React.useState(null);

  // Import project name from localStorage and make dynamic button information
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
    // console.log(`Button clicked: ${buttonLabel}`);
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
                backgroundColor: selectedButton === buttonLabel ? "yellow" : "",
                color: selectedButton === buttonLabel ? "black" : "",
                border: selectedButton === buttonLabel ? "2px solid black" : "",
              }}
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

const LoadProject = () => {
  const navigate = useNavigate();
  const [disableButton, setDisableButton] = React.useState(true);

  const handleBackClick = () => {
    navigate("/home");
  };

  const handleMakeClick = () => {
    navigate("/workbench");
  };

  const handleDynamicButtonClick = () => {
    setDisableButton(false);
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
