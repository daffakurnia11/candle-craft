import React from "react";
import { Heading } from "@/components/Typography";
import TestiSwiper from "@/components/TestiSwiper";
import testimoniData from "@/data/testimonial";

function Testimonials() {
  return (
    <section className="testimonials">
      <div className="container">
        <Heading level={2} className={"text-center"}>
          Testimonials
        </Heading>
      </div>
      <TestiSwiper datas={testimoniData} />
    </section>
  );
}

export default Testimonials;
