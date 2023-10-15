import Header from "@/app/home/Header";
import Products from "@/app/home/Products";
import OurValues from "@/app/home/OurValues";
import Location from "@/app/home/Location";

export const metadata = {
  title: "The Best Exporter of Scented Candle - Home | CandleCraft",
  description: "The Best Exporter of Scented Candle - CandleCraft",
};

export default function Home() {
  return (
    <>
      <Header />
      <OurValues />
      <Products />
      <Location />
      {/* <Testimonials /> */}
    </>
  );
}
