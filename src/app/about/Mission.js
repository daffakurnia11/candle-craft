import { Heading, Paragraph } from "@/components/Typography";
import React from "react";

function Mission() {
  return (
    <>
      <Heading level={2} className={"mb-2"}>
        Mission
      </Heading>
      <ol>
        <li>
          <Paragraph level={1} className={"mb-2"}>
            Developing SME Businesses: Empowering SME businesses in the
            aromatherapy candle industry through training, resources, and market
            expansion platforms.
          </Paragraph>
        </li>
        <li>
          <Paragraph level={1} className={"mb-2"}>
            Handmade Premium Products: Creating premium handmade aromatherapy
            candles that captivate with innovative touches of creativity.
          </Paragraph>
        </li>
        <li>
          <Paragraph level={1} className={"mb-2"}>
            Environmental Sustainability: Utilizing eco-friendly materials and
            implementing sustainable production practices.
          </Paragraph>
        </li>
        <li>
          <Paragraph level={1} className={"mb-2"}>
            Transparency and Trust: Providing a trustworthy transaction
            experience with clear product information and responsive customer
            service.
          </Paragraph>
        </li>
        <li>
          <Paragraph level={1} className={"mb-2"}>
            Fostering the SME Community: Supporting the growth and success of
            SMEs in the aromatherapy candle industry through collaboration and
            assistance.
          </Paragraph>
        </li>
      </ol>
    </>
  );
}

export default Mission;
