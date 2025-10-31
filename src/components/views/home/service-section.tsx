import React from "react";
import IconBrand from "@/components/ui/icons/brand-logo";
import ServiceCard from "@/components/ui/cards/card-a";

export default function ServiceSection() {
  return (
    <main className="px-10">
      <section className="py-20">
        {/* Intro Section */}
        <h2 className="mb-10 text-5xl font-medium text-blue-400">What we do</h2>

        <div className="grid grid-cols-2 gap-10 max-lg:grid-cols-1">
          <ServiceCard
            title="Generative AI Solutions"
            description="We leverage large language models and generative AI tools to automate creativity, enhance productivity, and build intelligent, adaptive systems for your business."
            href="/services/generative-ai"
            icon={<IconBrand />}
          />

          <ServiceCard
            title="Product Development"
            description="From idea to launch, we help you build innovative digital products — combining strategy, design, and engineering to deliver scalable, user-focused solutions."
            href="/services/product-dev"
            icon={<IconBrand />}
          />

          <ServiceCard
            title="Mobile App Development"
            description="We build intuitive, high-performing mobile apps that engage users and deliver smooth experiences across iOS and Android."
            href="/services/mobile-dev"
            icon={<IconBrand />}
          />

          <ServiceCard
            title="Website & Web App"
            description="Modern, responsive websites and web apps built to be fast, secure, and user-friendly, helping you grow your online presence."
            href="/services/web-dev"
            icon={<IconBrand />}
          />
        </div>

        <div className="mt-20 flex justify-center">
          <a
            href="/services"
            className="rounded-lg bg-blue-400 px-6 py-3 text-xl font-medium text-white transition-colors duration-300 hover:bg-blue-500"
          >
            View All Services
          </a>
        </div>
      </section>
    </main>
  );
}
