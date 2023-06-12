"use client";
import { SectionButton, SmallButton } from "@/components/Components";
import StarRating from "@/components/StarRating";
import { Heading, Paragraph } from "@/components/Typography";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import WhatsappIcon from "../../../../public/icon/whatsapp-icon.svg";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

function ProductDetail({ product }) {
  const [activeImage, setActiveImage] = useState(0);

  const handleImageClick = (index) => {
    setActiveImage(index);
  };

  return (
    <section className="product-detail">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-lg-4 mb-4">
            <Image
              src={`/product/${product.image[activeImage]}`}
              width={450}
              height={450}
              alt={`${product.name} Image`}
              className="product-detail__image-show"
            />
            <Swiper spaceBetween={8} slidesPerView={"auto"} className="mt-2">
              {product.image.map((image, index) => (
                <SwiperSlide key={index}>
                  <Image
                    src={`/product/${image}`}
                    width={450}
                    height={450}
                    alt={`${image} file`}
                    className={`product-detail__image-list ${
                      activeImage === index ? "active" : null
                    }`}
                    onClick={() => handleImageClick(index)}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="col-md-6 col-lg-8">
            <Heading level={6} className={"m-0"}>
              {product.category}
            </Heading>
            <Heading level={4} className={"m-0"}>
              {product.name}
            </Heading>
            <StarRating rating={product.star} />
            <Heading level={6} className={"mt-4"}>
              Variant
            </Heading>
            {product.variant.map((data, index) => (
              <SmallButton classname={"me-2 mb-2"} key={index}>
                {data}
              </SmallButton>
            ))}
            <Heading level={6} className={"mt-4"}>
              Description
            </Heading>
            <Paragraph className={"mt-2"} level={1}>
              {product.description}
            </Paragraph>
            <Link href="https://wa.me/6285156317474" target="_blank">
              <SectionButton className="pe-4 d-flex align-items-center">
                Get Orders{" "}
                <Image
                  src={WhatsappIcon}
                  width={24}
                  height={24}
                  alt="Whatsapp Icon"
                  className="ms-2"
                />
              </SectionButton>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductDetail;
