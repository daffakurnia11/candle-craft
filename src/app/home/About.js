import HomeAboutImg from "../../../public/img/home-about.jpg";
import React from "react";
import { ImageSection, SectionButton } from "../../components/Components";
import { Heading, Paragraph } from "../../components/Typography";
import Link from "next/link";
import { usePathname } from "next/navigation";

function About() {
  const pathname = usePathname();

  console.log(pathname);

  return (
    <section id="about" className="about">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6">
            <Heading level={2}>About</Heading>
            <Paragraph level={1}>
              Based in Indonesia, <strong>CandleCraft</strong> by PT. Kurnia
              Crafting and Supplier is an{" "}
              <strong>innovative candle maker</strong>, known for{" "}
              <strong>high-quality</strong>,{" "}
              <strong>eco-friendly candles</strong>. We use{" "}
              <strong>sustainable materials</strong> like palm wax, soy wax, and
              beeswax to create products that are both environmentally conscious
              and aesthetically pleasing. Partnering with{" "}
              <strong>local communities and SMEs</strong>, CandleCraft is
              committed to <strong>local economic growth</strong> and{" "}
              <strong>international standards</strong>, serving both{" "}
              <strong>B2B and B2C markets</strong>.
            </Paragraph>
            {pathname !== "/about/" && (
              <Link href="/about">
                <SectionButton>Get to know</SectionButton>
              </Link>
            )}
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
