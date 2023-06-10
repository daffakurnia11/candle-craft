import { Heading, Paragraph } from "@/components/Typography";
import React from "react";

function Location() {
  return (
    <section className="location">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-5">
            <Heading level={2}>Find Us</Heading>
            <Paragraph level={1}>
              Perum. Gading Fajar 1 B6/21 RT19 RW05 Desa Siwalan Panji
              <br />
              Buduran, Sidoarjo, East Java - 61252
              <br />
              Indonesia
            </Paragraph>
            <Paragraph level={1}>
              Phone : +62 8515631 7473
              <br />
              Email : daffakurniaf11@gmail.com
            </Paragraph>
          </div>
          <div className="col-md-7">
            <iframe
              title="Google Map"
              height="350"
              loading="lazy"
              allowFullScreen
              referrerpolicy="no-referrer-when-downgrade"
              style={{ border: 0, width: "100%", borderRadius: 24 }}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d989.078833303327!2d112.72482862838837!3d-7.430314669690536!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7e6a9ae036dff%3A0x818813d8801ac86!2sJl.%20Utama%20Gading%20Fajar%201%2C%20Siwalan%20Panji%2C%20Siwalanpanji%2C%20Kec.%20Buduran%2C%20Kabupaten%20Sidoarjo%2C%20Jawa%20Timur%2061252!5e0!3m2!1sen!2sid!4v1686434854541!5m2!1sen!2sid"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Location;
