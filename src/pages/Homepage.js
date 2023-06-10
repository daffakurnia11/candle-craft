import Header from "@/components/Header";
import About from "@/components/Home/About";
import BestSeller from "@/components/Home/BestSeller";
import OurValues from "@/components/Home/OurValues";
import Testimonials from "@/components/Home/Testimonials";
import Navigation from "@/components/Navigation";
import TestiSwiper from "@/components/TestiSwiper";
import { Heading } from "@/components/Typography";

function Homepage() {
  return (
    <>
      <Navigation />
      <Header position={"right"} page={"home"} />
      <About />
      <OurValues />
      <BestSeller />
      <Testimonials />
    </>
  );
}

export default Homepage;
