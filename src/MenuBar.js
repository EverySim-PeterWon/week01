import { useNavigate } from "react-router-dom";

export function MenuBarMain() {
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate("/home");
  };

  const handleNewClick = () => {
    navigate("/new_project");
  };

  const handleLoadClick = () => {
    navigate("/load_project");
  };

  const handleProjectClick = () => {
    navigate("/workbench");
  };

  const handleResultClick = () => {
    navigate("/simulation_result");
  };

  const projectObj = localStorage.getItem("project");
  let project_count = 0;
  let time_recent = "NONE";
  if (projectObj) {
    const projNameArray = Object.values(JSON.parse(projectObj)).map(
      (item) => item[0]
    );
    const projTimeArray = Object.values(JSON.parse(projectObj)).map(
      (item) => item[1]
    );
    project_count = projNameArray.length;
    time_recent = new Date(Math.max(...projTimeArray)).toDateString();
  }

  return (
    <header>
      <ul id="menu-bar" style={{ display: "flex", alignItems: "center" }}>
        <button onClick={handleHomeClick}>HOME</button>
        <button onClick={handleNewClick}>NEW</button>
        <button onClick={handleLoadClick}>LOAD</button>
        <button onClick={handleProjectClick}>PROJECT</button>
        <button onClick={handleResultClick}>RESULT</button>
        <div>
          <p> Number of Project: {project_count}</p>
          <p> Recent work time: {time_recent}</p>
        </div>
      </ul>
    </header>
  );
}
