import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  // Dummy notification count (you can replace this with actual notification data)
  const notificationCount = 3;

  return (
    <>
      <nav
        className="navbar navbar-expand-xl navbar-dark bg-dark"
        aria-label="Sixth navbar example"
      >
        <div className="container-fluid">
          {/* Navbar Toggler */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarsExample06"
            aria-controls="navbarsExample06"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarsExample06">
            <ul className="navbar-nav me-auto mb-2 mb-xl-0">
              <li className="nav-item">
                <Link
                  to="/home"
                  className="nav-link active"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
            </ul>

            {/* Notifications */}
            <div className="navbar-text me-3">
              <button
                className="btn btn-outline-light"
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#notificationsModal"
              >
                <i className="bi bi-bell"></i>
                {notificationCount > 0 && (
                  <span className="badge bg-danger ms-1">
                    {notificationCount}
                  </span>
                )}
              </button>
            </div>

            <form role="search" className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-primary" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>

      {/* Notifications Modal */}
      <div
        className="modal fade"
        id="notificationsModal"
        tabIndex="-1"
        aria-labelledby="notificationsModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="notificationsModalLabel">
                Notifications
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              {/* Notification content goes here */}
              {notificationCount > 0 ? (
                <p>You have {notificationCount} new notifications.</p>
              ) : (
                <p>No new notifications.</p>
              )}
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
