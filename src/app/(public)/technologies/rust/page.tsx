"use client";

import RoundGradient from "@/components/ui/backgrounds/round-gradient";
import { rustArticles } from "@/data/articles";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function RustPage() {
  return (
    <main className="text-text-primary mx-auto min-h-screen max-w-7xl px-6 py-16 lg:px-20">
      {/* 🦀 HERO */}
      <section className="py-10 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-heading-primary mb-6 text-4xl font-bold md:text-6xl"
        >
          Build System-Critical Software with Rust
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-text-tertiary mx-auto max-w-3xl text-lg"
        >
          We use Rust to build ultra-reliable, high-performance systems where efficiency, safety,
          and concurrency matter most — from backend infrastructure to edge computing and IoT.
        </motion.p>
      </section>

      {/* ⚙️ EXPERTISE */}
      <section className="mb-24 grid items-center gap-12 md:grid-cols-2">
        <div>
          <h2 className="text-heading-secondary mb-4 text-3xl font-bold">
            Our Expertise in Rust Engineering
          </h2>
          <p className="text-text-tertiary leading-relaxed">
            Our team applies Rust in environments where performance and predictability are
            non-negotiable. From distributed backend systems and real-time services to embedded and
            cloud-native applications, we engineer software that&apos;s fast, safe, and built to
            last.
          </p>
        </div>
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center"
        >
          <Image
            src="/images/tech-rust.png"
            alt="Rust Expertise Illustration"
            width={450}
            height={350}
          />
        </motion.div>
      </section>

      {/* 🔒 WHY RUST */}
      <section className="mb-24 text-center">
        <h2 className="text-heading-secondary mb-8 text-3xl font-bold">Why We Use Rust</h2>
        <div className="text-text-tertiary mx-auto max-w-4xl space-y-6">
          <p>
            Rust delivers the power of low-level languages like C++ with the safety guarantees of
            modern programming. Its ownership model eliminates data races and memory leaks at
            compile time, ensuring stability even under extreme workloads.
          </p>
          <p>
            Whether building performance-critical backend systems, compilers, or WebAssembly
            applications, Rust&apos;s balance of control and safety helps us ship faster and with
            greater confidence.
          </p>
        </div>
      </section>

      {/* 🧩 TOOLS & ECOSYSTEM */}
      <section className="mb-24 text-center">
        <h2 className="text-heading-secondary mb-10 text-3xl font-bold">
          Tools and Ecosystem We Love
        </h2>
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {[
            "Actix Web",
            "Tokio",
            "Axum",
            "Rocket",
            "Tonic (gRPC)",
            "Serde",
            "Diesel",
            "SeaORM",
          ].map((tool) => (
            <motion.div
              key={tool}
              whileHover={{ scale: 1.05 }}
              className="bg-surface-primary rounded-xl p-6 shadow-md transition-shadow hover:shadow-lg"
            >
              <p className="text-text-secondary font-semibold">{tool}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <RoundGradient variant="fourth" />


      {/* 🔗 TECH STACK INTEGRATION */}
      <section className="mb-24 text-center">
        <h2 className="text-heading-secondary mb-10 text-3xl font-bold">
          How Rust Fits Into Your Tech Stack
        </h2>
        <div className="mx-auto grid max-w-5xl items-start gap-8 md:grid-cols-3">
          {[
            {
              title: "High-Performance Backends",
              desc: "We build low-latency services and API backends using Rust frameworks like Actix and Axum — ideal for systems requiring real-time performance.",
            },
            {
              title: "Systems & Infrastructure",
              desc: "Rust is our choice for CLI tools, data pipelines, and infrastructure automation where reliability and speed are mission-critical.",
            },
            {
              title: "WebAssembly & Cross-Platform",
              desc: "With WebAssembly, Rust powers secure, high-speed modules that integrate seamlessly with JavaScript, Node.js, or browsers.",
            },
          ].map((block, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -4 }}
              className="bg-surface-secondary h-full rounded-xl border p-6 shadow-md transition-shadow hover:shadow-lg"
            >
              <h3 className="mb-2 text-xl font-semibold text-orange-700">{block.title}</h3>
              <p className="text-text-tertiary text-sm">{block.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ⚖️ WHEN TO USE RUST */}
      <section className="mb-24 text-center">
        <h2 className="text-heading-secondary mb-10 text-3xl font-bold">
          When to Use Rust (and When Not To)
        </h2>
        <div className="mx-auto grid max-w-5xl gap-10 md:grid-cols-2">
          <div className="bg-background rounded-xl border p-8 shadow-md">
            <h3 className="mb-3 text-2xl font-semibold text-emerald-600">When to Use Rust</h3>
            <ul className="text-text-tertiary list-inside list-disc space-y-3 text-left marker:text-emerald-600">
              <li>Performance-critical backends and APIs</li>
              <li>Low-level systems and embedded software</li>
              <li>Concurrent or parallel processing workloads</li>
              <li>High-security or safety-critical environments</li>
            </ul>
          </div>
          <div className="bg-background rounded-xl border p-8 shadow-md">
            <h3 className="mb-3 text-2xl font-semibold text-orange-600">When Not to Use Rust</h3>
            <ul className="text-text-tertiary list-inside list-disc space-y-3 text-left marker:text-orange-600">
              <li>Rapid prototyping or MVPs needing fast iteration</li>
              <li>Projects where ecosystem maturity is a concern</li>
              <li>Teams without systems-level programming experience</li>
              <li>Simple scripts or small automation tasks</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 📰 BLOG SECTION (Placeholder for now) */}
      {rustArticles.length > 0 && (
        <section className="mb-24 text-center">
          <h2 className="text-heading-secondary mb-10 text-3xl font-bold">
            Insights from Our Team
          </h2>
          <p className="text-text-tertiary mx-auto mb-10 max-w-2xl">
            Articles from our engineers exploring Rust&apos;s role in building safe, concurrent, and
            high-performance systems — from backend infrastructure to tooling.
          </p>
          <div className="grid gap-8 md:grid-cols-3">
            {rustArticles.map((article) => (
              <motion.div
                key={article.name}
                whileHover={{ scale: 1.03 }}
                className="bg-background rounded-xl p-6 text-left shadow-md transition-shadow hover:shadow-lg"
              >
                <Link href={article.link}>
                  <div className="mb-4 h-40 w-full overflow-hidden rounded-lg bg-gray-200">
                    {article.imageUrl ? (
                      <Image
                        src={article.imageUrl}
                        alt={article.name}
                        width={400}
                        height={160}
                        className="h-full w-full object-cover"
                      />
                    ) : (
                      <div className="h-full w-full bg-gradient-to-br from-sky-500 to-indigo-500"></div>
                    )}
                  </div>
                  <h3 className="mb-2 text-lg font-semibold">{article.name}</h3>
                  <p className="text-text-tertiary text-sm">{article.description}</p>
                </Link>
              </motion.div>
            ))}
          </div>
        </section>
      )}

      {/* 🚀 CTA */}
      <section
        id="contact"
        className="text-foreground rounded-xl bg-orange-700 px-4 py-16 text-center"
      >
        <h3 className="mb-4 text-3xl font-bold md:text-4xl text-white">
          Ready to engineer high-performance systems with Rust?
        </h3>
        <p className="mb-6 px-4 text-lg text-gray-100 md:text-xl">
          Let&apos;s build secure, lightning-fast infrastructure designed to scale with precision.
        </p>
        <div className="flex items-center justify-center gap-3">
          <Link
            href="/contact"
            className="bg-background rounded-lg px-8 py-3 font-semibold text-orange-700 shadow-lg transition hover:scale-105 hover:bg-gray-100"
          >
            Get Started
          </Link>
        </div>
      </section>
    </main>
  );
}
