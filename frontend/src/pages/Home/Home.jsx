import React from "react";
import NewArrivals from "./shared/NewArrivals";
import Hero from "../../components/Hero";

const Home = () => {
  return (
    <div>
      <Hero />
      <div>
        <NewArrivals />
      </div>
    </div>
  );
};

export default Home;
