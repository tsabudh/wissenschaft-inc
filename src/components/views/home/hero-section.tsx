"use client";

import Link from "next/link";
import React from "react";

export default function HeroSection() {
  return (
    <main className="relative overflow-hidden bg-white px-6 lg:px-20">
      <section className="flex min-h-[100dvh] items-center py-20">
        <div className="mx-auto max-w-5xl text-left">
          {/* Headline */}
          <h1 className="text-4xl leading-tight font-extrabold text-slate-900 sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
            Turn your ideas into <span className="text-blue-600">profits</span>, where innovation
            meets <span className="text-blue-600">success</span>.
          </h1>

          {/* Subheading */}
          <h2 className="mt-6 max-w-3xl text-lg font-medium text-slate-600 sm:text-xl md:text-2xl">
            We craft software that&apos;s tailored to your business, easy to adopt, and built to
            last.
          </h2>

          {/* CTA */}
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link href="/about" className="">
              Learn more →
            </Link>

            <Link
              href="/contact"
              className="text-md rounded-lg bg-blue-600 px-4 py-2 font-medium text-white shadow-md transition hover:bg-blue-700"
            >
              Get started
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
