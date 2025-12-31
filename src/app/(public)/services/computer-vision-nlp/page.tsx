import React from "react";
import Link from "next/link";
import { metadataMap } from "@/lib/metadataMap";
import { Metadata } from "next";
import RoundGradient from "@/components/ui/backgrounds/round-gradient";
import visionNlpPageData from "@/data/vision-nlp-page.json";

// filepath: e:\wissenschaft-next\src\app\(public)\services\computer-vision-nlp\page.tsx

export const metadata: Metadata = metadataMap["/services/computer-vision-nlp"];

const { hero, whoWeBuildFor, coreServices, process, technologyStack, whyChooseUs, cta } =
  visionNlpPageData;
export default function ComputerVisionNLPPage() {
  return (
    <main className="text-text-primary mx-auto flex min-h-screen max-w-7xl flex-col gap-12 px-6 py-16 lg:px-20 dark:text-gray-300">
      {/* HERO */}
      <section className="mb-20 text-center">
        <h1 className="mb-4 text-4xl leading-tight font-extrabold md:text-5xl lg:text-6xl">
          {visionNlpPageData.hero.heading}
        </h1>
        <p className="text-text-tertiary mx-auto max-w-3xl text-lg md:text-xl">
          {visionNlpPageData.hero.subheading}
        </p>
        <div className="mt-8 flex items-center justify-center gap-4">
          <Link
            href={visionNlpPageData.hero.cta.primary.href}
            className="text-md text-primary-foreground bg-primary hover:bg-accent rounded-lg px-4 py-2 font-medium shadow-md transition dark:text-gray-100"
          >
            {visionNlpPageData.hero.cta.primary.text}
          </Link>
          <Link
            href={visionNlpPageData.hero.cta.secondary.href}
            className="text-md bg-surface-secondary hover:bg-surface-quaternary inline-flex items-center gap-2 rounded-lg border border-gray-200 px-6 py-2 font-medium shadow-sm"
          >
            {visionNlpPageData.hero.cta.secondary.text}
          </Link>
        </div>
      </section>

      {/* WHO WE BUILD FOR */}
      <section id="who-we-build-for">
        <header className="mb-6">
          <h2 className="text-2xl font-bold">{whoWeBuildFor.heading}</h2>
          <p className="text-text-tertiary">{whoWeBuildFor.subheading}</p>
        </header>

        <RoundGradient variant="second" />

        <div className="mb-8 flex flex-col items-center gap-6">
          <div className="bg-surface-secondary w-full rounded-2xl p-6 shadow-md">
            <div className="flex flex-col gap-6 xl:flex-row xl:items-center xl:justify-between xl:gap-4">
              <p className="text-md text-text-quaternary md:max-w-xl">
                {whoWeBuildFor.description}
              </p>

              <div className="mt-4 flex w-full max-w-3xl flex-col gap-3 md:mt-0">
                <div className="text-text-quaternary flex items-center justify-between text-sm">
                  {whoWeBuildFor.stages.map((stage) => (
                    <span key={stage}>{stage}</span>
                  ))}
                </div>

                <div className="bg-surface-tertiary relative h-4 w-full overflow-hidden rounded-full">
                  <div className="absolute top-0 left-0 h-full w-1/3 bg-purple-500" />
                  <div className="absolute top-0 left-[33%] h-full w-1/3 bg-pink-500" />
                  <div className="absolute top-0 left-[67%] h-full w-1/3 bg-indigo-300" />
                </div>

                <div className="text-md text-text-tertiary grid grid-cols-2 gap-3 pt-2 md:grid-cols-4">
                  {whyChooseUs.industries.map((industry) => (
                    <div
                      key={industry}
                      className="bg-surface-primary rounded-md border border-gray-100 p-3 text-center shadow-sm"
                    >
                      <strong className="block">{industry}</strong>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CORE SERVICES */}
      <section id="services">
        <header className="mb-8">
          <h2 className="text-2xl font-bold">{coreServices.heading}</h2>
          <p className="text-text-tertiary">{coreServices.subheading}</p>
        </header>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {coreServices.services.map((service) => (
            <article
              key={service.title}
              className="bg-surface-secondary rounded-xl p-6 shadow-md transition hover:shadow-xl"
            >
              <h3 className="mb-2 text-lg font-semibold">{service.title}</h3>
              <p className="text-md text-text-tertiary mb-3">{service.description}</p>
              <ul className="text-text-quaternary mt-2 space-y-1 text-sm">
                {service.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      {/* PROCESS */}
      <section id="process">
        <header className="mb-6">
          <h2 className="text-2xl font-bold">{process.heading}</h2>
          <p className="text-text-tertiary">{process.subheading}</p>
        </header>

        <ol className="grid grid-cols-1 gap-6 md:grid-cols-3 xl:grid-cols-5">
          {process.steps.map((step) => (
            <li key={step.number} className="bg-surface-secondary rounded-lg p-6 shadow-sm">
              <div className="mb-2 inline-flex h-10 w-10 items-center justify-center rounded-full bg-purple-50 font-semibold text-purple-700">
                {step.number}
              </div>
              <h4 className="mb-1 font-medium">{step.title}</h4>
              <p className="text-md text-text-quaternary">{step.description}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* TECHNOLOGY STACK */}
      <section id="stack">
        <header className="mb-6">
          <h2 className="text-2xl font-bold">{technologyStack.heading}</h2>
          <p className="text-text-tertiary">{technologyStack.subheading}</p>
        </header>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {technologyStack.categories.map((category) => (
            <div key={category.title} className="bg-surface-secondary rounded-xl p-6 shadow-sm">
              <h4 className="mb-2 font-semibold">{category.title}</h4>
              <p className="text-md text-text-tertiary mb-3">{category.description}</p>
              <ul className="text-text-quaternary text-sm">
                {category.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="text-md text-text-quaternary mt-6">{technologyStack.note}</p>
      </section>

      {/* WHY CHOOSE US */}
      <section id="why">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="bg-surface-secondary rounded-xl p-8 shadow-sm">
            <h3 className="mb-3 text-2xl font-bold">{whyChooseUs.heading}</h3>
            <p className="text-text-tertiary mb-4">{whyChooseUs.description}</p>

            <ul className="text-md space-y-3 text-gray-700">
              {whyChooseUs.reasons.map((reason) => (
                <li key={reason.title}>
                  <strong>{reason.title}:</strong> {reason.description}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-surface-secondary rounded-xl p-8 shadow-sm">
            <h4 className="mb-3 text-lg font-semibold">Industries we serve</h4>
            <p className="text-md text-text-tertiary mb-4">
              Specialized expertise in computer vision and NLP across multiple sectors.
            </p>

            <div className="flex flex-wrap items-center gap-3">
              {whyChooseUs.industries.map((industry) => (
                <div
                  key={industry}
                  className="text-text-quaternary flex h-10 items-center justify-center rounded-md border border-gray-100 bg-gray-50 px-3 text-sm"
                >
                  {industry}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT / CTA */}
      <section id="contact" className="rounded-3xl bg-purple-700 px-2 py-16 text-center shadow-md">
        <h3 className="mb-4 text-3xl font-bold text-white md:text-4xl dark:text-gray-200">
          {cta.heading}
        </h3>
        <p className="mx-auto mb-6 max-w-2xl text-lg text-purple-100 md:text-xl">
          {cta.description}
        </p>
        <div className="flex items-center justify-center gap-3">
          <Link
            href={cta.button.href}
            className="bg-background inline-block rounded-lg px-8 py-3 font-semibold text-purple-600 shadow-lg transition hover:scale-105 hover:bg-gray-300 hover:text-purple-700"
          >
            {cta.button.text}
          </Link>
        </div>
      </section>
    </main>
  );
}
