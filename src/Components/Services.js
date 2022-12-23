import React from "react";
import { servicesData } from "../userdata";
import "../Styles/services.scss";

const Services = () => {
  const serviceInfo = servicesData.map((service) => {
    return <ServiceGrid {...service} />;
  });
  return (
    <>
      <section className="service">{serviceInfo}</section>
    </>
  );
};

const ServiceGrid = (props) => {
  return (
    <>
      <div className="service_box">
        <div className="icons">
          <img src={props.icon} alt="icons" />
        </div>
        <div className="service_details">
          <p className="service_head">{props.header}</p>
          <p className="service_quote">{props.quote}</p>
        </div>
      </div>
    </>
  );
};

export default Services;
