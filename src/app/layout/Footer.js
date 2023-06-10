import React from "react";
import { Caveat } from "next/font/google";
import { Heading, Paragraph } from "../../components/Typography";
import { BsEnvelope, BsTelephone, BsWhatsapp } from "react-icons/bs";

const caveatFont = Caveat({
  subsets: ["latin"],
  weight: ["700"],
});

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="mb-3 col-lg-4 col-md-6">
            <a className={`footer__brand ${caveatFont.className}`} href="#">
              CandleCraft
            </a>
            <Paragraph level={1}>
              Export {`CandleCraft's`} premium handcrafted candles. Captivating
              scents, stunning designs. Enchanting glow for global markets.
            </Paragraph>
            <Paragraph level={1}>
              Perum. Gading Fajar 1 B6/21 Buduran Sidoarjo,
              <br />
              East Java - 61252
              <br />
              Indonesia
            </Paragraph>
            <div className="d-flex mt-3">
              <a className="footer__link" href="tel:6285156317473">
                <BsTelephone size={30} className="me-3" />
              </a>
              <a
                className="footer__link"
                href="https://wa.me/6285156317474"
                target="_blank"
              >
                <BsWhatsapp size={30} className="me-3" />
              </a>
              <a
                className="footer__link"
                href="mailto:daffakurniaf11@gmail.com"
              >
                <BsEnvelope size={30} className="me-3" />
              </a>
            </div>
          </div>
          <div className="mb-3 col-lg-1 d-none d-lg-block"></div>
          <div className="mb-3 col-md-3">
            <Heading level={6} className={"mb-4"}>
              Products
            </Heading>
            <ul className="footer__list">
              <li>Scented Bubble Candle</li>
              <li>Scented Sachet Candle</li>
              <li>Glass Candle</li>
              <li>Concrete Candle</li>
              <li>Rose Candle</li>
              <li>Custom Candle</li>
            </ul>
          </div>
          <div className="mb-3 col-md-3">
            <Heading level={6} className={"mb-4"}>
              Links
            </Heading>
            <ul className="footer__list">
              <li>Home</li>
              <li>About Us</li>
              <li>Collections</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div className="mb-3 col-lg-1 d-none d-lg-block"></div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
