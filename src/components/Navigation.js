import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="main-nav">
      <ul>
        <li>
          <NavLink to="/mountain">food based on mood!</NavLink>
        </li>
        <li>
          <NavLink to="/beach">food based on mood!</NavLink>
        </li>
        <li>
          <NavLink to="/bird">food based on mood!</NavLink>
        </li>
        <li>
          <NavLink to="/food">food based on mood!</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
