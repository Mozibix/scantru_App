import React from "react";
import { numberFlex } from "../userdata";
import "../Styles/numberflex.scss";

const NumberFlex = () => {
  const flexInfo = numberFlex.map((flexData) => {
    return <NumberDetails {...flexData} />;
  });
  return (
    <>
      <section className="number_flex">{flexInfo}</section>
    </>
  );
};

const NumberDetails = (props) => {
  return (
    <>
      <div className="number_box">
        <div className="number_icon">
          <img src={props.number} alt="number icon" />
        </div>
        <div className="large_text">
          <p>{props.large_text}</p>
        </div>
        <div className="small_text">
          <p>{props.small_text}</p>
        </div>
        <div className="learn_more">
          <p>{props.learn_more}</p>
        </div>
      </div>
    </>
  );
};

export default NumberFlex;
