"use client";
import { Heading, Paragraph } from "@/components/Typography";
import React from "react";
import { getOtherVariant } from "@/data/product";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";
import Link from "next/link";
import { SmallButton } from "@/components/Components";

function ProductRelated({ category, slug }) {
  const products = getOtherVariant(category, slug);

  return (
    <section className="product-more">
      <div className="container">
        <Heading level={4} className={"mb-4"}>
          Related Product
        </Heading>
        <Swiper spaceBetween={20} slidesPerView={"auto"}>
          {products.map((product, index) => (
            <SwiperSlide key={index}>
              <Link href={`/collection/${product.slug}`}>
                <div className="position-relative">
                  <Image
                    src={`/product/${product.image[0]}`}
                    width={450}
                    height={450}
                    alt={`${product.name} Product Image`}
                    className="product-more__image"
                  />
                  <Paragraph level={2} className={"product-more__price-save"}>
                    Save {product.save}%
                  </Paragraph>
                </div>
                <Paragraph
                  level={1}
                  className={"text-center mt-3 mb-2 product-more__name"}
                >
                  {product.name}
                </Paragraph>
              </Link>
              <div className="d-flex justify-content-center align-items-start">
                <Paragraph
                  level={1}
                  className={
                    "text-decoration-line-through me-2 product-more__price"
                  }
                >
                  ${product.price}
                </Paragraph>
                <Heading level={6} className={"text-center"}>
                  ${product.price_off}
                </Heading>
              </div>
              {/* <div className="d-flex justify-content-center mb-4">
                <Link href={`/collection/${product.slug}`}>
                  <SmallButton classname={"mx-auto"}>View More</SmallButton>
                </Link>
              </div> */}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default ProductRelated;
