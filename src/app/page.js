import Header from "@/app/home/Header";
import About from "@/app/home/About";
import BestSeller from "@/app/home/BestSeller";
import OurValues from "@/app/home/OurValues";
import Testimonials from "@/app/home/Testimonials";

export default function Home() {
  return (
    <>
      <Header position={"right"} page={"home"} />
      <About />
      <OurValues />
      <BestSeller />
      <Testimonials />
    </>
  );
}
