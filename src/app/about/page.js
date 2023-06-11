import React from "react";
import Header from "./Header";
import OurValues from "../home/OurValues";
import Testimonials from "../home/Testimonials";

export default function About() {
  return (
    <>
      <Header position={"right"} page={"aboutus"} />
      <OurValues />
      <Testimonials />
    </>
  );
}
