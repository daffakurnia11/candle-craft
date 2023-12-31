import OurValues from "../home/OurValues";
import Header from "./Header";
import OurGoals from "./OurGoals";
import OurMission from "./OurMission";
import OurVision from "./OurVision";

export const metadata = {
  title: "Get to Know - About | CandleCraft",
  description: "The Best Exporter of Scented Candle - CandleCraft",
};

export default function About() {
  return (
    <>
      <Header />
      <OurValues />
      <OurVision />
      <OurMission />
      <OurGoals />
    </>
  );
}
