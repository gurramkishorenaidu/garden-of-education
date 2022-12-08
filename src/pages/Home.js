import React from "react";
import Slider from "../components/Slider";
import banner from "../assets/banner.png";

const Home = () => {
  return (
    <>
      <div className="bg-green-100">
        <img src={banner} alt="banner" />
      </div>
      <Slider />
    </>
  );
};

export default Home;
