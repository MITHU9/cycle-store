import React from "react";
import NewArrivals from "./shared/NewArrivals";
import Hero from "../../components/Hero";
import MountainBikes from "../../components/MountainBikes";

const Home = () => {
  return (
    <div>
      <Hero />
      <div>
        <NewArrivals />
        <MountainBikes />
      </div>
    </div>
  );
};

export default Home;
