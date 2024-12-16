import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NewProject from "./pages/NewProject";
import LoadProject from "./pages/LoadProject";
import WorkBench from "./pages/WorkBench";
import Result from "./pages/SimResult";
import { MenuBarMain } from "./MenuBar";

function App() {
  return (
    <BrowserRouter>
      <MenuBarMain />
      <div>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/new_project" element={<NewProject />} />
          <Route path="/load_project" element={<LoadProject />} />
          <Route path="/workbench" element={<WorkBench />} />
          <Route path="/simulation_result" element={<Result />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
