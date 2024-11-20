import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const activeLink = "nav-link border border-primary-subtle bg-primary-subtle rounded-3 text-primary-emphasis";

  return (
    <div>
      <ul className="nav justify-content-center">
        <li className="nav-item">
          <NavLink
            to="/"
            className={({ isActive }) => 
              isActive ? activeLink : "nav-link"
            }
          >
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/forms"
            className={({ isActive }) => 
              isActive ? activeLink : "nav-link"
            }
          >
            Forms
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/grid"
            className={({ isActive }) => 
              isActive ? activeLink : "nav-link"
            }
          >
            Grid
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;