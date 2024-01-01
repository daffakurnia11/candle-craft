import { ImageSection } from "@/components/Components";
import MissionImg from "../../../public/img/vision-mission.jpg";
import React from "react";
import { Heading, Paragraph } from "@/components/Typography";

export default function OurMission() {
  return (
    <section className="mission">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6">
            <Heading level={2}>Our Mission</Heading>
            <ol>
              <li>
                <Paragraph level={1}>
                  <strong>Producing high-quality candles</strong> using natural
                  and sustainable materials, while innovating in design and
                  aroma.
                </Paragraph>
              </li>
              <li>
                <Paragraph level={1}>
                  <strong>Empowering local communities</strong> through training
                  and partnerships with SMEs, supporting the growth of the
                  beeswax industry and the local economy.
                </Paragraph>
              </li>
              <li>
                <Paragraph level={1}>
                  <strong>
                    Developing attractive, innovative, and high-quality products
                  </strong>
                  , ensuring consistency in quality and excellence.
                </Paragraph>
              </li>
              <li>
                <Paragraph level={1}>
                  <strong>
                    Enhancing online presence and global marketing
                  </strong>{" "}
                  to expand international market reach, and building
                  partnerships with importers and multinational companies.
                </Paragraph>
              </li>
            </ol>
          </div>
          <div className="col-md-6">
            <ImageSection
              image={MissionImg}
              firstColor={"brown"}
              secondColor={"orange"}
              firstBox={"bottom-0 start-0"}
              secondBox={"top-0 end-0"}
              style={{ borderRadius: 24 }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
