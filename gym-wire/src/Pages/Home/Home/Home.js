import React from "react";
import Banner from "../Banner/Banner";
import HomeServices from "../HomeServices/HomeServices";
import HomeTestimonials from "../HomeTestimonials/HomeTestimonials";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <Banner />
      <HomeServices />
      <HomeTestimonials />
    </div>
  );
};

export default Home;
