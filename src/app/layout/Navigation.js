"use client";
import React, { useEffect, useMemo } from "react";
import { Caveat } from "next/font/google";
import { FaBars } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import LogoImg from "../../../public/logo.png";

const caveatFont = Caveat({
  subsets: ["latin"],
  weight: ["700"],
});

function Navigation() {
  const handleScroll = useMemo(() => {
    return () => {
      const navbar = document.querySelector(".navbar");
      const scrolled = window.scrollY > 100;

      if (navbar && scrolled) {
        navbar.classList.add("navbar-scrolled");
      } else if (navbar) {
        navbar.classList.remove("navbar-scrolled");
      }
    };
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, [handleScroll]);

  return (
    <nav className="navbar navbar-expand-md fixed-top">
      <div className="container">
        <a className={`navbar-brand`} href="#">
          <Image
            src={LogoImg}
            alt="Logo"
            width="50"
            height="50"
            className="d-inline-block"
          />
          CandleCraft
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarToggler"
          aria-controls="navbarToggler"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <FaBars color="#f4f4f4" />
        </button>
        <div className="collapse navbar-collapse" id="navbarToggler">
          <div className="navbar-nav ms-auto">
            <Link className="nav-link text-center px-3" href="/#">
              Home
            </Link>
            <Link className="nav-link text-center px-3" href="/about">
              About
            </Link>
            <Link className="nav-link text-center px-3" href="/#products">
              Products
            </Link>
            <Link className="nav-link text-center px-3" href="/#contact">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
