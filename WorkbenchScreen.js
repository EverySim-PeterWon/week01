import React, { useState } from "react";
import ReactDOM from "react-dom/client";
// import * as THREE from "three";
import ThreeDCanvas from "./ThreeDCanvas";
import { VertexInput } from "./VertexWindow";

export function WorkbenchScreen() {
  const [isOpen, setIsOpen] = useState(false);

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
}

// function animate() {
//   requestAnimationFrame(animate);
//   renderer.render(scene, camera);
// }

const canvas = ReactDOM.createRoot(document.getElementById("root"));
canvas.render(<ThreeDCanvas />);
