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

  const project_data = localStorage.getItem("project");
  let project_count = 0;
  let time_recent = "NONE";
  if (project_data) {
    const project_array = JSON.parse(project_data);
    project_count = project_array["name"].length;
    const time_array = project_array["time"].map(Number);
    time_recent = new Date(Math.max(...time_array)).toDateString();
  }

  return (
    <header>
      <ul id="menu-bar" style={{ display: "flex", alignItems: "center" }}>
        <button onClick={handleHomeClick}>HOME</button>
        <button onClick={handleNewClick}>NEW</button>
        <button onClick={handleLoadClick}>LOAD</button>
        <button onClick={handleProjectClick}>PROJECT</button>
        <div>
          <p> Number of Project: {project_count}</p>
          <p> Recent work time: {time_recent}</p>
        </div>
      </ul>
    </header>
  );
}
