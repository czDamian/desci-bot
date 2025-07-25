"use client";

import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Features from "./components/Features";
import HowItWorks from "./components/HowItWorks";
import FAQ from "./components/FAQ";
import Community from "./components/Community";
import WhatIsSection from "./components/WhatIsSection";
import Header from "./components/Header";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white">
      <Header />
      <Hero />
      <WhatIsSection />
      <Features />
      <HowItWorks />
      <Community />
      <FAQ />
      <Footer />
    </div>
  );
}
