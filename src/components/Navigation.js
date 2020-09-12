import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="main-nav">
      <ul>
        <li>
          <NavLink to="/mountain">foods based on mood</NavLink>
        </li>
        <li>
          <NavLink to="/beach">foods based on mood</NavLink>
        </li>
        <li>
          <NavLink to="/bird">foods based on mood</NavLink>
        </li>
        <li>
          <NavLink to="/food">foods based on mood</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
