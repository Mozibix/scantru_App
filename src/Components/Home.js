import React from "react";
import Hero from "./Hero";
import Nav from "./Nav";
import Scantru from "./Scantru";
import Services from "./Services";

const Home = () => {
  return (
    <>
      <section className="home">
        <div className="nav">
          <Nav />
        </div>

        <div className="hero">
          <Hero />
        </div>

        <div className="services_sec">
          <Services />
        </div>

        <div className="scantru_Sec">
          <Scantru />
        </div>
      </section>
    </>
  );
};

export default Home;
