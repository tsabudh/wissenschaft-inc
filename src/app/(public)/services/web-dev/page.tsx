import React from "react";
import Image from "next/image";

export default function WebDevPage() {
  return (
    <div className="min-h-screen bg-gray-50 px-6 py-16 lg:px-20 max-w-7xl mx-auto">
      {/* Hero Section */}
      <section className="mb-16 text-center">
        <h1 className="mb-4 text-5xl font-bold text-gray-800 md:text-6xl">
          Web Development Services
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-gray-600 md:text-xl">
          We build modern, responsive, and high-performance websites tailored to your business
          needs. From concept to deployment, our web solutions help you grow online.
        </p>
      </section>

      {/* Features / Services Section */}
      <section className="mb-16 grid grid-cols-1 gap-10 md:grid-cols-3">
        <div className="rounded-xl bg-white p-6 shadow-md transition hover:shadow-xl">
          <h3 className="mb-2 text-2xl font-semibold">Responsive Design</h3>
          <p className="text-gray-600">
            Websites that look great on every device, ensuring seamless user experience across
            desktops, tablets, and smartphones.
          </p>
        </div>

        <div className="rounded-xl bg-white p-6 shadow-md transition hover:shadow-xl">
          <h3 className="mb-2 text-2xl font-semibold">Fast & Scalable</h3>
          <p className="text-gray-600">
            Optimized for speed and built to scale, our solutions handle growth efficiently without
            compromising performance.
          </p>
        </div>

        <div className="rounded-xl bg-white p-6 shadow-md transition hover:shadow-xl">
          <h3 className="mb-2 text-2xl font-semibold">Modern Tech Stack</h3>
          <p className="text-gray-600">
            We use the latest technologies like React, Next.js, Node.js, and PostgreSQL to deliver
            robust and maintainable web applications.
          </p>
        </div>
      </section>

      {/* About Our Process */}
      <section className="mb-16 flex flex-col items-center gap-10 md:flex-row">
        <div className="md:w-1/2">
          <h2 className="mb-4 text-4xl font-bold text-gray-800">Our Development Process</h2>
          <p className="mb-4 text-gray-600">
            We follow a clear, step-by-step approach to deliver top-quality web solutions:
          </p>
          <ul className="list-inside list-disc space-y-2 text-gray-600">
            <li>Requirement Analysis & Planning</li>
            <li>UI/UX Design & Prototyping</li>
            <li>Frontend & Backend Development</li>
            <li>Testing, Deployment & Optimization</li>
            <li>Ongoing Support & Maintenance</li>
          </ul>
        </div>
        <div className="relative h-64 md:h-80 md:w-1/2">
          <Image
            src="/images/web-dev.jpg"
            alt="Web Development Illustration"
            fill
            className="object-contain"
          />
        </div>
      </section>

      {/* Call to Action */}
      <section className="rounded-xl bg-purple-600 py-16 text-center text-white">
        <h3 className="mb-4 text-3xl font-bold md:text-4xl">Ready to build your website?</h3>
        <p className="mb-6 text-lg md:text-xl">
          Let’s create a web presence that drives growth and engagement for your business.
        </p>
        <a
          href="/contact"
          className="rounded-lg bg-white px-8 py-3 font-semibold text-purple-600 shadow-lg transition hover:scale-105 hover:bg-gray-100"
        >
          Get Started
        </a>
      </section>
    </div>
  );
}
