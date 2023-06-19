import React from "react";
import Header from "./Header";
import Product from "./Product";

export const metadata = {
  title: "The Best Exporter of Scented Candle - Collection | CandleCraft",
  description: "Our collection is a Scented Aesthetic Candle - CandleCraft",
};

export default function Collection() {
  return (
    <>
      <Header />
      <Product />
    </>
  );
}
