import Header from "@/components/Header";
import HomeAbout from "@/components/HomeAbout";
import Navigation from "@/components/Navigation";
import React from "react";

function Homepage() {
  return (
    <>
      <Navigation />
      <Header position={"right"} page={"home"} />
      <HomeAbout />
    </>
  );
}

export default Homepage;
