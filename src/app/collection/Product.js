"use client";
import { Heading, Paragraph } from "@/components/Typography";
import React, { useEffect, useState } from "react";
import listProduct, { listCategory, listVariant } from "@/data/product";
import Image from "next/image";
import { SmallButton } from "@/components/Components";
import Link from "next/link";

function Product() {
  const [products, setProducts] = useState([]);
  const [categoryFilter, setCategoryFilter] = useState(null);
  const [variantFilter, setVariantFilter] = useState(null);

  const getFilteredProduct = (list, category = null, variant = null) => {
    if (category) {
      list = list.filter((item) => item.category === category);
    }
    if (variant) {
      list = list.filter((item) => item.variant === variant);
    }
    return list;
  };

  const searchCategory = (val) => {
    const value = val.target.value !== "All" ? val.target.value : null;
    setCategoryFilter(value);
    setProducts(getFilteredProduct(listProduct, value, variantFilter));
  };

  const searchVariant = (val) => {
    const value = val.target.value !== "All" ? val.target.value : null;
    setVariantFilter(value);
    setProducts(getFilteredProduct(listProduct, categoryFilter, value));
  };

  useEffect(() => {
    setProducts(listProduct);
  }, []);

  return (
    <section className="product">
      <div className="container">
        <Heading level={2} className={"mb-5 text-center"}>
          Our Collections
        </Heading>
        <div className="d-flex flex-column flex-lg-row align-items-lg-center mb-4">
          <Paragraph level={1} className={"mb-0 me-2"}>
            Category
          </Paragraph>
          <select
            className="form-select me-4"
            style={{ width: "fit-content" }}
            onChange={searchCategory}
            defaultValue={"All"}
          >
            <option>All</option>
            {listCategory.map((data, index) => (
              <option key={index} value={data}>
                {data}
              </option>
            ))}
          </select>
          <Paragraph level={1} className={"mb-0 me-2 mt-2 mt-lg-0"}>
            Variant
          </Paragraph>
          <select
            className="form-select"
            style={{ width: "fit-content" }}
            onChange={searchVariant}
            defaultValue={"All"}
          >
            <option>All</option>
            {listVariant.map((data, index) => (
              <option key={index} value={data}>
                {data}
              </option>
            ))}
          </select>
        </div>
        <div className="row">
          {products.length > 0 ? (
            products.map((data, index) => (
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
            ))
          ) : (
            <Heading level={6} className={"text-center my-5"}>
              No product available
            </Heading>
          )}
        </div>
      </div>
    </section>
  );
}

export default Product;
