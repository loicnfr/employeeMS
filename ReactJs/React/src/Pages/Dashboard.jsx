import React from "react";
import ManageEmployee from "./managerUser";
import SideBar from "./SideBar";
import NavBar from "./NavBar";

const Dashboard = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row flex-nowrap">
          <SideBar />
          <div className="col p-0 m-0">
            <NavBar />
            <ManageEmployee />
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
