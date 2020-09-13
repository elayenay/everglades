import React from "react";
import Form from "./Form";
import Navigation from "./Navigation";
import Logo from "../assets/sizzle.jpg";

const styles = {
  logo: {
    width: "15rem",
    margin: "3rem",
  },
};

const Header = ({ history, handleSubmit }) => {
  return (
    <div>
      <div>
        <img
          src={Logo}
          alt="sizzle logo"
          className="logo"
          style={styles.logo}
        />
      </div>
      <Form history={history} handleSubmit={handleSubmit} />
      <Navigation />
    </div>
  );
};

export default Header;
