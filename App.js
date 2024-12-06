import React from "react";
import { NewProjectScreen } from "./NewProjectScreen";
import { LoadProjectScreen } from "./LoadProjectScreen";
import { SelectNewButton, SelectLoadButton } from "./ProjectButton";

function App() {
  // New project
  const [showProjectNew, setShowProjectNew] = React.useState(false);
  // Load project
  const [showProjectLoad, setShowProjectLoad] = React.useState(false);

  const handleButtonNewClick = () => {
    setShowProjectNew(true);
    setShowProjectLoad(false);
  };

  const handleButtonLoadClick = () => {
    setShowProjectNew(false);
    setShowProjectLoad(true);
  };

  const handleButtonBackClick = () => {
    setShowProjectNew(false);
    setShowProjectLoad(false);
  };

  return (
    <div>
      {!showProjectNew && !showProjectLoad && (
        <>
          <SelectNewButton onClick={handleButtonNewClick} />
          <SelectLoadButton onClick={handleButtonLoadClick} />
        </>
      )}
      {showProjectNew && <NewProjectScreen onBack={handleButtonBackClick} />}
      {showProjectLoad && <LoadProjectScreen onBack={handleButtonBackClick} />}
    </div>
  );
}

export default App;
