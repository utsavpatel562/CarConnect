import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Catetory from "./components/Catetory";
import MostSearchedCar from "./components/MostSearchedCar";

function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Catetory />
      <MostSearchedCar />
    </div>
  );
}

export default Home;
