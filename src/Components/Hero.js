import React from "react";
import illustration from "../Images/illustration.svg";
import mastercard from "../Images/mastercard_logo.svg";
import paypal from "../Images/paypal.svg";
import linkedin from "../Images/linkedin_logo.svg";
import google from "../Images/google_logo.svg";
import visa from "../Images/visa.svg";

import "../Styles/hero.scss";

const Hero = () => {
  return (
    <>
      <section className="hero">
        <div className="hero_inner">
          <div className="hero_flex">
            <div className=" padding left_hero">
              <p className="top_header">
                A better <span className="colored">way </span> to
                <span className="dashed"> search</span>
                <span className="colored"> shop</span>
              </p>
              <p className="soon_text">coming soon</p>
              <p className="hero_small_text">
                We know what it means to get the best commodities online, and
                we've made the process very simple
              </p>
              <form>
                <input type="email" placeholder="email address" required />
                <button className="btn_submit bg" type="submit">
                  Tell me when it happens
                </button>
              </form>
            </div>

            <div className="right_hero">
              <img src={illustration} alt="illustration" />
            </div>
          </div>

          <div className="partners">
            <h4 className="padding">Trusted partners</h4>

            <ul>
              <li>
                <img src={mastercard} alt="mastercard" />
              </li>
              <li>
                <img src={paypal} alt="paypal" />
              </li>
              <li>
                <img src={linkedin} alt="linkedin" />
              </li>
              <li>
                <img src={google} alt="google" />
              </li>
              <li>
                <img src={visa} alt="visa" />
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
