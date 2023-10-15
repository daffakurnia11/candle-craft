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
              CandleCraft is a leading exporter of aesthetic scented candles,
              enchanting global audiences with our exquisite fragrances. Each
              candle is meticulously handcrafted, combining premium ingredients
              and innovative designs to create an immersive sensory experience.
              From cozy comfort to elegant sophistication, CandleCraft
              illuminates spaces, transforming environments into havens of
              beauty and tranquility.
            </Paragraph>
            <Paragraph level={1}>
              Indulge in the allure of CandleCraft as we export the essence of
              captivating scents worldwide. Our candles are carefully curated to
              evoke emotions and create cherished moments. With a harmonious
              blend of captivating fragrances and stunning aesthetics,
              CandleCraft invites you to embark on a sensory journey like no
              other. Embrace the essence of our candles and let their warm glow
              elevate your space, wherever it may be. Discover the
              transformative power of CandleCraft and experience the magic that
              our aesthetic scented candles bring to every corner of the globe.
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
