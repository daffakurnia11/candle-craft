"use client";
import React, { useRef } from "react";
import { HeaderButton, ImageSection } from "@/components/Components";
import { Heading } from "@/components/Typography";
import { Caveat } from "next/font/google";

import Vision from "./Vision";
import Mission from "./Mission";
import VisionMissionImg from "../../../public/img/vision-mission.jpg";

const caveatFont = Caveat({
  subsets: ["latin"],
  weight: ["700"],
});

function Header() {
  const vismisRef = useRef(null);

  const scrollToVismis = () => {
    const yOffset = -56; // Navbar height
    const element = vismisRef.current;
    if (element) {
      const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <>
      <header className={`header aboutus`}>
        <div className="container">
          <div className={`row flex-row`}>
            <div className="col-lg-6">
              <div className="header__content d-flex flex-column justify-content-center">
                <Heading
                  level={4}
                  className={`m-0 header__subtitle text-start`}
                >
                  <span className={caveatFont.className}>CandleCraft</span> is a
                  scented candle
                </Heading>
                <Heading
                  level={1}
                  className={`m-0 header__title my-3 my-lg-0 text-start`}
                >
                  Crafted with Care
                </Heading>
                <HeaderButton buttonAlign={"me-auto"} onClick={scrollToVismis}>
                  Discover More
                </HeaderButton>
              </div>
            </div>
          </div>
        </div>
      </header>
      <section className="vismis" ref={vismisRef}>
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
                style={{ borderRadius: 24 }}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Header;
