import "./App.css";
import Sidebar from "./Components/Sidebar";
import Dashboard from "./Components/Dashboard";
import CreateStudent from "./Components/CreateStudent";
import EditStudent from "./Components/EditStudent";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

function App() {
  let data = {
    monthly: "Rs. 40,000",
    annual: "Rs. 4,80,000",
    task: 50,
    pending: 18,
  };
  let [students, setStudents] = useState([
    {
      name: "Raj",
      email: "raj@gmail.com",
      mobile: 9877346282,
      batch: "B32WE",
    },
    {
      name: "mohan",
      email: "mohan@gmail.com",
      mobile: 6832446282,
      batch: "B34WD",
    },
    {
      name: "siraj",
      email: "siraj@gmail.com",
      mobile: 9873200432,
      batch: "B29WD",
    },
    {
      name: "Gokul",
      email: "gokul@gmail.com",
      mobile: 6735246282,
      batch: "B37WE",
    },
  ]);
  return (
    <>
      <div className="main-wrapper">
        <BrowserRouter>
          <Sidebar />
          <Routes>
            <Route
              path="dashboard"
              element={<Dashboard data={{ data, students, setStudents }} />}
            />
            <Route
              path="create-student"
              element={<CreateStudent data={{ students, setStudents }} />}
            />
            <Route
              path="edit-student/:id"
              element={<EditStudent data={{ students, setStudents }} />}
            />
            <Route
              path="*"
              element={<Dashboard data={{ data, students, setStudents }} />}
            />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}
export default App;
