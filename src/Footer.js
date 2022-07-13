import React from "react";
import { IconContext } from "react-icons";
import wave from "./image/wave2.png";
import logo from "./image/logo2.png";
import { FiMapPin } from "react-icons/fi";
import { FiPhone } from "react-icons/fi";
import { FiMail } from "react-icons/fi";

const Footer = () => {
  return (
    <section id="footer">
      <img src={wave} alt="wave" className="footer-img" />
      <div className="container">
        <div className="row">
          <div className="col-md-4 footer-box">
            <img src={logo} alt="logo" />
            <p>
              Subscribe to watch more videos on Website development,Digital
              marketing,Worldpress and graphic designing.Press to button to get
              notifications
            </p>
          </div>
          <div className="col-md-4 footer-box">
            <p>
              <b>CONTACT US</b>
            </p>
            <IconContext.Provider
              value={{
                className: "fi",
              }}
            >
              <p>
                <FiMapPin />
                World Trade Center, Istanbul
              </p>
              <p>
                <FiPhone />
                +90 216 372 75 87
              </p>
              <p>
                <FiMail />
                world-trade@gmail.com
              </p>
            </IconContext.Provider>
          </div>
          <div className="col-md-4 footer-box">
            <p>
              <b>SUBSCRIBE NEWSLETTER</b>
            </p>
            <input
              type="email"
              className="form-control"
              placeholder="Your Email"
            />
            <button type="button" className="btn btn-primary">
              Subscribe
            </button>
          </div>
        </div>
        <div>
          <hr></hr>
          <p className="copyright">Website Crafted By Şenay Akagündüz</p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
