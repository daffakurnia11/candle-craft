"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Scrollbar } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import StarRating from "./StarRating";
import { Paragraph } from "./Typography";

function TestiSwiper({ datas }) {
  return (
    <Swiper
      modules={[Pagination, Scrollbar]}
      centeredSlides={true}
      spaceBetween={30}
      pagination={{
        clickable: true,
      }}
      initialSlide={1}
      slidesPerView={"auto"}
      navigation
    >
      {datas.map((data) => (
        <>
          <SwiperSlide>
            <div className="card testimonials__card my-3">
              <div className="card-body p-0">
                <Paragraph level={1} className={"text-center mb-1"}>
                  {data.name}
                </Paragraph>
                <div className="d-flex justify-content-center">
                  <StarRating rating={data.rating} />
                </div>
                <Paragraph level={2} className={"text-center mt-2"}>
                  {data.testimonial}
                </Paragraph>
              </div>
            </div>
          </SwiperSlide>
        </>
      ))}
    </Swiper>
  );
}

export default TestiSwiper;
