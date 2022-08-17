import React from "react";
import { NavBar } from "../NavBar";
import ErrorPage from "./ErrorPage";
import "../../styles/home.scss";

export const Home = () => {
  return (
    <>
      <div className="home">
        <div className="home_inner">
          <div className="navbar_main">
            <NavBar />
          </div>
          <div className="errorpage">
            <ErrorPage />
          </div>
        </div>
      </div>
    </>
  );
};
