import { ImageSection } from "@/components/Components";
import VisionImg from "../../../public/img/best-seller.jpg";
import React from "react";
import { Heading, Paragraph } from "@/components/Typography";

export default function OurVision() {
  return (
    <section className="vision">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6">
            <ImageSection
              image={VisionImg}
              firstColor={"pink"}
              secondColor={"grey"}
              firstBox={"bottom-0 start-0"}
              secondBox={"top-0 end-0"}
              style={{ borderRadius: 24 }}
            />
          </div>
          <div className="col-md-6 mt-5 mt-md-0">
            <Heading level={2}>Our Vision</Heading>
            <Paragraph level={1}>
              <strong>Striving to be a pioneer</strong> in{" "}
              <strong>innovation</strong> and{" "}
              <strong>environmental friendliness</strong> in the candle
              industry, committed to producing{" "}
              <strong>exclusive natural and sustainable products</strong>, while
              supporting <strong>local growth</strong> and{" "}
              <strong>accelerating Indonesia&apos;s economic progress</strong>.
            </Paragraph>
          </div>
        </div>
      </div>
    </section>
  );
}
