import React from "react";
import Footer from "./Footer";
import Hero from "./Hero";
import Location from "./Location";
import Nav from "./Nav";
import NumberFlex from "./NumberFlex";
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

        <div className="number_flex">
          <NumberFlex />
        </div>

        <div className="location">
          <Location />
        </div>

        <div className="footer">
          <Footer />
        </div>
      </section>
    </>
  );
};

export default Home;
