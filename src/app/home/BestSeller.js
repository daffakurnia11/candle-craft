import React from "react";
import { Heading, Paragraph } from "@/components/Typography";
import { ImageSection, SectionButton } from "@/components/Components";
import Image from "next/image";
import BestSellerImg from "../../../public/img/best-seller.png";
import WhatsappIcon from "../../../public/icon/whatsapp-icon.svg";
import Link from "next/link";

function BestSeller() {
  return (
    <section className="bestseller">
      <div className="container">
        <Heading level={2} className={"text-center mb-4"}>
          Best Seller
        </Heading>
        <div className="row">
          <div className="col-lg-6 mb-5 mb-lg-0">
            <ImageSection
              image={BestSellerImg}
              firstColor={"brown"}
              firstBox={"top-0 start-0"}
              secondColor={"pink"}
              secondBox={"bottom-0 end-0"}
            />
          </div>
          <div className="col-lg-6">
            <Heading level={3}>Scented Bubble Candle</Heading>
            <Paragraph level={1} className={"mb-4"}>
              Introducing our Aromatherapy Bubble Candles, meticulously
              handcrafted from environmentally-friendly palm wax. These charming
              bubble-shaped candles measure 6x6x5.5 cm and weigh 150 grams,
              adding an aesthetic touch to any space. With a burn time of
              approximately 2-3 hours, they create a serene atmosphere and
              enhance relaxation. Choose from scents like Fresh Lemon, Luxury
              Cherry, Lavender, and Jasmine, each carefully crafted to provide a
              unique sensory experience. Made from responsibly sourced palm wax,
              our commitment to quality and sustainability shines through.
              Immerse yourself in the enchanting world of aromatherapy with our
              Aromatherapy Bubble Candles and indulge in the soothing glow and
              captivating aromas they offer.
            </Paragraph>
            <div className="d-flex flex-md-row flex-column align-items-center">
              <Link href={"/collection"}>
                <SectionButton className="me-md-3 mb-3 mb-md-0">
                  More Product
                </SectionButton>
              </Link>
              <Link href="https://wa.me/6285156317474" target="_blank">
                <SectionButton className="pe-4 d-flex align-items-center">
                  Get Orders{" "}
                  <Image
                    src={WhatsappIcon}
                    width={24}
                    height={24}
                    alt="Whatsapp Icon"
                    className="ms-2"
                  />
                </SectionButton>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BestSeller;
