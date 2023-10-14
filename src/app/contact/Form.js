"use client";
import { Heading } from "@/components/Typography";
import React, { useState } from "react";
// import usePostData from "@/services/usePostData";

function Form() {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });
  // const post = usePostData();

  const sendMessage = async () => {
    console.log(data);
    const path = "contact";
    const value = data;

    // await post.postData(path, value);
  };

  return (
    <section className="contactform">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <Heading level={2} className={"text-center mb-3"}>
              Contact Us
            </Heading>
            <div className="row">
              <div className="col-sm-6 col-md-12 col-lg-6">
                <div class="mb-3">
                  <label htmlFor="firstName" class="form-label">
                    First Name
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="firstName"
                    name="firstName"
                    placeholder="Your first name"
                    onChange={(e) =>
                      setData({ ...data, firstName: e.target.value })
                    }
                  />
                </div>
              </div>
              <div className="col-sm-6 col-md-12 col-lg-6">
                <div class="mb-3">
                  <label htmlFor="lastName" class="form-label">
                    Last Name
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="lastName"
                    name="lastName"
                    placeholder="Your last name"
                    onChange={(e) =>
                      setData({ ...data, lastName: e.target.value })
                    }
                  />
                </div>
              </div>
              <div className="col-sm-6 col-md-12 col-lg-6">
                <div class="mb-3">
                  <label htmlFor="email" class="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    class="form-control"
                    id="email"
                    name="email"
                    placeholder="Your email"
                    onChange={(e) =>
                      setData({ ...data, email: e.target.value })
                    }
                  />
                </div>
              </div>
              <div className="col-sm-6 col-md-12 col-lg-6">
                <div class="mb-3">
                  <label htmlFor="phone" class="form-label">
                    Phone Number
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="phone"
                    name="phone"
                    placeholder="Your phone number"
                    onChange={(e) =>
                      setData({ ...data, phone: e.target.value })
                    }
                  />
                </div>
              </div>
              <div className="col-sm-12">
                <div class="mb-3">
                  <label htmlFor="message" class="form-label">
                    Message
                  </label>
                  <textarea
                    class="form-control"
                    id="message"
                    rows="3"
                    name="message"
                    onChange={(e) =>
                      setData({ ...data, message: e.target.value })
                    }
                  ></textarea>
                </div>
              </div>
              <div className="d-flex flex-row-reverse mb-4">
                <button className={`button__white`} onClick={sendMessage}>
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Form;
