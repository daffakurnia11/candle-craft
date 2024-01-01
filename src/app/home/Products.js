"use client";
import React from "react";
import { Heading, Paragraph } from "@/components/Typography";
import { FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import Image from "next/image";
import listProduct from "@/data/product";
import Link from "next/link";
import { SmallButton } from "@/components/Components";

function Products() {
  const swiperRef = React.useRef();

  return (
    <section id="products" className="products">
      <div className="container position-relative">
        <Heading level={2} className={"text-center mb-4"}>
          Products
        </Heading>
        <div className="products__swiper">
          <Swiper
            onBeforeInit={(swiper) => {
              swiperRef.current = swiper;
            }}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
          >
            {listProduct.map((data, key) => (
              <SwiperSlide key={key}>
                <div className="products__container d-flex flex-lg-row flex-column justify-content-center align-items-center gap-4">
                  <div className="products__image">
                    <Image
                      src={`/product/${data.slug}/${data.image[0]}`}
                      alt={data.name}
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{ width: "100%", height: "auto" }}
                    />
                  </div>
                  <div className="products__detail flex-grow-1">
                    <Heading level={4} className="mb-3">
                      {data.name}
                    </Heading>
                    <Paragraph level={1}>{data.description}</Paragraph>
                    <div className="d-flex flex-column flex-sm-row gap-3 mt-4">
                      <Link href={`/${data.slug}`}>
                        <SmallButton className="w-100 w-sm-fit">
                          See Details
                        </SmallButton>
                      </Link>
                      <Link href={`https://wa.me/6285156317473`}>
                        <SmallButton className="d-flex justify-content-center align-items-center w-100 w-sm-fit">
                          Get Orders{" "}
                          <Image
                            src={"/icon/whatsapp-icon.svg"}
                            width={24}
                            alt="Whatsapp Icon"
                            height={24}
                            className="ms-2"
                          />
                        </SmallButton>
                      </Link>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div
          className="position-absolute z-3 top-50 end-0 translate-middle-y"
          onClick={() => swiperRef.current?.slideNext()}
          style={{ cursor: "pointer" }}
        >
          <div className="d-sm-block d-none">
            <FiArrowRightCircle size={48} />
          </div>
          <div className="d-block d-sm-none me-3">
            <FiArrowRightCircle size={32} />
          </div>
        </div>
        <div
          className="position-absolute z-3 top-50 start-0 translate-middle-y"
          onClick={() => swiperRef.current?.slidePrev()}
          style={{ cursor: "pointer" }}
        >
          <div className="d-sm-block d-none">
            <FiArrowLeftCircle size={48} />
          </div>
          <div className="d-block d-sm-none ms-3">
            <FiArrowLeftCircle size={32} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Products;
