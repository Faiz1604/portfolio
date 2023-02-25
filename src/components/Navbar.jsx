import React from "react";
import "./style/Navbar.css"
function Navbar() {
  return (
    <>
      <div>
        <nav className="navbar navbar-expand-lg fixed">
          <div className="container-fluid">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="btn nav-link" aria-current="page" href="/">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="btn nav-link" href="#about">
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a className=" btn nav-link" href="#contact">
                    Contact
                  </a>
                </li>
                <li className="nav-item">
                  <a className=" btn nav-link" href="#skills">Skills</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
