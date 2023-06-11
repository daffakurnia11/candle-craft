import { Heading } from "@/components/Typography";
import React from "react";

function Header() {
  return (
    <section className="product-header">
      <div className="container">
        <Heading
          level={1}
          className={`m-0 product-header__title my-3 my-lg-0 text-center`}
        >
          Our Collections
        </Heading>
      </div>
    </section>
  );
}

export default Header;
