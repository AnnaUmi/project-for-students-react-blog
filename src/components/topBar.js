import React from "react";
import { NavLink } from "react-router-dom";

const TopBar = () => {
  return (
    <nav className="navbar">
      <NavLink to="/"> Medium</NavLink>
      <ul>
        <li>
          <NavLink to="/" exact>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/login">Sing in</NavLink>
        </li>
        <li>
          <NavLink to="/register">Sign up</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default TopBar;
