import React from "react";
import ValuesOne from "../../public/icon/fast-production-cycle.png";
import ValuesTwo from "../../public/icon/trustworthy-transaction.png";
import ValuesThree from "../../public/icon/premium-quality.png";
import ValuesFour from "../../public/icon/exceptional-service.png";
import Image from "next/image";

function HomeValues() {
  return (
    <section className="values">
      <div className="container">
        <h2 className="values__title text-center mb-5">Our Values</h2>
        <div className="row">
          {/* First Value */}
          <div className="col-md-6 col-lg-3">
            <div className="values__icon-container d-flex justify-content-center align-items-center">
              <Image
                src={ValuesOne}
                alt="Values Icon"
                className="values__icon"
              />
            </div>
            <h5 className="values__value text-center mt-3 mb-2">
              Fast Production Cycle
            </h5>
            <p className="values__desc text-center">
              Experience efficient supply chain operations that guarantee quick
              product delivery.
            </p>
          </div>

          {/* Second Value */}
          <div className="col-md-6 col-lg-3">
            <div className="values__icon-container d-flex justify-content-center align-items-center">
              <Image
                src={ValuesTwo}
                alt="Values Icon"
                className="values__icon"
              />
            </div>
            <h5 className="values__value text-center mt-3 mb-2">
              Trustworthy Transactions
            </h5>
            <p className="values__desc text-center">
              We uphold transparency and honesty, ensuring a secure shopping
              experience.
            </p>
          </div>

          {/* Third Value */}
          <div className="col-md-6 col-lg-3">
            <div className="values__icon-container d-flex justify-content-center align-items-center">
              <Image
                src={ValuesThree}
                alt="Values Icon"
                className="values__icon"
              />
            </div>
            <h5 className="values__value text-center mt-3 mb-2">
              Premium Quality
            </h5>
            <p className="values__desc text-center">
              Our candles, crafted from fine ingredients, offer a luxurious
              aromatic experience.
            </p>
          </div>

          {/* Fourth Value */}
          <div className="col-md-6 col-lg-3">
            <div className="values__icon-container d-flex justify-content-center align-items-center">
              <Image
                src={ValuesFour}
                alt="Values Icon"
                className="values__icon"
              />
            </div>
            <h5 className="values__value text-center mt-3 mb-2">
              Exceptional Service
            </h5>
            <p className="values__desc text-center">
              Committed to customer satisfaction, we aim to exceed expectations
              with prompt and responsive service.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeValues;
