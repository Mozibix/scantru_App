import React from "react";
import scantru from "../Images/scantrupic.png";
import "../Styles/scantru.scss";

const Scantru = () => {
  return (
    <>
      <section className="scantru">
        <div className="scantru_flex">
          <div className="left_scantru">
            <div className="left_scantru_inner">
              <div className="details">
                <div className="scantru_header">
                  <h3>What is scantru?</h3>
                </div>
                <div className="explaination">
                  <p>
                    Scantru is an advanced AI reverse image search engine which
                    searches millions of products from trusted vendors. We make
                    comparisons based on customer ratings and price to give you
                    the absolute best products. It's shopping unlike you've
                    known before
                  </p>
                </div>

                <button className="learn_more">Learn more</button>
              </div>
            </div>
          </div>

          <div className="right_scantru">
            <img src={scantru} alt="scantru" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Scantru;
