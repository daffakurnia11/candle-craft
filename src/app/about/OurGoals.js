import { Heading, Paragraph } from "@/components/Typography";
import React from "react";

export default function OurGoals() {
  return (
    <section className="goals">
      <div className="container">
        <Heading level={2} className={"text-center"}>
          Our Goals
        </Heading>
        <div className="row align-items-center justify-content-center">
          <div className="col-md-4 my-3">
            <div className="goals__poin mb-3">
              <Heading level={1} className={"text-center"}>
                01
              </Heading>
            </div>
            <Paragraph level={1} className={"text-center goals__description"}>
              Increase candle production to achieve{" "}
              <strong>10-15 container shipments</strong>
              per year within 1-3 years.
            </Paragraph>
          </div>
          <div className="col-md-4 my-3">
            <div className="goals__poin mb-3">
              <Heading level={1} className={"text-center"}>
                02
              </Heading>
            </div>
            <Paragraph level={1} className={"text-center goals__description"}>
              Launch at least <strong>3 new innovative candle series</strong>{" "}
              with unique designs and scents by the end of 2025.
            </Paragraph>
          </div>
          <div className="col-md-4 my-3">
            <div className="goals__poin mb-3">
              <Heading level={1} className={"text-center"}>
                03
              </Heading>
            </div>
            <Paragraph level={1} className={"text-center goals__description"}>
              Develop the abilities of{" "}
              <strong>100-150 local community members</strong> in sustainable
              candle production over the next 3 years, supporting local economic
              growth.
            </Paragraph>
          </div>
          <div className="col-md-4 my-3">
            <div className="goals__poin mb-3">
              <Heading level={1} className={"text-center"}>
                04
              </Heading>
            </div>
            <Paragraph level={1} className={"text-center goals__description"}>
              Reach <strong>5,000 social media followers</strong> and
              significantly <strong>boost online sales</strong> within 3 years,
              expanding into major international markets.
            </Paragraph>
          </div>
          <div className="col-md-4 my-3">
            <div className="goals__poin mb-3">
              <Heading level={1} className={"text-center"}>
                05
              </Heading>
            </div>
            <Paragraph level={1} className={"text-center goals__description"}>
              Enhance <strong>employee satisfaction and skills</strong> through
              ongoing training opportunities, focusing on{" "}
              <strong>professional development</strong> over the next 3 years.
            </Paragraph>
          </div>
        </div>
      </div>
    </section>
  );
}
