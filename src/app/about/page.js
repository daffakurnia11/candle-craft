import React from "react";
import Header from "./Header";
import OurValues from "../home/OurValues";
import Testimonials from "../home/Testimonials";

export const metadata = {
  title: "CandleCraft - About",
  description:
    "CandleCraft is a scented candle crafted with care - CandleCraft",
};

export default function About() {
  return (
    <>
      <Header position={"right"} page={"aboutus"} />
      <OurValues />
      <Testimonials />
    </>
  );
}
