"use client";
import { useEffect } from "react";

import "bootstrap/dist/css/bootstrap.min.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "../styles/main.scss";

import Navigation from "@/app/layout/Navigation";
import Footer from "@/app/layout/Footer";

export default function RootLayout({ children }) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []);

  return (
    <html lang="en">
      <body>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
