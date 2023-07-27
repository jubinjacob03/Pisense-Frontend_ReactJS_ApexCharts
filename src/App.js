import "./App.css";
import MainDash from "./components/MainDash/MainDash";
import RSidebar from "./components/RSidebar/RSidebar";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  return (
    <div className="App">
      <div className="AppGlass">
        <Sidebar />
        <MainDash />
        <RSidebar />
      </div>
    </div>
  );
}

export default App;
