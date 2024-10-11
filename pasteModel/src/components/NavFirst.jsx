

import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap/dist/css/bootstrap.min.css";

const NavFirst = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        {/* Left part: 70% width */}
        <div className="navbar-left" style={{ width: "70%" }}>
          <h1 className="navbar-brand font-bold font-serif text-4xl">Doc.Saver</h1>
          <button
            className="navbar-toggler"
            type="button"
            onClick={toggleMenu}
            aria-controls="navbarNav"
            aria-expanded={isOpen}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}>
           
          </div>
        </div>

        {/* Right part: 30% width */}
        <div className="navbar-right d-flex justify-content-end" style={{ width: "30%" }}>
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink
                className="nav-link btn btn-light font-extrabold text-blue-200 h-12 rounded w-28 border border-light"
                activeClassName="active"
                to="/register"
                style={{ marginLeft: "30px", backgroundColor: "blue" }} // Light blue background
              >
                Register
              </NavLink>
            </li>
            <li className="nav-item font-serif font-extrabold">
              <NavLink
                className="nav-link btn btn-light h-12 text-blue-200 rounded border border-light w-28"
                activeClassName="active"
                to="/login"
                style={{ marginLeft: "60px", backgroundColor: "blue", }} // Light blue background
              >
                Login
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavFirst;
