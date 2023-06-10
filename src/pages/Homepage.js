import Header from "@/components/Header";
import About from "@/components/Home/About";
import BestSeller from "@/components/Home/BestSeller";
import OurValues from "@/components/Home/OurValues";
import Navigation from "@/components/Navigation";

function Homepage() {
  return (
    <>
      <Navigation />
      <Header position={"right"} page={"home"} />
      <About />
      <OurValues />
      <BestSeller />
    </>
  );
}

export default Homepage;
