import { Heading, Paragraph } from "@/components/Typography";
import React from "react";
import { getFilteredProducts } from "../ListProduct";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";
import Link from "next/link";
import { SmallButton } from "@/components/Components";

function ProductMore({ slug }) {
  const products = getFilteredProducts(slug);

  return (
    <section className="product-more">
      <div className="container">
        <Heading level={3} className={"mb-4"}>
          Recommendation
        </Heading>
        <Swiper spaceBetween={20} slidesPerView={"auto"}>
          {products.map((product, index) => (
            <SwiperSlide key={index}>
              <Image
                src={require(`../../../../public/product/${product.image[0]}`)}
                alt={`${product.name} Image`}
                className="product-more__image"
              />
              <Paragraph level={1} className={"text-center my-2"}>
                {product.name}
              </Paragraph>
              <div className="d-flex justify-content-center mb-4">
                <Link href={`/collection/${product.slug}`}>
                  <SmallButton classname={"mx-auto"}>View More</SmallButton>
                </Link>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default ProductMore;
