import React from "react";
// import { useNavigate } from "react-router-dom";
import ThreeDCanvas from "../ThreeDCanvas";
import { VertexInput } from "../VertexWindow";

const WorkBench = () => {
  //   const navigate = useNavigate();

  const [isOpen, setIsOpen] = React.useState(false);

  const openVerticesModal = () => {
    setIsOpen(true);
  };

  const closeVerticesModal = () => {
    setIsOpen(false);
  };

  return (
    <div>
      {!isOpen && (
        <div>
          <button onClick={openVerticesModal}>NEW Vertices</button>
        </div>
      )}

      {isOpen && (
        <div className="modal">
          <VertexInput />
          <button onClick={closeVerticesModal}>CLOSE Vertices</button>
        </div>
      )}
      <ThreeDCanvas />
    </div>
  );
};

export default WorkBench;
