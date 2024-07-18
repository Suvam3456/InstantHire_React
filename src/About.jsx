import React, { useEffect } from "react";
import HeroSection from "./components/HeroSection";
import { useGlobalContext } from "./context";

const About = () => {
  const { udpateAboutPage } = useGlobalContext();
  Welcome to [Website Name] – Your Gateway to Cutting-Edge Technology Solutions!

At Techfusion, we are committed to empowering businesses and individuals with innovative and reliable tech solutions. Our mission is to drive digital transformation and ensure seamless integration of technology into your daily operations. We specialize in providing a comprehensive range of services designed to meet the evolving needs of the modern world.
  useEffect(() => udpateAboutPage(), []);

  // return <HeroSection/>;
};

export default About;
