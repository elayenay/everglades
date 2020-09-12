import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="main-nav">
      <ul>
        <li>
          <NavLink to="/sweet">Sweet</NavLink>
        </li>
        <li>
          <NavLink to="/salty">Salty</NavLink>
        </li>
        <li>
          <NavLink to="/savory">Savory</NavLink>
        </li>
        <li>
          <NavLink to="/sour">sour</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
