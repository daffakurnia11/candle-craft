"use client";
import React from "react";
import { Heading } from "@/components/Typography";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";
import Image from "next/image";
import listProduct from "@/data/product";

function Products() {
  return (
    <section className="products">
      <div className="container">
        <Heading level={2} className={"text-center mb-4"}>
          Products
        </Heading>
      </div>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
        }}
        navigation={true}
        pagination={true}
        modules={[EffectCoverflow, Navigation, Pagination]}
      >
        {listProduct.map((data, key) => (
          <SwiperSlide key={key}>
            <div className="products__container">
              <Image
                src={`/product/${data.image[0]}`}
                alt={data.name}
                width={350}
                height={350}
                className="products__image"
              />
              <div className="products__detail py-3">
                <Heading level={6} className="text-center">
                  {data.name}
                </Heading>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default Products;