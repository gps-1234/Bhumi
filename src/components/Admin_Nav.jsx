import React, { useImperativeHandle } from "react";
import {
  Link,
  BrowserRouter,
  useMatch,
  useResolvedPath,
} from "react-router-dom";
function Admin_Nav() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" to="#">
          <img
            src="https://bhumi.ngo/wp-content/uploads/2020/12/Bhumi-Torchbearer-Logo-White-1500-PNG.png"
            className="image"
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                className="nav-link active"
                aria-current="page"
                to="/Admin_Portal"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/User_Age">
                User Age Group Analysis
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/User_Region">
                User Region Analysis
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/Market_Reach">
                Page Market Reach Analysis
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                aria-current="page"
                to="https://clarity.microsoft.com/projects/view/hzvfdwiq97/dashboard?date=Last%203%20days"
                target="_blank"
              >
                Detailed Analysis
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Admin_Nav;
