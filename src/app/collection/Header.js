import React from "react";
import { HeaderButton } from "@/components/Components";
import { Heading } from "@/components/Typography";

function Header() {
  return (
    <header className={`header collection`}>
      <div className="container">
        <div className={`row flex-row`}>
          <div className="col-lg-6">
            <div className="header__content d-flex flex-column justify-content-center">
              <Heading level={4} className={`m-0 header__subtitle text-start`}>
                Scented Aesthetic Candle
              </Heading>
              <Heading
                level={1}
                className={`m-0 header__title my-3 my-lg-0 text-start`}
              >
                Our Collections
              </Heading>
              <HeaderButton buttonAlign={"me-auto"}>Shop Now</HeaderButton>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
