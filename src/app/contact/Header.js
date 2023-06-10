import React from "react";
import { HeaderButton } from "@/components/Components";
import { Heading } from "@/components/Typography";

function Header() {
  return (
    <header className={`header contact`}>
      <div className="container">
        <div className={`row flex-row`}>
          <div className="col-lg-6">
            <div className="header__content d-flex flex-column justify-content-center">
              <Heading level={4} className={`m-0 header__subtitle text-start`}>
                Your Global Export Partner
              </Heading>
              <Heading
                level={1}
                className={`m-0 header__title my-3 my-lg-0 text-start`}
              >
                Reach Out and Connect
              </Heading>
              <HeaderButton buttonAlign={"me-auto"}>Get Connected</HeaderButton>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
