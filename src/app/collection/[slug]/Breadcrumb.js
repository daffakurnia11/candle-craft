import Link from "next/link";
import React from "react";

function Breadcrumb({ product }) {
  return (
    <section className="product-breadcrumb">
      <div className="container">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link className="product-breadcrumb__link" href="/">
                Home
              </Link>
            </li>
            <li className="breadcrumb-item">
              <Link className="product-breadcrumb__link" href="/collection">
                Collection
              </Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              {product.name}
            </li>
          </ol>
        </nav>
      </div>
    </section>
  );
}

export default Breadcrumb;
