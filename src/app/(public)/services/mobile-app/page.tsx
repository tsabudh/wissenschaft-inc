// app/services/mobile-app/page.tsx
import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function MobileAppPage() {
  return (
    <div className="min-h-screen bg-gray-50 px-6 py-16 lg:px-12">
      <div className="mx-auto max-w-7xl">
        {/* Hero Section */}
        <section className="mb-16 text-center">
          <h1 className="mb-4 text-5xl font-bold text-gray-800 md:text-6xl">
            Mobile App Development
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-gray-600 md:text-xl">
            We design and build powerful mobile applications that deliver seamless performance,
            engaging UI, and a world-class user experience across iOS and Android devices.
          </p>
        </section>

        {/* Key Services */}
        <section className="mb-16 grid grid-cols-1 gap-10 md:grid-cols-3">
          <div className="rounded-xl bg-white p-6 shadow-md transition hover:shadow-xl">
            <h3 className="mb-2 text-2xl font-semibold">Cross-Platform Apps</h3>
            <p className="text-gray-600">
              Build once, deploy everywhere. We use React Native and Flutter to deliver high-quality
              apps for both iOS and Android efficiently.
            </p>
          </div>

          <div className="rounded-xl bg-white p-6 shadow-md transition hover:shadow-xl">
            <h3 className="mb-2 text-2xl font-semibold">User-Centered Design</h3>
            <p className="text-gray-600">
              Beautiful interfaces that are easy to use. Every screen is crafted with your audience
              and brand identity in mind.
            </p>
          </div>

          <div className="rounded-xl bg-white p-6 shadow-md transition hover:shadow-xl">
            <h3 className="mb-2 text-2xl font-semibold">High Performance</h3>
            <p className="text-gray-600">
              Optimized for speed, security, and reliability. We ensure your app feels native and
              runs smoothly across all devices.
            </p>
          </div>
        </section>

        {/* Process Section */}
        <section className="mb-16 flex flex-col items-center gap-10 md:flex-row">
          <div className="md:w-1/2">
            <h2 className="mb-4 text-4xl font-bold text-gray-800">Our App Development Process</h2>
            <p className="mb-4 text-gray-600">
              From ideation to launch, our process ensures every detail aligns with your vision:
            </p>
            <ul className="list-inside list-disc space-y-2 text-gray-600">
              <li>Concept & Strategy</li>
              <li>UI/UX Wireframes & Design</li>
              <li>Agile App Development</li>
              <li>Testing & Performance Optimization</li>
              <li>Launch & Post-Deployment Support</li>
            </ul>
          </div>
          <div className="relative h-64 md:h-80 md:w-1/2">
            <Image
              src="/images/mobile-app.jpg"
              alt="Mobile App Development Illustration"
              fill
              className="object-contain"
            />
          </div>
        </section>

        {/* Call to Action */}
        <section className="rounded-xl bg-blue-600 py-16 text-center text-white">
          <h3 className="mb-4 text-3xl font-bold md:text-4xl">Let’s Build Your Mobile App</h3>
          <p className="mx-auto mb-6 max-w-2xl text-lg md:text-xl">
            Turn your ideas into mobile experiences that users love. We’ll help you go from concept
            to app store.
          </p>
          <Link
            href="/contact"
            className="rounded-lg bg-white px-8 py-3 font-semibold text-blue-600 shadow-lg transition hover:scale-105 hover:bg-gray-100"
          >
            Get in Touch
          </Link>
        </section>
      </div>
    </div>
  );
}
