import React from "react";
import { HeaderButton } from "@/components/Components";
import { Heading } from "@/components/Typography";
import { Caveat } from "next/font/google";

const caveatFont = Caveat({
  subsets: ["latin"],
  weight: ["700"],
});

function Header() {
  return (
    <header className={`header aboutus`}>
      <div className="container">
        <div className={`row flex-row`}>
          <div className="col-lg-6">
            <div className="header__content d-flex flex-column justify-content-center">
              <Heading level={4} className={`m-0 header__subtitle text-start`}>
                <span className={caveatFont.className}>CandleCraft</span> is a
                scented candle
              </Heading>
              <Heading
                level={1}
                className={`m-0 header__title my-3 my-lg-0 text-start`}
              >
                Crafted with Care
              </Heading>
              <HeaderButton buttonAlign={"me-auto"}>Discover More</HeaderButton>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
