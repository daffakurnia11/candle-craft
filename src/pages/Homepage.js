import Header from "@/components/Header";
import HomeAbout from "@/components/HomeAbout";
import HomeValues from "@/components/HomeValues";
import Navigation from "@/components/Navigation";
import React from "react";

function Homepage() {
  return (
    <>
      <Navigation />
      <Header position={"right"} page={"home"} />
      <HomeAbout />
      <HomeValues />
    </>
  );
}

export default Homepage;
