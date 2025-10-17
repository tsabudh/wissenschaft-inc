// app/approach/agile/page.tsx
import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function AgileApproachPage() {
  return (
    <div className="mx-auto min-h-screen max-w-7xl bg-gray-50 px-6 py-16 lg:px-12">
      <div className="mx-auto max-w-7xl">
        {/* Hero Section */}
        <section className="mb-20 text-center">
          <h1 className="mb-4 text-5xl font-bold text-gray-800 md:text-6xl">
            How We Work — Our Agile Approach
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-gray-600 md:text-xl">
            We believe in building great software through collaboration, transparency, and
            continuous improvement. Our agile workflow keeps projects flexible, efficient, and
            aligned with your vision.
          </p>
        </section>

        {/* Core Principles */}
        <section className="mb-20 grid grid-cols-1 gap-10 md:grid-cols-3">
          <div className="rounded-xl bg-white p-6 shadow-md transition hover:shadow-xl">
            <h3 className="mb-2 text-2xl font-semibold">Iterative Progress</h3>
            <p className="text-gray-600">
              We break large goals into smaller deliverables, releasing value early and refining
              with each sprint to ensure continuous progress.
            </p>
          </div>

          <div className="rounded-xl bg-white p-6 shadow-md transition hover:shadow-xl">
            <h3 className="mb-2 text-2xl font-semibold">Collaboration First</h3>
            <p className="text-gray-600">
              Open communication with clients and teams drives better decisions, faster iterations,
              and more meaningful outcomes.
            </p>
          </div>

          <div className="rounded-xl bg-white p-6 shadow-md transition hover:shadow-xl">
            <h3 className="mb-2 text-2xl font-semibold">Transparency &amp; Feedback</h3>
            <p className="text-gray-600">
              Regular reviews, standups, and sprint demos keep you informed and involved at every
              stage of development.
            </p>
          </div>
        </section>

        {/* Agile Workflow Visualization */}
        <section className="mb-20 flex flex-col items-center gap-10 md:flex-row">
          <div className="md:w-1/2">
            <h2 className="mb-4 text-4xl font-bold text-gray-800">Our Agile Workflow</h2>
            <p className="mb-4 text-gray-600">
              Our agile process is adaptive and designed for speed, flexibility, and quality.
              Here&apos;s how we deliver efficiently while staying aligned with your goals:
            </p>
            <ol className="list-inside list-decimal space-y-2 text-gray-600">
              <li>
                <strong>Discovery &amp; Planning:</strong> Understanding your needs and defining
                clear goals.
              </li>
              <li>
                <strong>Sprint Planning:</strong> Breaking work into manageable stories and
                prioritizing features.
              </li>
              <li>
                <strong>Design &amp; Development:</strong> Building in short cycles for quick
                feedback and delivery.
              </li>
              <li>
                <strong>Testing &amp; Review:</strong> Ensuring quality and functionality through
                continuous QA.
              </li>
              <li>
                <strong>Launch &amp; Iterate:</strong> Releasing, collecting feedback, and refining
                in future sprints.
              </li>
            </ol>
          </div>
          <div className="relative h-64 md:h-80 md:w-1/2">
            <Image
              src="/images/agile-workflow.jpg"
              alt="Agile Workflow Illustration"
              fill
              className="object-contain"
              priority
            />
          </div>
        </section>

        {/* Collaboration & Trust Section */}
        <section className="mb-20 rounded-2xl bg-white p-10 shadow-md">
          <div className="items-center gap-8 md:flex">
            <div className="relative h-60 md:w-1/2">
              <Image
                src="/images/team-collaboration.jpg"
                alt="Team Collaboration"
                fill
                className="rounded-lg object-cover"
              />
            </div>
            <div className="mt-8 md:mt-0 md:w-1/2">
              <h3 className="mb-3 text-3xl font-semibold text-gray-800">
                Built on Collaboration &amp; Trust
              </h3>
              <p className="text-gray-600">
                Every project is a partnership. Our agile approach gives you full visibility into
                progress and decisions while empowering our team to deliver consistently
                high-quality results.
              </p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="rounded-xl bg-green-600 py-16 text-center text-white">
          <h3 className="mb-4 text-3xl font-bold md:text-4xl">
            Work With a Team That Moves Fast &amp; Delivers Value
          </h3>
          <p className="mx-auto mb-6 max-w-2xl text-lg md:text-xl">
            Let&apos;s collaborate using agile practices that prioritize results, communication, and
            continuous improvement.
          </p>
          <Link
            href="/contact"
            className="inline-block rounded-lg bg-white px-8 py-3 font-semibold text-green-600 shadow-lg transition hover:scale-105 hover:bg-gray-100"
          >
            Let&apos;s Get Started
          </Link>
        </section>
      </div>
    </div>
  );
}
