import "./App.css";
import { Sidebar } from "./assets/components/sidebar";
import { Navbar } from "./assets/components/Navbar";
import { Dashboard } from "./assets/components/Dashboard";

function App() {
  return (
    <div className="appLayout">
      <Sidebar />

      <div className="mainContent">
        <Navbar />
        <Dashboard />
        <div>
          <h1>Task Flow</h1>
          <p>Welcome to Task Flow</p>
        </div>
      </div>
    </div>
  );
}

export default App;