import Header from "@/app/home/Header";
import BestSeller from "@/app/home/BestSeller";
import OurValues from "@/app/home/OurValues";
import Testimonials from "@/app/home/Testimonials";

export const metadata = {
  title: "CandleCraft - Home",
  description:
    "Spreading Scents Around the World, Illuminate Your Ambiance - CandleCraft",
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
