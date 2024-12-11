import React, { useState, useEffect } from "react";

export function VertexInput() {
  // The function
  function vertexValidCheck(vertex) {
    return (
      !vertex.x ||
      !vertex.y ||
      !vertex.z ||
      isNaN(Number(vertex.x)) ||
      isNaN(Number(vertex.y)) ||
      isNaN(Number(vertex.z)) ||
      vertex.x.length === 0 ||
      vertex.y.length === 0 ||
      vertex.z.length === 0
    );
  }

  const [vertex, setVertex] = useState({ x: [], y: [], z: [] });
  const [vertices, setVertices] = useState([]);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (!value.trim() || isNaN(Number(value))) {
      setError(`Error: ${name} must be a number`);
      setVertex({ ...vertex, [name]: value });
    } else {
      setError("");
      setVertex({ ...vertex, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (error) {
      setError("Fill the number.");
      return;
    }
    if (vertexValidCheck(vertex)) {
      setError("All value MUST BE Fill with the number.");
      return;
    }

    // Add pid to vertex information and update to localStorage
    const newVertex = { ...vertex, pid: vertices.length };
    const updatedVertices = [...vertices, newVertex];
    setVertices(updatedVertices);
    localStorage.setItem("vertices", JSON.stringify(updatedVertices));
    setVertex({ x: [], y: [], z: [] });
  };

  useEffect(() => {
    const loadedVertices = JSON.parse(localStorage.getItem("vertices"));
    if (loadedVertices) {
      setVertices(loadedVertices);
    }
  }, []);

  return (
    <div>
      <h3>Vertices</h3>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="x"
          value={vertex.x}
          onChange={handleChange}
          placeholder="X-coordinate"
        />
        <input
          type="text"
          name="y"
          value={vertex.y}
          onChange={handleChange}
          placeholder="Y-coordinate"
        />
        <input
          type="text"
          name="z"
          value={vertex.z}
          onChange={handleChange}
          placeholder="Z-coordinate"
        />
        <button type="submit">Add Vertex</button>
      </form>
      <div>
        <ul>
          {vertices.map((v, index) => (
            <li key={index}>
              {`Vertex ${index} - pid: ${v.pid}, <${v.x}, ${v.y}, ${v.z}>`}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
