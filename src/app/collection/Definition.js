import { ImageSection } from "@/components/Components";
import { Heading, Paragraph } from "@/components/Typography";
import React from "react";
import DefinitionImg from "../../../public/img/definition.jpg";

function Definition() {
  return (
    <section className="definition">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6">
            <Heading level={2}>The Art of Scented Candles</Heading>
            <Paragraph level={1}>
              Indulge in the soothing power of CandleCraft Scented Candles and
              transform your space into a haven of relaxation. With our
              extensive collection of invigorating scents, you can immerse
              yourself in the calming notes of lavender after a long day or
              enhance your focus with the refreshing aroma of peppermint during
              work or study sessions.
            </Paragraph>
            <Paragraph level={1}>
              Each candle is meticulously crafted to exude elegance, elevating
              the aesthetics of your home. The gentle and inviting fragrances
              subtly permeate the room, creating a serene ambiance without
              overwhelming your senses. Crafted with premium-quality
              ingredients, our candles burn clean, leaving minimal residue while
              promoting a healthy and natural environment. Experience the
              harmonious blend of luxury, aesthetics, and the healing power of
              nature with CandleCraft Scented Candles.
            </Paragraph>
          </div>
          <div className="col-md-6">
            <ImageSection
              image={DefinitionImg}
              firstColor={"brown"}
              firstBox={"top-0 end-0"}
              secondColor={"orange"}
              secondBox={"bottom-0 start-0"}
              style={{ borderRadius: 24 }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Definition;
