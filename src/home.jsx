import { SignInButton } from "@clerk/clerk-react";
import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Catetory from "./components/Catetory";

function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Catetory />
    </div>
  );
}

export default Home;
