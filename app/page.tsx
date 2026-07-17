import * as React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import LiveStats from "@/components/LiveStats";
import BloodCompatibility from "@/components/BloodCompatibility";
import UrgentRequests from "@/components/UrgentRequests";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <HowItWorks />
        <LiveStats />
        <BloodCompatibility />
        <UrgentRequests />
        <Testimonials />
        <FAQ />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}
