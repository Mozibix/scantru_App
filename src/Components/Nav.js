import React from "react";
import logo from "../Images/logo.svg";
import "../Styles/nav.scss";

const Nav = () => {
  return (
    <>
      <nav>
        <div className="logo">
          <img src={logo} alt="logo" />
          <p>Scantru</p>
        </div>

        <ul>
          <li>products</li>
          <li>For developers</li>
          <li>About us</li>
          <li>partners</li>
        </ul>
      </nav>
    </>
  );
};

export default Nav;
