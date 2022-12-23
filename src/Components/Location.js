import React from "react";
import map from "../Images/map.png";
import "../Styles/location.scss";

const Location = () => {
  return (
    <>
      <section className="location">
        <div className="top_text">
          <p>Trusted vendors all over the globe</p>
        </div>

        <div className="image">
          <img src={map} alt="map" />
        </div>

        <div className="input_sec">
          <div className="input_sec_inner">
            <h4>Be the first to know when we're live</h4>
            <div className="input">
              <form>
                <input
                  className="bg_white borders"
                  type="email"
                  placeholder="email address"
                />
                <button className="btn_submit bg " type="submit">
                  Tell me when it happens
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Location;
