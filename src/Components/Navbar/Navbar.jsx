import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-md navbar-light">
        <div className="container-fluid">

          <Link className="navbar-brand text-white" to="/" >
            <h1 className="mt-2">Abdul Moid</h1>
          </Link>

          <button
            className="navbar-toggler "
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" style={{ color: "white" }}></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link me-5 mt-md-1 active text-white" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link me-5 mt-md-1 active text-white" to="/projects">
                  Projects
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link me-5 mt-md-1 active text-white" to="/skills">
                  Skills
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
