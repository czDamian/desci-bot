import { Rubik } from "next/font/google";
import "./globals.css";

const rubik = Rubik({
  variable: "--font-rubik",
  subsets: ["latin"],
});

export const metadata = {
  title: "DeSci Bot",
  description:
    "an AI-powered assistant designed to engage with the BIO/ACC and DeSci (Decentralized Science) communities",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${rubik.variable} font-(family-name:--font-rubik) antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
