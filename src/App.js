import "./App.css";
import Sidebar from "./Components/Sidebar";
import Dashboard from "./Components/Dashboard";

function App() {
  let data = {
    monthly: "Rs. 40,000",
    annual: "Rs. 4,80,000",
    task: 50,
    pending: 18,
  };
  return (
    <>
      <div className="main-wrapper">
        <Sidebar />
        <Dashboard data={data} />
      </div>
    </>
  );
}
export default App;
