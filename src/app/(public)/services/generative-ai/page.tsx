// app/services/generative-ai/page.tsx
import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function GenerativeAIPage() {
  return (
    <div className="mx-auto min-h-screen max-w-7xl bg-gray-50 px-6 py-16 lg:px-20">
      {/* Hero Section */}
      <section className="mb-16 text-center">
        <h1 className="mb-4 text-5xl font-bold text-gray-800 md:text-6xl">
          Generative AI Solutions
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-gray-600 md:text-xl">
          Harness the power of Generative AI to automate creativity, enhance productivity, and
          unlock new possibilities for your business with cutting-edge AI-driven systems.
        </p>
      </section>

      {/* Features / Services Section */}
      <section className="mb-16 grid grid-cols-1 gap-10 md:grid-cols-3">
        <div className="rounded-xl bg-white p-6 shadow-md transition hover:shadow-xl">
          <h3 className="mb-2 text-2xl font-semibold">Custom AI Models</h3>
          <p className="text-gray-600">
            We design, train, and deploy large language and diffusion models fine-tuned for your
            specific domain, ensuring performance and reliability.
          </p>
        </div>

        <div className="rounded-xl bg-white p-6 shadow-md transition hover:shadow-xl">
          <h3 className="mb-2 text-2xl font-semibold">AI-Powered Applications</h3>
          <p className="text-gray-600">
            Integrate generative capabilities ie: text, image, or audio into your products to create
            intelligent, context-aware user experiences.
          </p>
        </div>

        <div className="rounded-xl bg-white p-6 shadow-md transition hover:shadow-xl">
          <h3 className="mb-2 text-2xl font-semibold">Automation & Insights</h3>
          <p className="text-gray-600">
            Streamline workflows, summarize data, and generate insights using advanced AI automation
            tailored to your organization&apos;s needs.
          </p>
        </div>
      </section>

      {/* About Our Process */}
      <section className="mb-16 flex flex-col items-center gap-10 md:flex-row">
        <div className="md:w-1/2">
          <h2 className="mb-4 text-4xl font-bold text-gray-800">Our Generative AI Process</h2>
          <p className="mb-4 text-gray-600">
            We follow a strategic and research-driven approach to help you integrate AI effectively
            into your business:
          </p>
          <ul className="list-inside list-disc space-y-2 text-gray-600">
            <li>Problem Discovery & Feasibility Analysis</li>
            <li>Data Preparation & Model Selection</li>
            <li>Fine-Tuning & Evaluation</li>
            <li>API Integration & Deployment</li>
            <li>Continuous Monitoring & Improvement</li>
          </ul>
        </div>
        <div className="relative h-64 md:h-80 md:w-1/2">
          <Image
            src="/images/generative-ai.jpg"
            alt="Generative AI Illustration"
            fill
            className="object-contain"
            priority
          />
        </div>
      </section>

      {/* Call to Action */}
      <section className="rounded-xl bg-purple-600 py-16 text-center text-white">
        <h3 className="mb-4 text-3xl font-bold md:text-4xl">
          Transform your business with Generative AI
        </h3>
        <p className="mb-6 text-lg md:text-xl">
          Let&apos;s build intelligent systems that automate, innovate, and inspire using AI.
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
