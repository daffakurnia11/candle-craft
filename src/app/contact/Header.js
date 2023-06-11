"use client";
import React, { useRef } from "react";
import { HeaderButton } from "@/components/Components";
import { Heading } from "@/components/Typography";
import Location from "./Location";

function Header() {
  const locationRef = useRef(null);

  const scrollToLocation = () => {
    const yOffset = -56; // Navbar height
    const element = locationRef.current;
    if (element) {
      const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <>
      <header className={`header contact`}>
        <div className="container">
          <div className={`row flex-row`}>
            <div className="col-lg-6">
              <div className="header__content d-flex flex-column justify-content-center">
                <Heading
                  level={4}
                  className={`m-0 header__subtitle text-start`}
                >
                  Your Global Export Partner
                </Heading>
                <Heading
                  level={1}
                  className={`m-0 header__title my-3 my-lg-0 text-start`}
                >
                  Reach Out and Connect
                </Heading>
                <HeaderButton
                  buttonAlign={"me-auto"}
                  onClick={scrollToLocation}
                >
                  Get Connected
                </HeaderButton>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div ref={locationRef}>
        <Location />
      </div>
    </>
  );
}

export default Header;
