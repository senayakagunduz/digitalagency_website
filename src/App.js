import React from "react";
import NavBar from "./NavBar";
import "./index.css";
import Banner from "./Banner";
import Services from "./Services";
import About from "./About";
import Testimonials from "./Testimonials";
import SocialMedia from "./SocialMedia";
import Footer from "./Footer";
function App() {
  return (
    <>
      <NavBar />
      <Banner />
      <Services />
      <About />
      <Testimonials />
      <SocialMedia />
      <Footer />
    </>
  );
}

export default App;
