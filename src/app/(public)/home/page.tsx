import CompanySection from "@/components/views/home/company-section";
import HeroSection from "@/components/views/home/hero-section";
import ServiceSection from "@/components/views/home/service-section";
import TestimonialSection from "@/components/views/home/testimonial-section";
import { metadataMap } from "@/lib/metadataMap";
import { Metadata } from "next";
import React from "react";

export default function HomePage() {
  return (
    <main className="mx-auto max-w-7xl">
      <HeroSection />
      <CompanySection />
      <ServiceSection />
      <TestimonialSection />
    </main>
  );
}


export async function generateMetadata({ pathname }: { pathname: string }): Promise<Metadata> {
  return (
    metadataMap[pathname] ?? {
      title: "Wissenschaft Inc",
      description: "Engineering Excellence",
    }
  );
}