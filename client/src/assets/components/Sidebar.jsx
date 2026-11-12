import "./Sidebar.css"

export function Sidebar() {
  return (
    <>
      <div className="sideBarBox">
        <h1>Task Flow</h1>
        <ul>
          <li className="sideBarTab">Dashboard</li>
          <li className="sideBarTab">My Tasks</li>
          <li className="sideBarTab">Projects</li>
          <li className="sideBarTab">Completed</li>
          <li className="sideBarTab">Settings</li>
          <li className="sideBarTab">User Profile</li>
        </ul>
      </div>
    </>
  );
}
