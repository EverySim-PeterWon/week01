import React from "react";

export function VertexInput({ onAddvertex }) {
  const [vertex, setVertex] = React.useState({ x: 0, y: 0, z: 0 });

  const handleChange = (e) => {
    setVertex({ ...vertex, [e.target.name]: parseFloat(e.target.value) });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddVertex(vertex);
    setVertex({ x: 0, y: 0, z: 0 }); // 폼 초기화
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="number"
        name="x"
        value={vertex.x}
        onChange={handleChange}
        placeholder="X-coordinate"
      />
      <input
        type="number"
        name="y"
        value={vertex.y}
        onChange={handleChange}
        placeholder="Y-coordinate"
      />
      <input
        type="number"
        name="z"
        value={vertex.z}
        onChange={handleChange}
        placeholder="Z-coordinate"
      />
      <button type="submit">Add Vertex</button>
    </form>
  );
}
