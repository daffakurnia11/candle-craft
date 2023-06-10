import Header from "@/components/Header";
import Navigation from "@/components/Navigation";
import React from "react";

function Homepage() {
  return (
    <>
      <Navigation />
      <Header position={"right"} page={"home"} />
    </>
  );
}

export default Homepage;
