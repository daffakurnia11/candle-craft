// "use client";
import React from "react";
import ListProduct, { getProductBySlug } from "@/data/ListProduct";

import Header from "./Header";
import Breadcrumb from "./Breadcrumb";
import ProductDetail from "./ProductDetail";
import ProductMore from "./ProductMore";

export async function generateStaticParams() {
  const product = ListProduct;

  return product.map((product) => ({
    slug: product.slug,
  }));
}

export function generateMetadata({ params }) {
  // read route params
  const slug = params.slug;
  console.log(slug);

  // fetch data
  const product = getProductBySlug(slug);

  return {
    title: `CandleCraft - ${product.name}`,
    description: product.description,
  };
}
export default function Page({ params }) {
  const slug = params.slug;
  const product = getProductBySlug(slug);

  return (
    <>
      <Header />
      <Breadcrumb product={product} />
      <ProductDetail product={product} />
      <ProductMore slug={slug} />
    </>
  );
}
