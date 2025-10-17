import CompanySection from "@/components/views/home/company-section";
import HeroSection from "@/components/views/home/hero-section";
import ServiceSection from "@/components/views/home/service-section";
import TestimonialSection from "@/components/views/home/testimonial-section";
import React from "react";

export default function Page() {
  return (
    <main>
      <HeroSection />
      <CompanySection />
      <ServiceSection />
      <TestimonialSection />
    </main>
  );
}
