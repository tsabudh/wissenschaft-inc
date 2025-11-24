import React from "react";
import Image from "next/image";
import Link from "next/link";
import { metadataMap } from "@/lib/metadataMap";
import { Metadata } from "next";

export default function WebDevPage() {
  return (
    <main className="mx-auto flex min-h-screen max-w-7xl flex-col gap-12 px-6 py-16 text-gray-800 lg:px-20 dark:text-gray-300">
      {/* HERO */}
      <section className="mb-20 text-center">
        <h1 className="mb-4 text-4xl leading-tight font-extrabold md:text-5xl lg:text-6xl">
          Web development for products that scale.
        </h1>
        <h2 className="mb-4 text-xl leading-tight font-extrabold md:text-3xl lg:text-4xl">
          From MVPs to enterprise platforms
        </h2>
        <p className="mx-auto max-w-3xl text-lg text-gray-600 md:text-xl">
          We combine strategic product thinking, high quality UX, and modern engineering to build
          web applications that deliver measurable business outcomes faster and with fewer
          surprises.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Link
            href="/contact"
            className="text-foreground inline-flex items-center gap-2 rounded-lg bg-purple-600 px-6 py-3 font-semibold shadow-lg transition-transform hover:scale-[1.02]"
          >
            Start a project
          </Link>
          <Link
            href="#who-we-build-for"
            className="text-md bg-background inline-flex items-center gap-2 rounded-lg border border-gray-200 px-6 py-3 font-medium shadow-sm"
          >
            Learn more
          </Link>
        </div>
      </section>

      {/* WHO WE BUILD FOR */}
      <section id="who-we-build-for">
        <header className="mb-6">
          <h2 className="text-2xl font-bold">Who we build for</h2>
          <p className="text-gray-600">
            From lean startups to complex enterprise ecosystems — and everything in between.
          </p>
        </header>

        {/* Spectrum visual */}
        <div className="mb-8 flex flex-col items-center gap-6">
          <div className="bg-background w-full rounded-2xl p-6 shadow-md">
            <div className="flex flex-col gap-6 xl:flex-row xl:items-center xl:justify-between xl:gap-4">
              <p className="text-md text-gray-500 md:max-w-xl">
                We adapt our process to your stage and needs — shipping fast for startups and
                delivering governance, compliance, and reliability for large organizations.
              </p>

              <div className="mt-4 flex w-full max-w-3xl flex-col gap-3 md:mt-0">
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>Startup (MVP → Product Market Fit)</span>
                  <span>Enterprise (Legacy → Modern Platform)</span>
                </div>

                <div className="relative h-4 w-full overflow-hidden rounded-full bg-gray-100">
                  <div
                    className="absolute top-0 left-0 h-full w-1/3 bg-purple-500"
                    style={{ width: "33%" }}
                  />
                  <div
                    className="absolute top-0 left-[33%] h-full w-1/3 bg-indigo-500"
                    style={{ width: "34%" }}
                  />
                  <div
                    className="absolute top-0 left-[67%] h-full w-1/3 bg-gray-300"
                    style={{ width: "33%" }}
                  />
                </div>

                <div className="text-md grid grid-cols-2 gap-3 pt-2 text-gray-600 md:grid-cols-4">
                  <div className="bg-background rounded-md border border-gray-100 p-3 text-center shadow-sm">
                    <strong className="block">FinTech</strong>
                    <span className="block text-sm text-gray-500">Payments, KYC, Compliance</span>
                  </div>
                  <div className="bg-background rounded-md border border-gray-100 p-3 text-center shadow-sm">
                    <strong className="block">Health</strong>
                    <span className="block text-sm text-gray-500">
                      PHI-safe apps & integrations
                    </span>
                  </div>
                  <div className="bg-background rounded-md border border-gray-100 p-3 text-center shadow-sm">
                    <strong className="block">Retail</strong>
                    <span className="block text-sm text-gray-500">B2C platforms & storefronts</span>
                  </div>
                  <div className="bg-background rounded-md border border-gray-100 p-3 text-center shadow-sm">
                    <strong className="block">SaaS</strong>
                    <span className="block text-sm text-gray-500">
                      Productized services & dashboards
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CORE SERVICES */}
      <section id="services">
        <header className="mb-8">
          <h2 className="text-2xl font-bold">Core services</h2>
          <p className="text-gray-600">Below is a quick overview of services that we provide.</p>
        </header>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {/** Card: Frontend Engineering */}
          <article className="bg-background rounded-xl p-6 shadow-md transition hover:shadow-xl">
            <h3 className="mb-2 text-lg font-semibold">Frontend engineering</h3>
            <p className="text-md mb-3 text-gray-600">
              Pixel-perfect, accessible interfaces with strong performance. React, Next.js,
              TypeScript — SSR / ISR / SSG where appropriate.
            </p>
            <ul className="mt-2 space-y-1 text-sm text-gray-500">
              <li>Design systems & component libraries</li>
              <li>Accessibility and internationalization</li>
              <li>Performance budgets & lighthouse audits</li>
            </ul>
          </article>

          {/** Card: Backend Systems */}
          <article className="bg-background rounded-xl p-6 shadow-md transition hover:shadow-xl">
            <h3 className="mb-2 text-lg font-semibold">Backend systems</h3>
            <p className="text-md mb-3 text-gray-600">
              Robust APIs and event-driven architectures for scale. Node.js, NestJS, PostgreSQL,
              Redis, message brokers and service meshes.
            </p>
            <ul className="mt-2 space-y-1 text-sm text-gray-500">
              <li>API design & contract testing</li>
              <li>Data modeling & migration strategy</li>
              <li>Observability & distributed tracing</li>
            </ul>
          </article>

          {/** Card: UX / Product Design */}
          <article className="bg-background rounded-xl p-6 shadow-md transition hover:shadow-xl">
            <h3 className="mb-2 text-lg font-semibold">UX & product design</h3>
            <p className="text-md mb-3 text-gray-600">
              User research, information architecture, interactive prototypes, and high-fidelity UI
              that aligns with your brand and product goals.
            </p>
            <ul className="mt-2 space-y-1 text-sm text-gray-500">
              <li>Design sprints & rapid prototyping</li>
              <li>Design systems & tokenization</li>
              <li>Usability testing & analytics-driven improvements</li>
            </ul>
          </article>

          {/** Card: Performance & Scalability */}
          <article className="bg-background rounded-xl p-6 shadow-md transition hover:shadow-xl">
            <h3 className="mb-2 text-lg font-semibold">Performance & scalability</h3>
            <p className="text-md mb-3 text-gray-600">
              Engineering for real-world scale — load testing, caching strategies, horizontal
              scaling, and resilient patterns.
            </p>
            <ul className="mt-2 space-y-1 text-sm text-gray-500">
              <li>Load testing & capacity planning</li>
              <li>CDN, caching & edge strategies</li>
              <li>Fault-tolerant design patterns</li>
            </ul>
          </article>

          {/** Card: Cloud, DevOps & Observability */}
          <article className="bg-background rounded-xl p-6 shadow-md transition hover:shadow-xl">
            <h3 className="mb-2 text-lg font-semibold">Cloud, DevOps & observability</h3>
            <p className="text-md mb-3 text-gray-600">
              CI/CD, containerization, deployments, and end-to-end observability so you can rely on
              your product in production.
            </p>
            <ul className="mt-2 space-y-1 text-sm text-gray-500">
              <li>Automated pipelines & testing</li>
              <li>Monitoring, logging & tracing</li>
              <li>Infrastructure as code & safe deployments</li>
            </ul>
          </article>

          {/** Card: Support & Modernization */}
          <article className="bg-background rounded-xl p-6 shadow-md transition hover:shadow-xl">
            <h3 className="mb-2 text-lg font-semibold">Support, maintenance & modernization</h3>
            <p className="text-md mb-3 text-gray-600">
              Long-term partnerships for feature growth, security patches, and modernizing legacy
              platforms with minimal disruption.
            </p>
            <ul className="mt-2 space-y-1 text-sm text-gray-500">
              <li>Legacy system assessment & lift-and-shift plans</li>
              <li>Incremental refactors and API gateways</li>
              <li>Dedicated SLA-based support options</li>
            </ul>
          </article>
        </div>
      </section>

      {/* PROCESS */}
      <section id="process">
        <header className="mb-6">
          <h2 className="text-2xl font-bold">Our process</h2>
          <p className="text-gray-600">
            A pragmatic, iterative process that reduces risk and speeds up time to value.
          </p>
        </header>

        <ol className="grid grid-cols-1 gap-6 md:grid-cols-3 xl:grid-cols-5">
          <li className="bg-background rounded-lg p-6 shadow-sm">
            <div className="mb-2 inline-flex h-10 w-10 items-center justify-center rounded-full bg-purple-50 font-semibold text-purple-700">
              1
            </div>
            <h4 className="mb-1 font-medium">Discovery & strategy</h4>
            <p className="text-md text-gray-500">
              Stakeholder interviews, user research, technical assessments, and a prioritized
              roadmap.
            </p>
          </li>

          <li className="bg-background rounded-lg p-6 shadow-sm">
            <div className="mb-2 inline-flex h-10 w-10 items-center justify-center rounded-full bg-purple-50 font-semibold text-purple-700">
              2
            </div>
            <h4 className="mb-1 font-medium">UX & visual design</h4>
            <p className="text-md text-gray-500">
              Wireframes, prototypes, and a shared design language that scales across teams.
            </p>
          </li>

          <li className="bg-background rounded-lg p-6 shadow-sm">
            <div className="mb-2 inline-flex h-10 w-10 items-center justify-center rounded-full bg-purple-50 font-semibold text-purple-700">
              3
            </div>
            <h4 className="mb-1 font-medium">Development & integration</h4>
            <p className="text-md text-gray-500">
              Modular code, test coverage, and well-documented APIs for fast iteration and safe
              releases.
            </p>
          </li>

          <li className="bg-background rounded-lg p-6 shadow-sm">
            <div className="mb-2 inline-flex h-10 w-10 items-center justify-center rounded-full bg-purple-50 font-semibold text-purple-700">
              4
            </div>
            <h4 className="mb-1 font-medium">Testing & QA</h4>
            <p className="text-md text-gray-500">
              Automated tests, accessibility checks, security audits, and performance profiling.
            </p>
          </li>

          <li className="bg-background rounded-lg p-6 shadow-sm">
            <div className="mb-2 inline-flex h-10 w-10 items-center justify-center rounded-full bg-purple-50 font-semibold text-purple-700">
              5
            </div>
            <h4 className="mb-1 font-medium">Launch & continuous improvement</h4>
            <p className="text-md text-gray-500">
              Gradual rollouts, monitoring, and a plan for ongoing feature development and
              optimization.
            </p>
          </li>
        </ol>
      </section>

      {/* TECHNOLOGY STACK */}
      <section id="stack">
        <header className="mb-6">
          <h2 className="text-2xl font-bold">Technology we typically use</h2>
          <p className="text-gray-600">
            Our go-to stack — pragmatic, well-supported, and flexible. We also regularly work with
            legacy systems and non-standard platforms.
          </p>
        </header>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="bg-background rounded-xl p-6 shadow-sm">
            <h4 className="mb-2 font-semibold">Frontend</h4>
            <p className="text-md mb-3 text-gray-600">
              React, Next.js, TypeScript, Tailwind CSS, design systems, accessibility.
            </p>
            <ul className="text-sm text-gray-500">
              <li>Component libraries & Storybook</li>
              <li>SSR, SSG, and edge rendering</li>
              <li>Performance and accessibility</li>
            </ul>
          </div>

          <div className="bg-background rounded-xl p-6 shadow-sm">
            <h4 className="mb-2 font-semibold">Backend</h4>
            <p className="text-md mb-3 text-gray-600">
              Node.js, NestJS, TypeScript, PostgreSQL, Redis, Kafka and event-driven services.
            </p>
            <ul className="text-sm text-gray-500">
              <li>Clean architecture & domain modeling</li>
              <li>API versioning & contract testing</li>
              <li>Data migration strategies</li>
            </ul>
          </div>

          <div className="bg-background rounded-xl p-6 shadow-sm">
            <h4 className="mb-2 font-semibold">Infrastructure</h4>
            <p className="text-md mb-3 text-gray-600">
              Docker, Kubernetes, CI/CD, observability (Prometheus, Grafana, OpenTelemetry), and
              cloud deployments.
            </p>
            <ul className="text-sm text-gray-500">
              <li>Infrastructure as code</li>
              <li>Blue/green & canary deployments</li>
              <li>Security & compliance support</li>
            </ul>
          </div>
        </div>

        <p className="text-md mt-6 text-gray-500">
          We have a strong track record of migrating and modernizing legacy enterprise systems —
          bringing life to old platforms while minimizing business disruption.
        </p>
      </section>

      {/* WHY CHOOSE US */}
      <section id="why">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="bg-background rounded-xl p-8 shadow-sm">
            <h3 className="mb-3 text-2xl font-bold">Why choose us</h3>
            <p className="mb-4 text-gray-600">
              We help startups move fast and help enterprises move decisively. Our approach is
              practical, transparent, and tailored to your goals.
            </p>

            <ul className="text-md space-y-3 text-gray-700">
              <li>
                <strong>Engineering for longevity:</strong> We write maintainable code and ship with
                a long-term view.
              </li>
              <li>
                <strong>Design-first mindset:</strong> We treat UX as a first-class engineering
                concern — not an afterthought.
              </li>
              <li>
                <strong>Proven enterprise experience:</strong> We&apos;ve worked with large
                organizations, handling compliance, security, and migration challenges.
              </li>
              <li>
                <strong>Transparent collaboration:</strong> Regular demos, documentation, and shared
                roadmaps.
              </li>
            </ul>
          </div>

          <div className="bg-background rounded-xl p-8 shadow-sm">
            <h4 className="mb-3 text-lg font-semibold">Clients we partner with</h4>
            <p className="text-md mb-4 text-gray-600">
              From seed-stage startups to multinational enterprises including large OEMs and
              financial institutions.
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <div className="flex h-10 w-48 items-center justify-center rounded-md border border-gray-100 bg-gray-50 text-sm text-gray-500">
                Direct Contact Medical
              </div>
              <div className="flex h-10 w-28 items-center justify-center rounded-md border border-gray-100 bg-gray-50 text-sm text-gray-500">
                SK
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CASE STUDIES */}
      <section id="case-studies">
        <header className="mb-6">
          <h2 className="text-2xl font-bold">Case studies</h2>
          <p className="text-gray-600">
            Selected project highlights. Click through to read full case studies.
          </p>
        </header>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <article className="bg-background rounded-lg p-4 shadow-sm">
            <div className="mb-3 h-36 w-full overflow-hidden rounded-md bg-gray-100">
              {/* replace with Image when you have a thumbnail */}
              <div className="flex h-full items-center justify-center text-gray-400">
                <Image
                  alt="SK AX Thumbnail"
                  src={"/images/skax-cms.png"}
                  width={400}
                  height={400}
                />
              </div>
            </div>
            <h4 className="mb-1 font-semibold">SK AX USA</h4>
            <p className="text-md mb-3 text-gray-500">
              A professional, component-driven website with a CMS-first approach that gives SK AX
              full control of content variants and reduces ongoing engineering dependency.
            </p>
            <Link href="/case-studies/skax" className="text-md font-medium text-purple-600">
              Read case study →
            </Link>
          </article>
        </div>
      </section>

      {/* CONTACT / CTA */}
      <section
        id="contact"
        className="rounded-xl bg-purple-600 px-2 py-16 text-center text-white dark:bg-gray-700 dark:text-gray-300"
      >
        <h3 className="mb-4 text-3xl font-bold md:text-4xl">Ready to build your web product?</h3>
        <p className="mb-6 px-4 text-lg md:text-xl">
          Tell us about your project and we&apos;ll recommend the fastest path to results.
        </p>
        <div className="flex items-center justify-center gap-3">
          <Link
            href="/contact"
            className="bg-background rounded-lg px-8 py-3 font-semibold shadow-lg transition hover:scale-105 text-blue-600 dark:hover:bg-gray-800 dark:text-purple-200 dark:hover:text-purple-400"
          >
            Get Started
          </Link>
        </div>
      </section>
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
