import React from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Home from "./pages/Home";
import NewProject from "./pages/NewProject";
import LoadProject from "./pages/LoadProject";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/new_project" element={<NewProject />} />
          <Route path="/load_project" element={<LoadProject />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
