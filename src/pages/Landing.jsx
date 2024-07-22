import React, { useEffect } from "react";
import HeroSection from "../components/Landing/HeroSection";
import FeaturedServices from "../components/Landing/FeaturedServices";
import Cta from "../components/Landing/Cta";
import AboutUs from "../components/Landing/AboutUs";
import Counts from "../components/Landing/Counts";
import Features from "../components/Landing/Features";
import Services from "../components/Landing/Services";
import Appointment from "../components/Landing/Appointment";
import Departments from "../components/Landing/Departments";
import Gallery from "../components/Landing/Gallery";

const Landing = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <>
      <HeroSection />
      <FeaturedServices />
      <Cta />
      <AboutUs />
      <Counts />
      <Features />
      <Services />
      <Appointment />
      <Departments />
      <Gallery />
    </>
  );
};

export default Landing;
