"use client";

import React from "react";

export default function HeroSection() {
  return (
    <main className="relative bg-white px-10">
      <section className="h-[100dvh] py-6">
        <div className="flex h-full items-center justify-start py-6">
          <div>
            <h1 className="relative text-9xl font-medium text-slate-950 uppercase">
              Y<span>our</span> Vision.
              <span className="absolute inset-0 text-9xl font-medium text-black uppercase mix-blend-difference group-hover:translate-1.5 group-hover:bg-black group-hover:text-white">
                Your Vision.
              </span>
            </h1>

            <h1 className="text-9xl font-medium text-white uppercase mix-blend-difference">
              {"\u2003"}Our Expertise.
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
