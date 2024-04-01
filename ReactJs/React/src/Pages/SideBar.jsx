import React from "react";
import { Link } from "react-router-dom";


const SideBar = () => {

  return (
    <>
      <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
        <div className="d-flex flex-column align-items-center align-items-center-sm-start px-3 pt-2 text-white min-vh-100">
          <Link
            to="/dashboard"
            className="d-flex align-items-center pb-3 mb-md-1 mt-md-3 me-md-auto text-white text-decoration-none"
          >
            <span className="fs-5 fw-bolder d-none d-sm-inline">
              Admin Dashboard
            </span>
          </Link>

          <ul
            className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start"
            id="menu"
          >
            <li className="nav-item">
              <Link to="/project" className="nav-link text-white">
                Project
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/manage"
                className="nav-link text-white"
                href="manage"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Manage Employee
              </Link>
            </li>
            <li className="nav-item mb-1 btn-toggle align-items-center rounded" data-bs-toggle="collapse" data-bs-target="#dashboard-collapse" aria-expanded="true">
              <Link to="/leave" className="nav-link text-white">
              Leave Management
              </Link>
            </li>

            



            {/* <li className="mb-1">
        <button className="btn btn-toggle align-items-center rounded" data-bs-toggle="collapse" data-bs-target="#dashboard-collapse" aria-expanded="true">
          Dashboard
        </button>
        <div className="collapse show" id="dashboard-collapse" style="">
          <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
            <li><Link to='' className="link-dark rounded">Overview</Link></li>
            <li><Link to='' className="link-dark rounded">Weekly</Link></li>
            <li><Link to='' className="link-dark rounded">Monthly</Link></li>
            <li><Link to='' className="link-dark rounded">Annually</Link></li>
          </ul>
        </div>
      </li> */}







            <li className="nav-item">
              <Link to="/attendance" className="nav-link text-white">
                Attendance
              </Link>
            </li>
          </ul>

          <button type="button" className="btn btn-success mt-aut mb-4">
            Sign Out
          </button>
        </div>
      </div>
    </>
  );
};

export default SideBar;
