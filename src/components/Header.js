import React, { useMemo } from "react";
import { HeaderButton } from "./Sections";

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
          <div className="col-md-6">
            <div className="header__content d-flex flex-column justify-content-center">
              <h2 className={`header__subtitle ${textAlign}`}>
                Spreading Scents Around the World
              </h2>
              <h1 className={`header__title ${textAlign}`}>
                Illuminate Your Ambiance
              </h1>
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
