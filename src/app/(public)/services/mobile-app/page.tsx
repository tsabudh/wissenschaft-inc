// app/services/mobile-app/page.tsx
import React from "react";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Mobile App Development Services | Wissenschaft Inc.",
  description:
    "We design and build native, cross-platform, and progressive web apps (PWA). From MVPs to enterprise mobility, we deliver delightful, scalable mobile experiences.",
};

export default function MobileAppPage() {
  return (
    <main className="mx-auto min-h-screen max-w-7xl bg-gray-50 px-6 py-16 text-gray-800 lg:px-20">
      {/* HERO */}
      <section className="mb-14 text-center">
        <h1 className="mb-4 text-4xl leading-tight font-extrabold md:text-5xl lg:text-6xl">
          Mobile apps people love to use
        </h1>
        <p className="mx-auto max-w-3xl text-lg text-gray-600 md:text-xl">
          We design and build native, cross-platform, and Progressive Web Apps (PWA) that perform
          beautifully, scale reliably, and match your business goals — from MVPs to enterprise
          mobility.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-lg bg-purple-600 px-6 py-3 font-semibold text-white shadow-lg transition-transform hover:scale-[1.02]"
          >
            Start your app project
          </Link>
          <Link
            href="#who-we-build-for"
            className="inline-flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-6 py-3 font-medium shadow-sm"
          >
            Learn more
          </Link>
        </div>
      </section>

      {/* WHO WE BUILD FOR + "you already have website?" */}
      <section id="who-we-build-for" className="mb-16">
        <header className="mb-6 text-center">
          <h2 className="text-2xl font-bold">Who we build for</h2>
          <p className="text-gray-600">
            From first-time founders to global enterprises — whether you&apos;re launching an app from
            scratch or extending an existing website to mobile.
          </p>
        </header>

        <div className="mb-8 flex flex-col items-center gap-6">
          <div className="w-full rounded-2xl bg-white p-6 shadow-md">
                <p className="text-md text-gray-500">
                  Already have a website and want a mobile application? Or building a mobile-first
                  product? We adapt our approach to fit your starting point and business priorities.
                </p>
            <div className="flex flex-col gap-6 xl:flex-row xl:items-center xl:justify-between xl:gap-4">
              <div className="w-full">

                <div className="mt-4 grid grid-cols-1 gap-3 md:grid-cols-3">
                  <div className="rounded-md border border-gray-100 bg-white p-3 text-center shadow-sm">
                    <strong className="block">Startups</strong>
                    <span className="block text-sm text-gray-500">MVPs, rapid validation</span>
                  </div>
                  <div className="rounded-md border border-gray-100 bg-white p-3 text-center shadow-sm">
                    <strong className="block">Growing businesses</strong>
                    <span className="block text-sm text-gray-500">Customer apps & retention</span>
                  </div>
                  <div className="rounded-md border border-gray-100 bg-white p-3 text-center shadow-sm">
                    <strong className="block">Enterprises</strong>
                    <span className="block text-sm text-gray-500">Secure, compliant mobility</span>
                  </div>
                </div>
              </div>

              <div className="mt-4 w-full  md:mt-0">
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>Website-first → Mobile-first</span>
                  <span>Simple companion app → Full native product</span>
                </div>

                <div className="relative mt-2 h-4 w-full overflow-hidden rounded-full bg-gray-100">
                  <div
                    className="absolute top-0 left-0 h-full bg-purple-500"
                    style={{ width: "28%" }}
                  />
                  <div
                    className="absolute top-0 left-[28%] h-full bg-indigo-500"
                    style={{ width: "34%" }}
                  />
                  <div
                    className="absolute top-0 left-[62%] h-full bg-gray-300"
                    style={{ width: "38%" }}
                  />
                </div>

                <div className="mt-3 flex items-center justify-between gap-4 text-sm text-gray-600">
                  <span className="inline-flex items-center gap-2">
                    <span className="rounded-full bg-purple-100 px-2 py-0.5 text-purple-700">
                      📱
                    </span>
                    Website → App
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <span className="rounded-full bg-indigo-100 px-2 py-0.5 text-indigo-700">
                      ⚡
                    </span>
                    Mobile-first
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <span className="rounded-full bg-gray-100 px-2 py-0.5 text-gray-700">🧩</span>
                    Hybrid approaches
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CORE SERVICES (Mobile-focused + Educational) */}
      <section id="services" className="mb-16">
        <header className="mb-8">
          <h2 className="text-2xl font-bold">
            What we build <span className="italic">and</span> what it means
          </h2>
          <p className="text-gray-600">
            Practical explanations so decision-makers understand trade-offs and outcomes.
          </p>
        </header>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {/* Native */}
          <article className="rounded-xl bg-white p-6 shadow-md transition hover:shadow-xl">
            <h3 className="mb-2 text-lg font-semibold">Native apps</h3>
            <p className="mb-3 text-sm text-gray-600">
              Built specifically for each platform using the platform&apos;s official languages. Native
              apps provide the best performance, smoothest animations, and the deepest access to
              device features such as sensors and cameras. Ideal when reliability, battery
              efficiency, and platform-consistent UI are priorities.
            </p>
            <ul className="mt-2 space-y-1 text-xs text-gray-500">
              <li>Best performance & UX fidelity</li>
              <li>Full access to device APIs</li>
              <li>Preferred for high-performance or hardware-heavy apps</li>
            </ul>
          </article>

          {/* Cross-platform */}
          <article className="rounded-xl bg-white p-6 shadow-md transition hover:shadow-xl">
            <h3 className="mb-2 text-lg font-semibold">Cross-platform</h3>
            <p className="mb-3 text-sm text-gray-600">
              A single codebase that runs on both iOS and Android. Cross-platform apps let you
              launch faster and lower maintenance costs while still delivering near-native
              performance for most product needs. Great for startups and products that prioritize
              time-to-market.
            </p>
            <ul className="mt-2 space-y-1 text-xs text-gray-500">
              <li>Faster time-to-market</li>
              <li>Shared engineering effort across platforms</li>
              <li>Good trade-off between cost and native feel</li>
            </ul>
          </article>

          {/* PWA */}
          <article className="rounded-xl bg-white p-6 shadow-md transition hover:shadow-xl">
            <h3 className="mb-2 text-lg font-semibold">Progressive Web Apps (PWA)</h3>
            <p className="mb-3 text-sm text-gray-600">
              PWAs are websites that behave like apps. Installable from the browser, work offline,
              and update automatically. If you already have a website, a PWA can often deliver
              mobile-like experiences without full native development, and it&apos;s perfect for
              broad reach and quick iterations.
            </p>
            <ul className="mt-2 space-y-1 text-xs text-gray-500">
              <li>Fast to deploy, easy to update</li>
              <li>Works on almost any device via the browser</li>
              <li>Great for testing product-market fit before native investment</li>
            </ul>
          </article>

          {/* UI/UX & Prototyping */}
          <article className="rounded-xl bg-white p-6 shadow-md transition hover:shadow-xl">
            <h3 className="mb-2 text-lg font-semibold">Design & prototyping</h3>
            <p className="mb-3 text-sm text-gray-600">
              We validate ideas with sketches and interactive prototypes, then refine visual and
              interaction design for touch — prioritizing clarity, accessibility, and conversion.
            </p>
            <ul className="mt-2 space-y-1 text-xs text-gray-500">
              <li>Interactive prototypes for user testing</li>
              <li>Design systems for consistency</li>
              <li>Accessibility and localized UX</li>
            </ul>
          </article>

          {/* Backend & Integrations */}
          <article className="rounded-xl bg-white p-6 shadow-md transition hover:shadow-xl">
            <h3 className="mb-2 text-lg font-semibold">APIs, sync & offline</h3>
            <p className="mb-3 text-sm text-gray-600">
              Mobile experiences depend on reliable APIs, sync strategies, and offline support. We
              design backends and sync layers to keep your app responsive and resilient.
            </p>
            <ul className="mt-2 space-y-1 text-xs text-gray-500">
              <li>Realtime sync & background sync</li>
              <li>Optimistic UI & conflict resolution</li>
              <li>Secure authentication & data privacy</li>
            </ul>
          </article>

          {/* Maintenance & Store Launch */}
          <article className="rounded-xl bg-white p-6 shadow-md transition hover:shadow-xl">
            <h3 className="mb-2 text-lg font-semibold">Launch & ongoing support</h3>
            <p className="mb-3 text-sm text-gray-600">
              We manage app store submissions, CI/CD, beta distribution, crash reporting, and post-
              launch improvements so your app keeps getting better after release.
            </p>
            <ul className="mt-2 space-y-1 text-xs text-gray-500">
              <li>App Store & Play Store submission support</li>
              <li>CI, Fastlane, beta distribution</li>
              <li>Crash monitoring, analytics, and SLAs</li>
            </ul>
          </article>
        </div>
      </section>

      {/* PROCESS */}
      <section id="process" className="mb-16">
        <header className="mb-6">
          <h2 className="text-2xl font-bold">Our process</h2>
          <p className="text-gray-600">
            A mobile-first, iterative process focusing on user outcomes.
          </p>
        </header>

        <ol className="grid grid-cols-1 gap-6 md:grid-cols-3 xl:grid-cols-5">
          <li className="rounded-lg bg-white p-6 shadow-sm">
            <div className="mb-2 inline-flex h-10 w-10 items-center justify-center rounded-full bg-purple-50 font-semibold text-purple-700">
              1
            </div>
            <h4 className="mb-1 font-medium">Discovery & priorities</h4>
            <p className="text-sm text-gray-500">
              Goals, metrics, user journeys, and a prioritized roadmap.
            </p>
          </li>

          <li className="rounded-lg bg-white p-6 shadow-sm">
            <div className="mb-2 inline-flex h-10 w-10 items-center justify-center rounded-full bg-purple-50 font-semibold text-purple-700">
              2
            </div>
            <h4 className="mb-1 font-medium">Design & prototype</h4>
            <p className="text-sm text-gray-500">
              Clickable prototypes and user testing before development.
            </p>
          </li>

          <li className="rounded-lg bg-white p-6 shadow-sm">
            <div className="mb-2 inline-flex h-10 w-10 items-center justify-center rounded-full bg-purple-50 font-semibold text-purple-700">
              3
            </div>
            <h4 className="mb-1 font-medium">Build & integrate</h4>
            <p className="text-sm text-gray-500">
              Native / cross-platform development and backend integration.
            </p>
          </li>

          <li className="rounded-lg bg-white p-6 shadow-sm">
            <div className="mb-2 inline-flex h-10 w-10 items-center justify-center rounded-full bg-purple-50 font-semibold text-purple-700">
              4
            </div>
            <h4 className="mb-1 font-medium">Test on devices</h4>
            <p className="text-sm text-gray-500">
              Real-device QA, performance testing, and accessibility checks.
            </p>
          </li>

          <li className="rounded-lg bg-white p-6 shadow-sm">
            <div className="mb-2 inline-flex h-10 w-10 items-center justify-center rounded-full bg-purple-50 font-semibold text-purple-700">
              5
            </div>
            <h4 className="mb-1 font-medium">Launch & iterate</h4>
            <p className="text-sm text-gray-500">
              Store release, monitoring, and continuous improvements based on metrics.
            </p>
          </li>
        </ol>
      </section>

      {/* TECHNOLOGY STACK (mobile-flavored) */}
      <section id="stack" className="mb-16">
        <header className="mb-6">
          <h2 className="text-2xl font-bold">Technology we typically use</h2>
          <p className="text-gray-600">
            Our go-to tools for mobile, backend and infrastructure. We adapt to your existing
            systems and can modernize legacy platforms when needed.
          </p>
        </header>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="rounded-xl bg-white p-6 shadow-sm">
            <h4 className="mb-2 font-semibold">Mobile (UI)</h4>
            <p className="mb-2 text-sm text-gray-600">
              Swift (iOS), Kotlin (Android), React Native, Flutter, and PWA technologies.
            </p>
            <ul className="text-xs text-gray-500">
              <li>Platform-native SDKs for best UX</li>
              <li>Cross-platform for faster launches</li>
              <li>Progressive Web Apps for broad reach</li>
            </ul>
          </div>

          <div className="rounded-xl bg-white p-6 shadow-sm">
            <h4 className="mb-2 font-semibold">Backend & APIs</h4>
            <p className="mb-2 text-sm text-gray-600">
              NestJS, Node.js, GraphQL, REST, Firebase, PostgreSQL.
            </p>
            <ul className="text-xs text-gray-500">
              <li>Realtime & offline sync</li>
              <li>Secure auth & data handling</li>
              <li>Scalable API design</li>
            </ul>
          </div>

          <div className="rounded-xl bg-white p-6 shadow-sm">
            <h4 className="mb-2 font-semibold">Infra & CI</h4>
            <p className="mb-2 text-sm text-gray-600">
              Docker, Kubernetes, Fastlane, Firebase App Distribution, and cloud CI/CD.
            </p>
            <ul className="text-xs text-gray-500">
              <li>Automated builds & distribution</li>
              <li>Crash reporting & analytics</li>
              <li>Secure, compliant deployments</li>
            </ul>
          </div>
        </div>

        <p className="mt-6 text-sm text-gray-500">
          We favor pragmatic, well-supported technologies — but we’ll work with your platform of
          choice and integrate with existing enterprise systems where required.
        </p>
      </section>

      {/* WHY CHOOSE US */}
      <section id="why" className="mb-16">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <div className="rounded-xl bg-white p-8 shadow-sm">
            <h3 className="mb-3 text-2xl font-bold">Why choose us</h3>
            <p className="mb-4 text-gray-600">
              We focus on product outcomes: usability, performance, and measurable growth. Our
              cross-functional teams deliver end-to-end apps — from idea validation to long-term
              support.
            </p>

            <ul className="space-y-3 text-sm text-gray-700">
              <li>
                <strong>User-first design:</strong> Mobile experiences designed for real world use.
              </li>
              <li>
                <strong>Engineering that scales:</strong> Reliable sync, offline handling, and
                secure storage.
              </li>
              <li>
                <strong>Store-ready delivery:</strong> We handle App Store & Play Store publishing
                and distribution.
              </li>
              <li>
                <strong>Flexible engagement:</strong> From short sprints to SLA-backed partnerships.
              </li>
            </ul>
          </div>

          <div className="rounded-xl bg-white p-8 shadow-sm">
            <h4 className="mb-3 text-lg font-semibold">Still unsure which approach fits?</h4>
            <p className="mb-4 text-sm text-gray-600">
              We&apos;ll help you choose: native for performance and device features, cross-platform for
              speed and efficiency, or a PWA to extend a web presence quickly. Book a short
              consultation and we&apos;ll suggest the best path for your goals and budget.
            </p>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-lg bg-purple-600 px-6 py-3 font-semibold text-white shadow-lg transition-transform hover:scale-[1.02]"
            >
              Schedule consultation
            </Link>
          </div>
        </div>
      </section>

      {/* CONTACT / CTA */}
      <section id="contact" className="rounded-xl bg-purple-600 py-16 text-center text-white">
        <h3 className="mb-4 text-3xl font-bold md:text-4xl">Ready to go mobile?</h3>
        <p className="mb-6 text-lg md:text-xl px-4">
          Tell us about your idea or existing product and we&apos;ll recommend the fastest, most cost
          effective way to reach your users.
        </p>
        <div className="flex items-center justify-center gap-3">
          <Link
            href="/contact"
            className="rounded-lg bg-white px-8 py-3 font-semibold text-purple-600 shadow-lg transition hover:scale-105 hover:bg-gray-100"
          >
            Get Started
          </Link>
          <Link
            href="/contact#brief"
            className="rounded-lg border border-white/30 px-6 py-3 text-white hover:bg-white/5"
          >
            Send brief
          </Link>
        </div>
      </section>

      <footer className="text-md mt-12 text-center text-gray-500">
        <p>© {new Date().getFullYear()} Wissenschaft Inc. Crafted with care.</p>
      </footer>
    </main>
  );
}
