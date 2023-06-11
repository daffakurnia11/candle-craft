"use client";
import React from "react";
import { usePathname } from "next/navigation";
import { getProductBySlug } from "../ListProduct";

import Header from "./Header";
import Breadcrumb from "./Breadcrumb";
import ProductDetail from "./ProductDetail";
import ProductMore from "./ProductMore";

export default function Page() {
  const pathname = usePathname();
  const slug = pathname.split("/")[2];
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
