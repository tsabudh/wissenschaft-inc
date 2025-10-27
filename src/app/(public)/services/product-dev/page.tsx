// app/services/product-dev/page.tsx
import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function ProductDevPage() {
  return (
    <div className="min-h-screen bg-gray-50 px-6 py-16 lg:px-20 max-w-7xl mx-auto">
      {/* Hero Section */}
      <section className="mb-16 text-center">
        <h1 className="mb-4 text-5xl font-bold text-gray-800 md:text-6xl">
          Product Development Services
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-gray-600 md:text-xl">
          From idea to launch, we help you build innovative digital products that delight users
          and scale with your vision. Turn your concept into a market-ready solution.
        </p>
      </section>

      {/* Features / Services Section */}
      <section className="mb-16 grid grid-cols-1 gap-10 md:grid-cols-3">
        <div className="rounded-xl bg-white p-6 shadow-md transition hover:shadow-xl">
          <h3 className="mb-2 text-2xl font-semibold">Product Strategy</h3>
          <p className="text-gray-600">
            We collaborate with you to define goals, validate ideas, and design a roadmap that
            aligns technology with business impact.
          </p>
        </div>

        <div className="rounded-xl bg-white p-6 shadow-md transition hover:shadow-xl">
          <h3 className="mb-2 text-2xl font-semibold">MVP Development</h3>
          <p className="text-gray-600">
            Rapidly build, test, and launch a Minimum Viable Product to validate your market fit and
            gather user feedback before scaling.
          </p>
        </div>

        <div className="rounded-xl bg-white p-6 shadow-md transition hover:shadow-xl">
          <h3 className="mb-2 text-2xl font-semibold">Scalable Architecture</h3>
          <p className="text-gray-600">
            We design robust, maintainable, and scalable systems that evolve seamlessly as your user
            base and product demands grow.
          </p>
        </div>
      </section>

      {/* About Our Process */}
      <section className="mb-16 flex flex-col items-center gap-10 md:flex-row">
        <div className="md:w-1/2">
          <h2 className="mb-4 text-4xl font-bold text-gray-800">
            Our Product Development Process
          </h2>
          <p className="mb-4 text-gray-600">
            We combine agile development, modern tech stacks, and user-centered design to deliver
            meaningful digital products:
          </p>
          <ul className="list-inside list-disc space-y-2 text-gray-600">
            <li>Discovery & Product Strategy</li>
            <li>Wireframing & UX/UI Design</li>
            <li>Agile Development & Testing</li>
            <li>Launch & Market Validation</li>
            <li>Continuous Improvement & Scaling</li>
          </ul>
        </div>
        <div className="relative h-64 md:h-80 md:w-1/2">
          <Image
            src="/images/product-dev.jpg"
            alt="Product Development Illustration"
            fill
            className="object-contain"
            priority
          />
        </div>
      </section>

      {/* Call to Action */}
      <section className="rounded-xl bg-purple-600 py-16 text-center text-white">
        <h3 className="mb-4 text-3xl font-bold md:text-4xl">
          Let’s bring your product idea to life
        </h3>
        <p className="mb-6 text-lg md:text-xl">
          Partner with us to turn your vision into a successful, scalable digital product.
        </p>
        <Link
          href="/contact"
          className="inline-block rounded-lg bg-white px-8 py-3 font-semibold text-purple-600 shadow-lg transition hover:scale-105 hover:bg-gray-100"
        >
          Get Started
        </Link>
      </section>
    </div>
  );
}
