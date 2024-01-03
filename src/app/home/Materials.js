import { Heading, Paragraph } from "@/components/Typography";
import Image from "next/image";
import React from "react";

export default function Materials() {
  return (
    <section id="materials" className="materials">
      <div className="container">
        <Heading level={3} className={"text-center mb-4"}>
          Available Materials
        </Heading>
        <div className="row">
          <div className="col-md-4">
            <div className="d-flex justify-content-center align-items-center">
              <div>
                <Image
                  className="materials__image d-block mx-auto"
                  src="/icon/palm-wax-logo.png"
                  width="250"
                  height="250"
                  alt="Palm Wax Logo Icon"
                />
                <Heading level={6} className={"text-center mt-3"}>
                  Palm Wax
                </Heading>
                <Paragraph level={1} className={"text-center mt-2"}>
                  A natural wax derived from palm oil, known for its clean
                  burning properties and unique crystalline patterns when
                  solidified.
                </Paragraph>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="d-flex justify-content-center align-items-center">
              <div>
                <Image
                  className="materials__image d-block mx-auto"
                  src="/icon/soy-wax-logo.png"
                  width="250"
                  height="250"
                  alt="Soy Wax Logo Icon"
                />
                <Heading level={6} className={"text-center mt-3"}>
                  Soy Wax
                </Heading>
                <Paragraph level={1} className={"text-center mt-2"}>
                  An eco-friendly, renewable wax made from soybeans, offering a
                  cleaner and longer burn, ideal for crafting high-quality
                  candles.
                </Paragraph>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="d-flex justify-content-center align-items-center">
              <div>
                <Image
                  className="materials__image d-block mx-auto"
                  src="/icon/beeswax-logo.png"
                  width="250"
                  height="250"
                  alt="Beeswax Logo Icon"
                />
                <Heading level={6} className={"text-center mt-3"}>
                  Beeswax
                </Heading>
                <Paragraph level={1} className={"text-center mt-2"}>
                  A natural, non-toxic wax produced by honeybees, renowned for
                  its rich, natural aroma, soot-free burn, perfect for
                  luxurious, environmentally-friendly candles.
                </Paragraph>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
