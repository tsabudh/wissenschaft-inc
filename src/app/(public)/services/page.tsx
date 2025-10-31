"use client";

import React from "react";
import IconBrand from "@/components/ui/icons/brand-logo";
import ServiceCard from "@/components/ui/cards/card-a";
import Link from "next/link";

export default function ServiceSection() {
  return (
    <main className="mx-auto min-h-screen max-w-7xl bg-gray-50 px-6 py-16 lg:px-20">
      <section className="py-20">
        {/* Intro Section */}
        <h2 className="mb-10 text-5xl font-medium text-blue-400">Our services</h2>

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
      </section>

      <section className="rounded-xl bg-emerald-600 py-16 text-center text-white">
        <h3 className="mb-4 text-3xl font-bold md:text-4xl">
          Can&apos;t find what you are looking for?
        </h3>
        <p className="mb-6 text-lg md:text-xl">
          Contact us for solutions tailored to your specific needs.
        </p>
        <Link
          href="/contact"
          className="inline-block rounded-lg bg-white px-8 py-3 font-semibold text-purple-600 shadow-lg transition hover:scale-105 hover:bg-gray-100"
        >
          Get Started
        </Link>
      </section>
    </main>
  );
}
