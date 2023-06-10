import React from "react";
import { Caveat } from "next/font/google";

const caveatFont = Caveat({
  subsets: ["latin"],
  weight: ["700"],
});

function Navigation() {
  return (
    <nav className="navbar navbar-expand-md fixed-top">
      <div className="container">
        <a className={`navbar-brand ${caveatFont.className}`} href="#">
          CandleCraft
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#testasdasd"
          aria-controls="testasdasd"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="testasdasd">
          <div className="navbar-nav ms-auto">
            <a className="nav-link px-3 active" aria-current="page" href="#">
              Home
            </a>
            <a className="nav-link px-3" href="#">
              About
            </a>
            <a className="nav-link px-3" href="#">
              Collection
            </a>
            <a className="nav-link px-3" href="#">
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
