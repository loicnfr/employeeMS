import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SideBar from "./Pages/SideBar"; // Import your sidebar component
import Home from "./Pages/Home";
import ManageEmployee from "./Pages/managerUser.jsx";
import Login from "./Pages/Login.jsx";
import NavBar from "./Pages/NavBar.jsx";
import AttendanceSheet from "./Pages/AttendanceSheet.jsx";
import LeaveManagement from "./Pages/LeaveManagement.jsx";
import ProjectCards from "./Pages/ProjectCard.jsx";

function App() {
  return (
    <Router>
      <div className="container-fluid">
        <div className="row">
          <NavBar />
          <SideBar />

          <div className="col-md-9 col-lg-10 ms-sm-auto px-md-4">
            <Routes>
              <Route path="/home" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/manage" element={<ManageEmployee />} />
              <Route path="/attendance" element={<AttendanceSheet />} />
              <Route path="/leave" element={<LeaveManagement />} />
              <Route path="/project" element={<ProjectCards/>}/>
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
