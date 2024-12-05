import React from "react";
import ReactDOM from "react-dom/client";
import ThreeDCanvas from "./ThreeDCanvas";
import * as THREE from "three";

function CanvasComponent() {
  // 씬, 카메라, 렌더러 설정
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );
  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);
}

export function WorkbenchScreen() {
  return (
    <div>
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
