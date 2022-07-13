import React from "react";
import user1 from "./image/user1.jpg";
import user2 from "./image/user2.jpg";

const Testimonials = () => {
  return (
    <section id="testimonial">
      <div className="container">
        <h1 className="title text-center">WHAT CLIENTS SAY</h1>
        <div className="row offset-1">
          <div className="col-md-5 testimonials">
            <p>
              Subscribe to watch more videos on Website development,Digital
              marketing,Worldpress and graphic designing
            </p>
            <img src={user1} alt="user1"></img>
            <p className="user-details">
              <b>Angelina: </b> Co-founder at xyz
            </p>
          </div>
          <div className="col-md-5 testimonials">
            <p>
              Subscribe to watch more videos on Website development,Digital
              marketing,Worldpress and graphic designing
            </p>
            <img src={user2} alt="user2"></img>
            <p className="user-details">
              <b>John Doe: </b> Director at xyz
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
