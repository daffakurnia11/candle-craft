import { Heading, Paragraph } from "@/components/Typography";
import React from "react";
import ListProduct from "./ListProduct";
import Image from "next/image";
import { SmallButton } from "@/components/Components";
import Link from "next/link";

function Product() {
  return (
    <section className="product">
      <div className="container">
        <Heading level={2} className={"mb-5 text-center"}>
          Our Collections
        </Heading>
        <div className="row">
          {ListProduct.map((data, index) => (
            <div className="col-sm-6 col-md-4 col-lg-3" key={index}>
              <Image
                src={`/product/${data.image[0]}`}
                width={450}
                height={450}
                alt={`${data.name} Product Image`}
                className="product__image"
              />
              <Paragraph level={1} className={"text-center mt-3 mb-2"}>
                {data.name}
              </Paragraph>
              <div className="d-flex justify-content-center mb-4">
                <Link href={`/collection/${data.slug}`}>
                  <SmallButton classname={"mx-auto"}>View More</SmallButton>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Product;
