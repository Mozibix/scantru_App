import React from "react";
import "../styles/navbar.scss";

export const NavBar = () => {
  return (
    <>
      <div className="navbar">
        <div className="navbar_inner">
          <div className="logo">
            <p>Iyanex</p>
          </div>
          <ul>
            <li>Home</li>
            <li>Blog</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
          <button>Sign Up</button>
        </div>
      </div>
    </>
  );
};
