import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
import AppCanvas from "../ThreeDCanvas";
import { VertexInput } from "../VertexWindow";
import { ElementsInput } from "../ElementsWindow";

const WorkBench = () => {
  //   const navigate = useNavigate();

  const [isVertexOpen, setIsVertexOpen] = useState(false);
  const [isElementOpen, setIsElementOpen] = useState(false);
  const [execute, setExecute] = useState(false);

  const openVerticesModal = () => {
    setIsVertexOpen(true);
    setIsElementOpen(false);
  };

  const closeVerticesModal = () => {
    setIsVertexOpen(false);
    setIsElementOpen(false);
  };

  const openElementsModal = () => {
    setIsVertexOpen(false);
    setIsElementOpen(true);
  };

  const closeElementsModal = () => {
    setIsVertexOpen(false);
    setIsElementOpen(false);
  };

  const executeButton = () => {
    setIsVertexOpen(false);
    setIsElementOpen(false);
    setExecute(true);
    alert("Execute analysis");
  };

  return (
    <div>
      {!isVertexOpen && (
        <div>
          <button onClick={openVerticesModal}>NEW Vertices</button>
        </div>
      )}

      {isVertexOpen && (
        <div className="modal">
          <VertexInput />
          <button onClick={closeVerticesModal}>CLOSE Vertices</button>
        </div>
      )}
      {!isElementOpen && (
        <div>
          <button onClick={openElementsModal}>NEW Elements</button>
        </div>
      )}
      {isElementOpen && (
        <div className="modal">
          <ElementsInput />
          <button onClick={closeElementsModal}>CLOSE Elements</button>
        </div>
      )}
      <button onClick={executeButton} disabled={execute}>
        EXECUTE
      </button>
      <AppCanvas />
    </div>
  );
};

export default WorkBench;
