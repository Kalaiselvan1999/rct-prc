import React from "react";
import "./navbar.css";
import { NavLink } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  const [isActive, setIsActive] = useState(false);
  console.log(isActive);

  return (
    <>
      <div className="container">
        <div className="navbar">Logo</div>
        <div className="menu-icon"
          onClick={(handleClick) => {
            setIsActive(!isActive && true);
          }}
        >
          Hamburger
        </div>
        <div className={`navbar-elements ${isActive && 'active'}`}>
          <nav>
            <ul>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/blogs">Blogs</NavLink>
              </li>
              <li>
                <NavLink to="/projects">Projects</NavLink>
              </li>
              <li>
                <NavLink to="/about">About</NavLink>
              </li>
              <li>
                <NavLink to="/contact">Contact</NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}

export default Navbar;
