import React from "react";
import { HeaderButton } from "@/components/Components";
import { Heading } from "@/components/Typography";

function Header() {
  return (
    <header className={`header home`}>
      <div className="container">
        <div className={`row flex-row-reverse`}>
          <div className="col-lg-6">
            <div className="header__content d-flex flex-column justify-content-center">
              <Heading level={4} className={`m-0 header__subtitle text-end`}>
                Spreading Scents Around the World
              </Heading>
              <Heading
                level={1}
                className={`m-0 header__title my-3 my-lg-0 text-end`}
              >
                Illuminate Your Ambiance
              </Heading>
              <HeaderButton buttonAlign={"ms-auto"}>
                Start Exploring
              </HeaderButton>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
