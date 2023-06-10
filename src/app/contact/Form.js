import { SectionButton } from "@/components/Components";
import { Heading } from "@/components/Typography";
import React from "react";

function Form() {
  return (
    <section className="contactform">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <Heading level={2} className={"text-center mb-3"}>
              Contact Us
            </Heading>
            <form>
              <div className="row">
                <div className="col-sm-6">
                  <div class="mb-3">
                    <label for="firstName" class="form-label">
                      First Name
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="firstName"
                      name="firstName"
                      placeholder="Your first name"
                    />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div class="mb-3">
                    <label for="lastName" class="form-label">
                      Last Name
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="lastName"
                      name="lastName"
                      placeholder="Your last name"
                    />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div class="mb-3">
                    <label for="email" class="form-label">
                      Email
                    </label>
                    <input
                      type="email"
                      class="form-control"
                      id="email"
                      name="email"
                      placeholder="Your email"
                    />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div class="mb-3">
                    <label for="phone" class="form-label">
                      Phone Number
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="phone"
                      name="phone"
                      placeholder="Your phone number"
                    />
                  </div>
                </div>
                <div className="col-sm-12">
                  <div class="mb-3">
                    <label for="message" class="form-label">
                      Message
                    </label>
                    <textarea
                      class="form-control"
                      id="message"
                      rows="3"
                      name="message"
                    ></textarea>
                  </div>
                </div>
                <div className="d-flex flex-row-reverse mb-4">
                  <SectionButton>Send Message</SectionButton>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Form;
