import React from "react";
import Header from "./Header";
import Vision from "./Vision";
import Mission from "./Mission";
import VisionMissionImg from "../../../public/img/vision-mission.png";
import { ImageSection } from "@/components/Components";
import OurValues from "../home/OurValues";
import Testimonials from "../home/Testimonials";

export default function About() {
  return (
    <>
      <Header position={"right"} page={"aboutus"} />
      <section className="vismis">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <Vision />
              <Mission />
            </div>
            <div className="col-md-6">
              <ImageSection
                image={VisionMissionImg}
                firstColor={"grey"}
                firstBox={"top-0 end-0"}
                secondColor={"pink"}
                secondBox={"bottom-0 start-0"}
              />
            </div>
          </div>
        </div>
      </section>
      <OurValues />
      <Testimonials />
    </>
  );
}
