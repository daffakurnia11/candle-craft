import Header from "@/app/home/Header";
import BestSeller from "@/app/home/BestSeller";
import OurValues from "@/app/home/OurValues";
import Testimonials from "@/app/home/Testimonials";

export const metadata = {
  title: "The Best Exporter of Scented Candle - Home | CandleCraft",
  description: "The Best Exporter of Scented Candle - CandleCraft",
};

export default function Home() {
  return (
    <>
      <Header position={"right"} page={"home"} />
      <OurValues />
      <BestSeller />
      <Testimonials />
    </>
  );
}
