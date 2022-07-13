import React from "react";
import facebook from "./image/facebook-icon.png";
import twitter from "./image/twitter-icon.png";
import instagram from "./image/instagram-icon.png";
import whatsapp from "./image/whatsapp-icon.png";
import linkedlin from "./image/linkedin-icon.png";
import snapchat from "./image/snapchat-icon.png";

const SocialMedia = () => {
  return (
    <section id="social-media">
      <div className="container text-center">
        <p>FIND US SOCIAL MEDIA</p>,
        <div className="social-icons">
          <a href="#">
            <img src={facebook} alt="facebook"></img>
          </a>
          <a href="#">
            <img src={twitter} alt="twitter"></img>
          </a>
          <a href="#">
            <img src={instagram} alt="instagram"></img>
          </a>
          <a href="#">
            <img src={whatsapp} alt="whatsapp"></img>
          </a>
          <a href="#">
            <img src={linkedlin} alt="linkedlin"></img>
          </a>
          <a href="#">
            <img src={snapchat} alt="snapchat"></img>
          </a>
        </div>
      </div>
    </section>
  );
};

export default SocialMedia;
