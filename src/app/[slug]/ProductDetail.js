"use client";
import { SectionButton } from "@/components/Components";
import { Heading, Paragraph } from "@/components/Typography";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

function ProductDetail({ product }) {
  const [activeImage, setActiveImage] = useState(0);

  const handleImageClick = (index) => {
    setActiveImage(index);
  };

  return (
    <section className="product-detail pb-5">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-lg-4 mb-4">
            <Image
              src={`/product/${product.slug}/${product.image[activeImage]}`}
              width={450}
              height={450}
              alt={`${product.name} Image`}
              className="product-detail__image-show"
            />
            <Swiper spaceBetween={8} slidesPerView={"auto"} className="mt-2">
              {product.image.map((image, index) => (
                <SwiperSlide key={index}>
                  <Image
                    src={`/product/${product.slug}/${image}`}
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
            <Paragraph level={1} className={"m-0"}>
              {product.category}
            </Paragraph>
            <Heading level={4} className={"m-0"}>
              {product.name}
            </Heading>
            <Heading
              level={6}
              className={"mt-4"}
              style={{ fontWeight: "bold" }}
            >
              Description
            </Heading>
            <Paragraph className={"mt-2"} level={1}>
              {product.description}
            </Paragraph>
            <div className="row gx-2 mt-2">
              <div className="col-3 col-md-4 col-lg-2">
                <div className="d-flex justify-content-between">
                  <Paragraph
                    level={1}
                    style={{ fontWeight: "bold" }}
                    className={"mb-0"}
                  >
                    Materials
                  </Paragraph>
                  <Paragraph
                    level={1}
                    style={{ fontWeight: "bold" }}
                    className={"mb-0"}
                  >
                    :
                  </Paragraph>
                </div>
              </div>
              <div className="col-9 col-md-8 col-lg-10">
                {product.material.map((variant, key) => (
                  <Paragraph key={key} level={1} className="mb-0">
                    {variant}
                  </Paragraph>
                ))}
              </div>
            </div>
            {product.variant.length > 0 && (
              <div className="row gx-2 mt-2">
                <div className="col-3 col-md-4 col-lg-2">
                  <div className="d-flex justify-content-between">
                    <Paragraph
                      level={1}
                      style={{ fontWeight: "bold" }}
                      className={"mb-0"}
                    >
                      Variant
                    </Paragraph>
                    <Paragraph
                      level={1}
                      style={{ fontWeight: "bold" }}
                      className={"mb-0"}
                    >
                      :
                    </Paragraph>
                  </div>
                </div>
                <div className="col-9 col-md-8 col-lg-10">
                  {product.variant.map((variant, key) => (
                    <Paragraph key={key} level={1} className="mb-0">
                      {variant}
                    </Paragraph>
                  ))}
                </div>
              </div>
            )}

            <div className="row gx-2 mt-2">
              <div className="col-3 col-md-4 col-lg-2">
                <div className="d-flex justify-content-between">
                  <Paragraph
                    level={1}
                    style={{ fontWeight: "bold" }}
                    className={"mb-0"}
                  >
                    Dimension
                  </Paragraph>
                  <Paragraph
                    level={1}
                    style={{ fontWeight: "bold" }}
                    className={"mb-0"}
                  >
                    :
                  </Paragraph>
                </div>
              </div>
              <div className="col-9 col-md-8 col-lg-10">
                <Paragraph level={1} className="mb-0">
                  {product.dimension.length} mm <em>(length)</em>
                </Paragraph>
                <Paragraph level={1} className="mb-0">
                  {product.dimension.width} mm <em>(width)</em>
                </Paragraph>
                <Paragraph level={1} className="mb-0">
                  {product.dimension.height} mm <em>(height/depth)</em>
                </Paragraph>
              </div>
            </div>
            <div className="row gx-2 mt-2">
              <div className="col-3 col-md-4 col-lg-2">
                <div className="d-flex justify-content-between">
                  <Paragraph
                    level={1}
                    style={{ fontWeight: "bold" }}
                    className={"mb-0"}
                  >
                    Weight
                  </Paragraph>
                  <Paragraph
                    level={1}
                    style={{ fontWeight: "bold" }}
                    className={"mb-0"}
                  >
                    :
                  </Paragraph>
                </div>
              </div>
              <div className="col-9 col-md-8 col-lg-10">
                <Paragraph level={1} className="mb-0">
                  {product.weight} gr
                </Paragraph>
              </div>
            </div>
            <Link href="https://wa.me/6285156317474" target="_blank">
              <SectionButton className="pe-4 mt-3 d-flex align-items-center">
                Get Orders{" "}
                <Image
                  src={"/icon/whatsapp-icon.svg"}
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
