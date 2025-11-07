import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function AgileApproachPage() {
  return (
    <main className="mx-auto min-h-screen max-w-7xl bg-gray-50 px-6 py-16 text-gray-800 lg:px-20">
      {/* HERO */}
      <section className="mb-20 text-center">
        <h1 className="mb-4 text-4xl font-extrabold leading-tight md:text-5xl lg:text-6xl">
          Building software through an agile, collaborative approach
        </h1>
        <h2 className="mb-4 text-xl font-extrabold leading-tight md:text-3xl lg:text-4xl">
          Flexible process, predictable outcomes
        </h2>
        <p className="mx-auto max-w-3xl text-lg text-gray-600 md:text-xl">
          We use agile principles to deliver value continuously — turning ideas into working software 
          fast, adapting to feedback, and keeping business goals in focus. This approach reduces risk, 
          increases transparency, and ensures your product stays aligned with real user needs.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-lg bg-green-600 px-6 py-3 font-semibold text-white shadow-lg transition-transform hover:scale-[1.02]"
          >
            Discuss your project
          </Link>
          <Link
            href="#principles"
            className="text-md inline-flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-6 py-3 font-medium shadow-sm"
          >
            Learn more
          </Link>
        </div>
      </section>

      {/* CORE PRINCIPLES */}
      <section id="principles" className="mb-16">
        <header className="mb-6">
          <h2 className="text-2xl font-bold">Core agile principles we follow</h2>
          <p className="text-gray-600">
            Our delivery model is built on collaboration, transparency, and iteration — designed 
            to keep your product moving forward and your team in sync.
          </p>
        </header>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <article className="rounded-xl bg-white p-6 shadow-md transition hover:shadow-xl">
            <h3 className="mb-2 text-lg font-semibold">Iterative progress</h3>
            <p className="text-md text-gray-600">
              We break down complex goals into smaller, testable deliverables — enabling early 
              validation, measurable progress, and continuous learning.
            </p>
          </article>

          <article className="rounded-xl bg-white p-6 shadow-md transition hover:shadow-xl">
            <h3 className="mb-2 text-lg font-semibold">Collaboration & communication</h3>
            <p className="text-md text-gray-600">
              Direct communication with your stakeholders, product owners, and engineers ensures 
              rapid decision-making and shared understanding.
            </p>
          </article>

          <article className="rounded-xl bg-white p-6 shadow-md transition hover:shadow-xl">
            <h3 className="mb-2 text-lg font-semibold">Transparency & feedback</h3>
            <p className="text-md text-gray-600">
              Regular demos, sprint reviews, and retrospectives create accountability and provide 
              visibility into every stage of progress.
            </p>
          </article>
        </div>
      </section>

      {/* OUR WORKFLOW */}
      <section id="workflow" className="mb-20">
        <header className="mb-8">
          <h2 className="text-2xl font-bold">Our agile delivery workflow</h2>
          <p className="text-gray-600">
            We follow a structured yet flexible delivery loop that keeps momentum high while 
            allowing for strategic pivots when needed.
          </p>
        </header>

        <div className="flex flex-col items-center gap-10 md:flex-row">
          <div className="md:w-1/2">
            <ol className="list-inside list-decimal space-y-4 text-gray-700">
              <li>
                <strong>Discovery & planning:</strong> We begin by understanding your product vision, 
                business constraints, and success metrics to define a clear roadmap.
              </li>
              <li>
                <strong>Sprint planning:</strong> Together, we prioritize features and define 
                achievable sprint goals based on value, complexity, and impact.
              </li>
              <li>
                <strong>Design & development:</strong> Our cross-functional team builds incrementally 
                using short, feedback-driven iterations.
              </li>
              <li>
                <strong>Testing & QA:</strong> Automated and manual tests validate functionality, 
                usability, and performance at every cycle.
              </li>
              <li>
                <strong>Review & iteration:</strong> Each sprint ends with a review to capture 
                feedback, improve velocity, and refine the product.
              </li>
              <li>
                <strong>Deployment & scaling:</strong> We release continuously and monitor stability, 
                preparing for future growth through automation and observability.
              </li>
            </ol>
          </div>

          <div className="relative h-64 md:h-80 md:w-1/2">
            <Image
              src="/images/agile-workflow.jpg"
              alt="Agile Workflow Diagram"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </section>

      {/* BENEFITS TO YOUR BUSINESS */}
      <section id="benefits" className="mb-20">
        <header className="mb-8">
          <h2 className="text-2xl font-bold">Why businesses choose our agile model</h2>
          <p className="text-gray-600">
            Agile isn’t just a development framework — it’s a business advantage that brings 
            adaptability, faster delivery, and data-driven clarity.
          </p>
        </header>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <article className="rounded-xl bg-white p-8 shadow-md">
            <h3 className="mb-3 text-xl font-semibold">Predictable outcomes</h3>
            <p className="text-gray-600">
              With time-boxed sprints, fixed deliverables, and transparent reporting, you always 
              know what’s being built and when to expect results.
            </p>
          </article>

          <article className="rounded-xl bg-white p-8 shadow-md">
            <h3 className="mb-3 text-xl font-semibold">Faster time-to-market</h3>
            <p className="text-gray-600">
              Deliver MVPs and incremental features quickly — testing real-world impact before 
              investing heavily in full builds.
            </p>
          </article>

          <article className="rounded-xl bg-white p-8 shadow-md">
            <h3 className="mb-3 text-xl font-semibold">Continuous improvement</h3>
            <p className="text-gray-600">
              Regular retrospectives help teams evolve — improving quality, collaboration, and 
              delivery speed with each sprint.
            </p>
          </article>

          <article className="rounded-xl bg-white p-8 shadow-md">
            <h3 className="mb-3 text-xl font-semibold">Empowered teams & clients</h3>
            <p className="text-gray-600">
              We co-own success with you. Agile empowers everyone — from developers to executives — 
              with data, clarity, and decision-making power.
            </p>
          </article>
        </div>
      </section>

      {/* TOOLS & PRACTICES */}
      <section id="tools" className="mb-20">
        <header className="mb-6">
          <h2 className="text-2xl font-bold">Tools & practices we use</h2>
          <p className="text-gray-600">
            Our agile practice is backed by a stack of proven collaboration and delivery tools.
          </p>
        </header>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="rounded-xl bg-white p-6 shadow-sm">
            <h4 className="mb-2 font-semibold">Collaboration</h4>
            <p className="text-md mb-3 text-gray-600">Slack, Notion, Figma, Jira, Linear</p>
            <ul className="text-sm text-gray-500">
              <li>Daily standups & async updates</li>
              <li>Shared documentation & visibility</li>
              <li>Design & feedback in real time</li>
            </ul>
          </div>

          <div className="rounded-xl bg-white p-6 shadow-sm">
            <h4 className="mb-2 font-semibold">Delivery & CI/CD</h4>
            <p className="text-md mb-3 text-gray-600">GitHub Actions, Docker, Vercel, Kubernetes</p>
            <ul className="text-sm text-gray-500">
              <li>Continuous integration & deployment</li>
              <li>Automated testing pipelines</li>
              <li>Version control & peer review</li>
            </ul>
          </div>

          <div className="rounded-xl bg-white p-6 shadow-sm">
            <h4 className="mb-2 font-semibold">Observability & QA</h4>
            <p className="text-md mb-3 text-gray-600">Prometheus, Grafana, Sentry, Cypress</p>
            <ul className="text-sm text-gray-500">
              <li>End-to-end test coverage</li>
              <li>Performance & error monitoring</li>
              <li>Continuous feedback loops</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="rounded-xl bg-green-600 py-16 text-center text-white">
        <h3 className="mb-4 text-3xl font-bold md:text-4xl">
          Work with a team that delivers results — one sprint at a time
        </h3>
        <p className="mx-auto mb-6 max-w-2xl text-lg md:text-xl">
          Our agile model adapts to your goals and growth — whether you’re launching a new MVP or 
          scaling a mature product.
        </p>
        <div className="flex items-center justify-center gap-3">
          <Link
            href="/contact"
            className="rounded-lg bg-white px-8 py-3 font-semibold text-green-600 shadow-lg transition hover:scale-105 hover:bg-gray-100"
          >
            Get in touch
          </Link>
          <Link
            href="/contact#brief"
            className="rounded-lg border border-white/30 px-6 py-3 text-white hover:bg-white/5"
          >
            Send project brief
          </Link>
        </div>
      </section>

      <footer className="text-md mt-12 text-center text-gray-500">
        <p>© {new Date().getFullYear()} Wissenschaft Inc. Agile delivery, built for results.</p>
      </footer>
    </main>
  );
}
