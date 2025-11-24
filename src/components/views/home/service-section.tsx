import React from "react";
import ServiceCard from "@/components/ui/cards/card-b";

export default function ServiceSection() {
  return (
    <main className="px-6 lg:px-20">
      <section className="py-20">
        {/* Intro Section */}
        <h2 className="mb-10 text-5xl font-medium text-blue-400 dark:text-blue-800">What we do</h2>

        <div className="grid grid-cols-2 gap-10 max-lg:grid-cols-1">
          <ServiceCard
            title="Generative AI Solutions"
            description="We leverage large language models and generative AI tools to automate creativity, enhance productivity, and build intelligent, adaptive systems for your business."
            href="/services/generative-ai"
            imageUrl="/images/generative-ai.jpg"
          />

          <ServiceCard
            title="Product Development"
            description="From idea to launch, we help you build innovative digital products — combining strategy, design, and engineering to deliver scalable, user-focused solutions."
            href="/services/product-dev"
            imageUrl="/images/product-dev.jpg"
          />

          <ServiceCard
            title="Mobile App Development"
            description="We build intuitive, high-performing mobile apps that engage users and deliver smooth experiences across iOS and Android."
            href="/services/mobile-dev"
            imageUrl="/images/mobile-app.jpg"
          />

          <ServiceCard
            title="Website & Web App"
            description="Modern, responsive websites and web apps built to be fast, secure, and user-friendly, helping you grow your online presence."
            href="/services/web-dev"
            imageUrl="/images/web-dev.jpg"
          />
        </div>

        <div className="mt-20 flex justify-center">
          <a
            href="/services"
            className="rounded-md bg-blue-500 px-4 py-2 text-lg font-medium text-white transition-colors duration-300 hover:bg-blue-700 dark:bg-blue-700 dark:text-gray-400 dark:hover:bg-blue-800"
          >
            View All Services
          </a>
        </div>
      </section>
    </main>
  );
}
