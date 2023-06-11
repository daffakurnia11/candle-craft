"use client";
import React, { useRef } from "react";
import { HeaderButton } from "@/components/Components";
import { Heading } from "@/components/Typography";
import Definition from "./Definition";

function Header() {
  const definitionRef = useRef(null);

  const scrollToDefinition = () => {
    const yOffset = -56; // Navbar height
    const element = definitionRef.current;
    if (element) {
      const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <>
      <header className={`header collection`}>
        <div className="container">
          <div className={`row flex-row`}>
            <div className="col-lg-6">
              <div className="header__content d-flex flex-column justify-content-center">
                <Heading
                  level={4}
                  className={`m-0 header__subtitle text-start`}
                >
                  Scented Aesthetic Candle
                </Heading>
                <Heading
                  level={1}
                  className={`m-0 header__title my-3 my-lg-0 text-start`}
                >
                  Our Collections
                </Heading>
                <HeaderButton
                  buttonAlign={"me-auto"}
                  onClick={scrollToDefinition}
                >
                  Shop Now
                </HeaderButton>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div ref={definitionRef}>
        <Definition />
      </div>
    </>
  );
}

export default Header;
