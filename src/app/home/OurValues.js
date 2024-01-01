import React from "react";
import ValuesOne from "../../../public/icon/values1.svg";
import ValuesTwo from "../../../public/icon/values2.svg";
import ValuesThree from "../../../public/icon/values3.svg";
import ValuesFour from "../../../public/icon/values4.svg";
import Image from "next/image";
import { Heading, Paragraph } from "@/components/Typography";

function OurValues() {
  return (
    <section className="values">
      <div className="container">
        <Heading level={2} className={"text-center mb-md-5"}>
          Our Values
        </Heading>
        <div className="row">
          {/* First Value */}
          <div className="col-md-6 col-lg-3 mb-3">
            <div className="values__icon-container d-flex justify-content-center align-items-center">
              <Image
                src={ValuesOne}
                width={100}
                height={100}
                alt="Values Icon"
                className="values__icon"
              />
            </div>
            <Heading
              level={5}
              className="values__value text-center mt-md-3 mb-md-2 my-0"
            >
              Sustainable Quality
            </Heading>
            <Paragraph level={1} className={"text-center"}>
              Combining eco-friendliness with premium craftsmanship, our candles
              are made with the finest sustainable materials to meet global
              standards.
            </Paragraph>
          </div>

          {/* Second Value */}
          <div className="col-md-6 col-lg-3 mb-3">
            <div className="values__icon-container d-flex justify-content-center align-items-center">
              <Image
                src={ValuesTwo}
                width={100}
                height={100}
                alt="Values Icon"
                className="values__icon"
              />
            </div>
            <Heading
              level={5}
              className="values__value text-center mt-md-3 mb-md-2 my-0"
            >
              Innovative Design
            </Heading>
            <Paragraph level={1} className={"text-center"}>
              Innovation is at our core, shaping unique and elegant candles that
              enhance any space with their luxurious aromatic experience.
            </Paragraph>
          </div>

          {/* Third Value */}
          <div className="col-md-6 col-lg-3 mb-3">
            <div className="values__icon-container d-flex justify-content-center align-items-center">
              <Image
                src={ValuesThree}
                width={100}
                height={100}
                alt="Values Icon"
                className="values__icon"
              />
            </div>
            <Heading
              level={5}
              className="values__value text-center mt-md-3 mb-md-2 my-0"
            >
              Community & Clarity
            </Heading>
            <Paragraph level={1} className={"text-center"}>
              We empower local communities and operate with transparency,
              fostering trust through honesty in our partnerships and customer
              relations.
            </Paragraph>
          </div>

          {/* Fourth Value */}
          <div className="col-md-6 col-lg-3 mb-3">
            <div className="values__icon-container d-flex justify-content-center align-items-center">
              <Image
                src={ValuesFour}
                width={100}
                height={100}
                alt="Values Icon"
                className="values__icon"
              />
            </div>
            <Heading
              level={5}
              className="values__value text-center mt-md-3 mb-md-2 my-0"
            >
              Exceptional Service
            </Heading>
            <Paragraph level={1} className={"text-center"}>
              Our dedication to customer satisfaction drives us to deliver
              exceptional service, ensuring a superior and personalized shopping
              experience.
            </Paragraph>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurValues;
