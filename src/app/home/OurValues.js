import React from "react";
import ValuesOne from "../../../public/icon/fast-production-cycle.png";
import ValuesTwo from "../../../public/icon/trustworthy-transaction.png";
import ValuesThree from "../../../public/icon/premium-quality.png";
import ValuesFour from "../../../public/icon/exceptional-service.png";
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
              Fast Production Cycle
            </Heading>
            <Paragraph level={1} className={"text-center"}>
              Experience efficient supply chain operations that guarantee quick
              product delivery.
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
              Trustworthy Transactions
            </Heading>
            <Paragraph level={1} className={"text-center"}>
              We uphold transparency and honesty, ensuring a secure shopping
              experience.
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
              Premium Quality
            </Heading>
            <Paragraph level={1} className={"text-center"}>
              Our candles, crafted from fine ingredients, offer a luxurious
              aromatic experience.
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
              Committed to customer satisfaction, we aim to exceed expectations
              with prompt and responsive service.
            </Paragraph>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurValues;
