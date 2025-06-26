import { Rubik } from "next/font/google";
import "./globals.css";

const rubik = Rubik({
  variable: "--font-rubik",
  subsets: ["latin"],
});

export const metadata = {
  title: "DeSci AI",
  description:
    "an AI-powered assistant designed to accelerate knowledge sharing and community engagement within the Biological Accelerationism (BIO/ACC) and Decentralized Science (DeSci) ecosystems",
  authors: [{ name: 'Damian', url: 'https://x.com/buzorDamian' }],
  robots: 'index, follow',
  openGraph: {
    title: "DeSci AI",
    description:
      "an AI-powered assistant designed to accelerate knowledge sharing and community engagement within the Biological Accelerationism (BIO/ACC) and Decentralized Science (DeSci) ecosystems",
    url: "https://desciai.app",
    siteName: "DeSci AI",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: 'summary_large_image',
    title: "DeSci AI",
    description:
      "an AI-powered assistant designed to accelerate knowledge sharing and community engagement within the Biological Accelerationism (BIO/ACC) and Decentralized Science (DeSci) ecosystems",
  },
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
