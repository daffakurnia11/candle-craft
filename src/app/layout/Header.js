import React, { useMemo } from "react";
import { HeaderButton } from "@/components/Components";
import { Heading } from "@/components/Typography";

function Header({ position, page }) {
  const textPosition = useMemo(() => {
    if (position === "left") {
      return "flex-row";
    } else {
      return "flex-row-reverse";
    }
  }, [position]);

  const textAlign = useMemo(() => {
    if (position === "left") {
      return "text-start";
    } else {
      return "text-end";
    }
  }, [position]);

  const buttonAlign = useMemo(() => {
    if (position === "left") {
      return "me-auto";
    } else {
      return "ms-auto";
    }
  }, [position]);

  return (
    <header className={`header ${page}`}>
      <div className="container">
        <div className={`row ${textPosition}`}>
          <div className="col-lg-6">
            <div className="header__content d-flex flex-column justify-content-center">
              <Heading
                level={4}
                className={`m-0 header__subtitle ${textAlign}`}
              >
                Spreading Scents Around the World
              </Heading>
              <Heading
                level={1}
                className={`m-0 header__title my-3 my-lg-0 ${textAlign}`}
              >
                Illuminate Your Ambiance
              </Heading>
              <HeaderButton buttonAlign={buttonAlign}>
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
