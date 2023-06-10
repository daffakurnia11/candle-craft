import { Roboto } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/main.scss";

const robotoFont = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={robotoFont.className}>{children}</body>
    </html>
  );
}
