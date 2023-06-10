import HomeAboutImg from "../../../public/img/home-about.png";
import React from "react";
import { ImageSection } from "../Sections";
import { Heading, Paragraph } from "../Typography";

function About() {
  return (
    <section className="about">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6">
            <Heading level={2}>About</Heading>
            <Paragraph level={1}>
              CandleCraft is a premium scented candle provider, intertwining
              artistry and superior quality in every product. Drawing
              inspiration from {`nature's`} beauty and the power of aroma, we
              create candles that not only illuminate your space, but also
              ignite your senses.
            </Paragraph>
            <Paragraph level={1}>
              Our diverse aromas, sourced from the finest natural ingredients,
              offer you a true sensation of relaxation and comfort every time
              you light them up. Shipped globally, CandleCraft is committed to
              bringing the beauty and comfort of scented candles into every
              home, no matter where it is.
            </Paragraph>
          </div>
          <div className="col-md-6">
            <ImageSection
              image={HomeAboutImg}
              firstColor={"brown"}
              secondColor={"orange"}
              firstBox={"top-0 end-0"}
              secondBox={"bottom-0 start-0"}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
