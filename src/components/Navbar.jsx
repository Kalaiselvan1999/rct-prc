import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const activeLink =
    "nav-link border border-primary-subtle bg-primary-subtle rounded-3 text-primary-emphasis";

  return (
    <div className="d-flex justify-content-start flex-column">
      <div className=" nav nav-item">
        <NavLink to="/" className={({ isActive }) => (isActive ? activeLink : "nav-link")}>
          Home
        </NavLink>
      </div>
      <div className=" nav nav-item">
        <NavLink to="/forms" className={({ isActive }) => (isActive ? activeLink : "nav-link")}>
          Forms
        </NavLink>
      </div>
      <div className="nav nav-item">
        <NavLink to="/grid" className={({ isActive }) => (isActive ? activeLink : "nav-link")}>
          Grid
        </NavLink>
      </div>
    </div>
  );
}

export default Navbar;
