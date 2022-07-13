import React from "react";
import service1 from "./image/service1.png";
import service2 from "./image/service2.png";
import service3 from "./image/service3.png";

const Services = () => {
  return (
    <section id="services">
      <div className="container text-center">
        <h1 className="title">WHAT WE DO ?</h1>
        <div className="row text-center">
          <div className="col-md-4 services">
            <img src={service1} alt="service1<"></img>
            <h4>Growth Marketing</h4>
            <p>
              Subscribe to watch more videos on Website development,Digital
              marketing,Worldpress and graphic designing.
            </p>
          </div>
          <div className="col-md-4 services">
            <img src={service2} alt="service2"></img>
            <h4>Online Branding</h4>
            <p>
              Subscribe to watch more videos on Website development,Digital
              marketing,Worldpress and graphic designing.
            </p>
          </div>
          <div className="col-md-4 services">
            <img src={service3} alt="service3"></img>
            <h4>Animated ads</h4>
            <p>
              Subscribe to watch more videos on Website development,Digital
              marketing,Worldpress and graphic designing.
            </p>
          </div>
        </div>
        <button type="button" className="btn btn-primary">
          All Services
        </button>
      </div>
    </section>
  );
};

export default Services;
