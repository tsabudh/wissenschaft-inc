"use client";

import React from "react";

export default function HeroSection() {
  return (
    <main className="relative px-10">
      <section className="h-[100dvh] py-6">
        <div className="flex h-full items-center justify-start py-6">
          <div>
            <h1 className="text-9xl">
              Turn your ideas into <span className="text-blue-500">profits</span>, where innovation
              meets <span className="text-blue-500">success</span>
            </h1>

            <h2 className="mt-4 text-2xl text-slate-700">
              We craft software that&apos;s tailored to your business, easy to adopt, and built to
              last.
            </h2>

            <div className="mt-4 flex gap-4">
              <a
                href="#"
                className="relative before:absolute before:bottom-0 before:left-0 before:w-full before:origin-right before:scale-x-0 before:border-b-2 before:border-blue-400 before:transition-transform before:duration-300 hover:before:origin-left hover:before:scale-x-100"
              >
                Learn more →
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
