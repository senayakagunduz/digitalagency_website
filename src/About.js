import React from "react";
import network from "./image/network.png";

const About = () => {
  return (
    <>
      <section className="about-us">
        <div className="container">
          <h1 className="title text-center">WHY CHOOSE US ? </h1>
          <div className="row">
            <div className="col-md-6 about-us">
              <p className="about-title">Why we are different</p>
              <ul>
                <li>Being in doing business with honesty</li>
                <li>Being in doing business with honesty</li>
                <li>Being in doing business with honesty</li>
                <li>Being in doing business with honesty</li>
                <li>Being in doing business with honesty</li>
                <li>Being in doing business with honesty</li>
              </ul>
            </div>
            <div className="col-md-6">
              <img src={network} className="img-fluid"></img>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
