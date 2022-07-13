import React from "react";
import player from "./play.png";
import team from "./home2.png";
import wave from "./wave1.png";

const Banner = () => {
  return (
    <section id="banner">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            {/* <div className="col" style={{ width: "900px", height: "184px" }}> */}
            <p className="promo-title">BEST DIGITAL AGENCY</p>
            <p>
              Subscribe to watch more videos on Website development,Digital
              marketing,Worldpress and graphic designing
            </p>
            <a href="#">
              <img src={player} className="play-btn" alt="player" /> Watch
              tutorials
            </a>
          </div>
          <div className=" col-md-6 text-center">
            <img src={team} className="img-fluid" alt="team"></img>
          </div>
        </div>
      </div>
      <img src={wave} className="buttom-img" alt="wave"></img>
    </section>
  );
};

export default Banner;
