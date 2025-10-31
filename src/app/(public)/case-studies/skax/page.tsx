"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";


const caseStudy = {
  title: "Website for SK AX USA",
  client: "SK — Software & Infrastructure",
  timeline: "3 months",
  services: ["Web Development", "CMS Architecture", "Product Delivery"],
  tech: ["Webflow CMS"],
  challenge:
    "SK AX USA required a highly-editable website with multiple layout variants so non-technical teams could iterate fast without developer intervention.",
  approach: [
    "Component-driven modular sections with variant options",
    "Webflow CMS collections for dynamic content (news, team, services)",
    "Custom theme and subtle motion to match SK’s professional brand",
    "Handover + editor training for internal teams",
  ],
  results: [
    "Fully dynamic CMS-powered site",
    "Estimated 90% reduction in developer-dependent content changes",
    "Faster publishing workflow and flexible content variants",
  ],
  testimonial: {
    quote:
      "SK AX USA now publishes updates without developer involvement and can test multiple section layouts quickly.",
    author: "Head of Communications, SK AX USA",
  },
  gallery: [
    { alt: "Hero section mockup", src: "/images/skax-mockup.png" },
    { alt: "Services section variants", src: "/images/skax-features.png" },
    { alt: "CMS collections overview", src: "/images/skax-cms.png" },
  ],
};

const FadeIn = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 8 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.45, delay }}
  >
    {children}
  </motion.div>
);

export default function Page() {
  return (
    <main className="min-h-screen bg-gray-50 px-6 py-12 text-slate-900 md:px-12 lg:px-24">
      <div className="mx-auto max-w-7xl">
        {/* Hero */}
        <section className="mb-12">
          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2">
            <div>
              <FadeIn>
                <p className="text-sm font-medium text-slate-500">Case study</p>
                <h1 className="mt-3 text-3xl leading-tight font-semibold md:text-4xl">
                  {caseStudy.title}
                </h1>
                <p className="mt-4 max-w-xl text-slate-600">
                  A professional, component-driven website with a CMS-first approach that gives SK
                  AX full control of content variants and reduces ongoing engineering dependency.
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  <span className="inline-flex items-center rounded-md border border-slate-200 bg-white/60 px-3 py-1 text-sm">
                    <strong className="mr-2">Client:</strong> {caseStudy.client}
                  </span>
                  <span className="inline-flex items-center rounded-md border border-slate-200 bg-white/60 px-3 py-1 text-sm">
                    <strong className="mr-2">Timeline:</strong> {caseStudy.timeline}
                  </span>
                  <span className="inline-flex items-center rounded-md border border-slate-200 bg-white/60 px-3 py-1 text-sm">
                    <strong className="mr-2">Tech:</strong> {caseStudy.tech.join(", ")}
                  </span>
                </div>

                <div className="mt-6 flex gap-3">
                  <Link
                    href="#results"
                    className="inline-flex items-center justify-center rounded-lg bg-slate-900 px-5 py-2 text-sm font-medium text-white shadow"
                  >
                    View results
                  </Link>
                  <Link
                    href="#contact"
                    className="inline-flex items-center justify-center rounded-lg border border-slate-200 px-5 py-2 text-sm font-medium"
                  >
                    Talk to us
                  </Link>
                </div>
              </FadeIn>
            </div>

            <div className="order-first lg:order-last">
              <FadeIn>
                <div className="overflow-hidden rounded-2xl bg-white shadow-lg">
                  <div className="relative h-64 w-full">
                    <Image
                      src={caseStudy.gallery[0].src}
                      alt={caseStudy.gallery[0].alt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-contain"
                    />
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Challenge & Approach */}
        <section className="mb-12 grid gap-8 lg:grid-cols-2">
          <FadeIn>
            <article className="h-full rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-semibold">The challenge</h3>
              <p className="mt-3 text-slate-600">{caseStudy.challenge}</p>

              <dl className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="rounded-lg border border-slate-100 bg-slate-50 p-4">
                  <dt className="text-xs text-slate-500">Editable variants</dt>
                  <dd className="mt-1 text-sm text-slate-700">
                    Multiple layout options per section
                  </dd>
                </div>
                <div className="rounded-lg border border-slate-100 bg-slate-50 p-4">
                  <dt className="text-xs text-slate-500">Non-technical editors</dt>
                  <dd className="mt-1 text-sm text-slate-700">
                    Friendly CMS experience via Webflow
                  </dd>
                </div>
              </dl>
            </article>
          </FadeIn>

          <FadeIn>
            <article className="h-full rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-semibold">Our approach</h3>
              <ul className="mt-4 list-inside list-disc space-y-3 text-slate-700">
                {caseStudy.approach.map((a, i) => (
                  <li key={i}>{a}</li>
                ))}
              </ul>
            </article>
          </FadeIn>
        </section>

        {/* Results */}
        <section id="results" className="mb-12">
          <FadeIn>
            <div className="rounded-2xl border border-slate-100 bg-gradient-to-r from-white to-slate-50 p-8 shadow-sm">
              <h2 className="text-2xl font-semibold">Results</h2>
              <p className="mt-3 max-w-2xl text-slate-600">
                Delivered a scalable CMS-backed website that greatly reduced maintenance overhead
                and unlocked rapid content experimentation.
              </p>

              <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
                <div className="rounded-xl border border-slate-100 bg-white p-5 shadow-sm">
                  <p className="text-3xl font-semibold">90%</p>
                  <p className="mt-1 text-sm text-slate-500">Reduced developer-dependent updates</p>
                </div>

                <div className="rounded-xl border border-slate-100 bg-white p-5 shadow-sm">
                  <p className="text-3xl font-semibold">30%</p>
                  <p className="mt-1 text-sm text-slate-500">
                   Traffic / engagement increment
                  </p>
                </div>

                <div className="rounded-xl border border-slate-100 bg-white p-5 shadow-sm">
                  <p className="text-3xl font-semibold">Flexible</p>
                  <p className="mt-1 text-sm text-slate-500">
                    Multiple design variants per section
                  </p>
                </div>
              </div>

              <div className="mt-8">
                <p className="text-sm text-slate-500">Delivered:</p>
                <ul className="mt-2 flex flex-wrap gap-2">
                  {caseStudy.services.map((s) => (
                    <li
                      key={s}
                      className="rounded-full border border-slate-200 bg-white px-3 py-1 text-sm"
                    >
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </FadeIn>
        </section>

        {/* Gallery */}
        <section className="mb-12">
          <h3 className="text-xl font-semibold">Gallery</h3>
          <p className="mt-2 text-slate-600">
            Screenshots and CMS views (replace with final assets).
          </p>

          <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {caseStudy.gallery.map((g, i) => (
              <FadeIn key={i}>
                <div className="overflow-hidden rounded-xl border border-slate-100 bg-white shadow-sm">
                  <div className="relative h-44 w-full">
                    <Image src={g.src} alt={g.alt} fill className="object-cover" />
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </section>

        {/* Testimonial + Team */}
        <section className="mb-12 grid gap-8 lg:grid-cols-2">
          <article className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
            <h3 className="text-xl font-semibold">Client testimonial</h3>
            <blockquote className="mt-4 text-slate-700 italic">
              “{caseStudy.testimonial.quote}”
            </blockquote>
            <p className="mt-4 text-sm font-medium">— {caseStudy.testimonial.author}</p>
          </article>

          <article className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
            <h3 className="text-xl font-semibold">Team & Role</h3>
            <p className="mt-3 text-slate-600">
              Designers, Frontend, CMS Specialist, Project Manager.
            </p>
            <ul className="mt-4 list-disc space-y-2 px-3 text-slate-700">
              <li>Design system & component library</li>
              <li>CMS collections and editor workflows</li>
              <li>Handover & training session</li>
            </ul>
          </article>
        </section>

        {/* CTA */}
        <section id="contact" className="mb-12">
          <div className="rounded-2xl bg-slate-900 p-8 text-white shadow-lg">
            <div className="max-w-3xl">
              <h3 className="text-2xl font-semibold">Want a website like this?</h3>
              <p className="mt-3 text-slate-200">
                We build CMS-first websites for enterprise clients.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="inline-block rounded-lg bg-white px-5 py-2 font-medium text-slate-900"
                >
                  Get in touch
                </Link>

                <Link
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    // Optional: wire up a modal, or scroll to contact form
                    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
                  }}
                  className="inline-block rounded-lg border border-white/30 px-5 py-2 text-sm text-white"
                >
                  Request a demo
                </Link>
              </div>
            </div>
          </div>
        </section>

        <footer className="py-6 text-sm text-slate-500">
          <p>
            © {new Date().getFullYear()} Wissenschaft Incorporated. Case study: {caseStudy.title}.
          </p>
        </footer>
      </div>
    </main>
  );
}
