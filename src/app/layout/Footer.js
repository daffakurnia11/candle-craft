import React from "react";
import { Caveat } from "next/font/google";
import { Heading, Paragraph } from "@/components/Typography";
import { BsEnvelope, BsTelephone, BsWhatsapp } from "react-icons/bs";
import Link from "next/link";
import { listCategory } from "@/data/product";

const caveatFont = Caveat({
  subsets: ["latin"],
  weight: ["700"],
});

function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="mb-3 col-lg-4 col-md-6">
              <a className={`footer__brand ${caveatFont.className}`} href="#">
                CandleCraft
              </a>
              <Paragraph level={1} className={"mb-0"}>
                PT. Kurnia Crafting and Supplier
              </Paragraph>
              <Paragraph level={1}>
                Perum. Gading Fajar 1 B6/21 Buduran Sidoarjo,
                <br />
                East Java - 61252
                <br />
                Indonesia
              </Paragraph>
              <div className="d-flex mt-3">
                <Link className="footer__link" href="tel:6285156317473">
                  <BsTelephone size={30} className="me-3" />
                </Link>
                <Link
                  className="footer__link"
                  href="https://wa.me/6285156317474"
                  target="_blank"
                >
                  <BsWhatsapp size={30} className="me-3" />
                </Link>
                <Link
                  className="footer__link"
                  href="mailto:daffakurniaf11@gmail.com"
                >
                  <BsEnvelope size={30} className="me-3" />
                </Link>
              </div>
            </div>
            <div className="mb-3 col-lg-1 d-none d-lg-block"></div>
            <div className="mb-3 col-md-3">
              <Heading level={6} className={"mb-4"}>
                Products
              </Heading>
              <ul className="footer__list">
                {listCategory.map((data, index) => (
                  <li key={index}>
                    <Link href="/collection">{data}</Link>
                  </li>
                ))}
                {/* <li>
                <Link href="/collection">Custom Candle</Link>
              </li> */}
              </ul>
            </div>
            <div className="mb-3 col-md-3">
              <Heading level={6} className={"mb-4"}>
                Links
              </Heading>
              <ul className="footer__list">
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="/about">About</Link>
                </li>
                <li>
                  <Link href="/collection">Collection</Link>
                </li>
                <li>
                  <Link href="/contact">Contact Us</Link>
                </li>
              </ul>
            </div>
            <div className="mb-3 col-lg-1 d-none d-lg-block"></div>
          </div>
        </div>
        <Paragraph level={2} className={"text-center pt-5 mb-0"}>
          @2023 CandleCraft. All rights reserved
        </Paragraph>
      </footer>
    </>
  );
}

export default Footer;
