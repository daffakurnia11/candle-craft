import HomeAboutImg from "../../../public/img/home-about.jpg";
import React from "react";
import { ImageSection } from "../../components/Components";
import { Heading, Paragraph } from "../../components/Typography";

function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6">
            <Heading level={2}>About</Heading>
            <Paragraph level={1}>
              CandleCraft, a leading exporter of scented candles, captivates
              global audiences with exquisite fragrances. Meticulously
              handcrafted for immersive sensory experiences, our candles
              transform spaces into havens of beauty and tranquility.
            </Paragraph>
            <Paragraph level={1}>
              Indulge in the allure of CandleCraft, where carefully curated
              scents and stunning aesthetics create cherished moments.
              Experience the transformative power of our scented candles,
              bringing magic to every corner of the globe.
            </Paragraph>
          </div>
          <div className="col-md-6">
            <ImageSection
              image={HomeAboutImg}
              firstColor={"brown"}
              secondColor={"orange"}
              firstBox={"top-0 end-0"}
              secondBox={"bottom-0 start-0"}
              style={{ borderRadius: 24 }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
