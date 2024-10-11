// import { NavbarData } from "../data/Navbar";
// import { NavLink } from "react-router-dom";
// const Navbar = () => {
//   return (
//     <div className="w-full h-[45px] flex justify-center items-center p-4 bg-gray-800 gap-x-5">
//       {NavbarData.map((link, idx) => (
//         <NavLink
//           key={idx}
//           to={link.path}
//           className={({ isActive }) =>
//             isActive
//               ? "text-blue-500 font-semibold text-xl"
//               : "text-white font-medium text-xl"
//           }
//         >
//           {link.title}
//         </NavLink>
//       ))}
//     </div>
//   );
// };

// export default Navbar;

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
          <h1 className="navbar-brand font-bold font-serif text-4xl">
            Doc.Saver
          </h1>
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
          <div
            className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}
          ></div>
        </div>

        {/* Right part: 30% width */}
        <div
          className="navbar-right d-flex justify-content-end"
          style={{ width: "30%" }}
        >
          <ul className="navbar-nav">
            <li className="nav-item font-serif font-extrabold">
              <NavLink
                className="nav-link btn btn-light font-extrabold text-blue-200 h-12 rounded w-32 border border-light"
                activeClassName="active"
                to="/home"
                style={{ marginLeft: "30px", backgroundColor: "blue" }} // Light blue background
              >
                Make Notes
              </NavLink>
            </li>
            <li className="nav-item font-serif font-extrabold">
              <NavLink
                className="nav-link btn btn-light font-extrabold text-blue-200 h-12 rounded w-32 border border-light"
                activeClassName="active"
                to="/pastes"
                style={{ marginLeft: "60px", backgroundColor: "blue" }} // Light blue background
              >
                Saved Notes
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavFirst;
