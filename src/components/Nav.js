import React from "react";

function Nav(props) {
  return (
    <ul>
      <li>
        <a
          href="#Home"
          onClick={() => props.handlePageChange("Home")}
          className={
            props.currentPage === "Home" ? "nav-link active" : "nav-link"
          }
        >
          Home
        </a>
      </li>

      <li>
        <a
          href="#Explore"
          onClick={() => props.handlePageChange("Explore")}
          className={
            props.currentPage === "Explore" ? "nav-link active" : "nav-link"
          }
        >
          Explore
        </a>
      </li>

      <li>
        <a
          href="#Profile"
          onClick={() => props.handlePageChange("Profile")}
          className={
            props.currentPage === "Profile" ? "nav-link active" : "nav-link"
          }
        >
          Profile
        </a>
      </li>
    </ul>
  );
}

export default Nav;
