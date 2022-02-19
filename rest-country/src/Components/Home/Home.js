import React from "react";
import "./Home.css";
import HomeCountry from "./HomeCountry/HomeCountry";

const Home = () => {
  return (
    <div className="other-style">
      <h1>This Is Home</h1>
      <HomeCountry></HomeCountry>
    </div>
  );
};

export default Home;
