export function MenuBarMain() {
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
        <button>HOME</button>
        <button>NEW</button>
        <button>LOAD</button>
        <button>WORKSPACE</button>
        <div>
          <p> Number of Project: {project_count}</p>
          <p> Recent work time: {time_recent}</p>
        </div>
      </ul>
    </header>
  );
}
