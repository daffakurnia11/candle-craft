import Image from "next/image";
import HomeAboutImg from "../../public/img/home-about.png";
import React from "react";

function HomeAbout() {
  return (
    <section className="about">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6">
            <h2 className="about__title">About</h2>
            <p className="about__desc">
              CandleCraft is a premium scented candle provider, intertwining
              artistry and superior quality in every product. Drawing
              inspiration from {`nature's`} beauty and the power of aroma, we
              create candles that not only illuminate your space, but also
              ignite your senses.
            </p>
            <p className="about__desc">
              Our diverse aromas, sourced from the finest natural ingredients,
              offer you a true sensation of relaxation and comfort every time
              you light them up. Shipped globally, CandleCraft is committed to
              bringing the beauty and comfort of scented candles into every
              home, no matter where it is.
            </p>
          </div>
          <div className="col-md-6">
            <div className="about__image-content">
              <div className="about__image-box"></div>
              <div className="about__image-box"></div>
              <Image
                src={HomeAboutImg}
                alt="Home About Image"
                className="about__image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeAbout;
