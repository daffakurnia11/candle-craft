"use client";
import React, { useRef } from "react";
import { HeaderButton } from "@/components/Components";
import { Heading } from "@/components/Typography";
import About from "../home/About";

function Header() {
  const aboutRef = useRef(null);

  const scrollToAbout = () => {
    const yOffset = -56; // Navbar height
    const element = aboutRef.current;
    if (element) {
      const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <>
      <header className={`header about-page`}>
        <div className="container">
          <div className={`row flex-row`}>
            <div className="col-lg-6">
              <div className="header__content d-flex flex-column justify-content-center">
                <Heading
                  level={4}
                  className={`m-0 header__subtitle text-start`}
                >
                  PT. Kurnia Crafting and Supplier
                </Heading>
                <Heading
                  level={1}
                  className={`m-0 header__title my-3 my-lg-0 text-start`}
                >
                  CandleCraft
                </Heading>
                <HeaderButton
                  buttonAlign={"me-auto mt-3"}
                  onClick={scrollToAbout}
                >
                  Get to Know
                </HeaderButton>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div ref={aboutRef}>
        <About />
      </div>
    </>
  );
}

export default Header;
