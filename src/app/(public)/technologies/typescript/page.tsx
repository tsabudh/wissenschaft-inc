"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { typescriptArticles } from "@/data/articles";

export default function TypeScriptPage() {
  return (
    <main className="text-text-primary mx-auto min-h-screen max-w-7xl px-6 py-16 lg:px-20">
      {/* 🟣 HERO */}
      <section className="py-10 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-heading-primary mb-6 text-4xl font-bold md:text-6xl"
        >
          Build Reliable, Scalable Systems with TypeScript
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-text-tertiary mx-auto max-w-3xl text-lg"
        >
          We use TypeScript to deliver maintainable, high-performance applications — from
          cloud-native services to large-scale frontend systems. Strong typing and modern tooling
          ensure your software grows without breaking.
        </motion.p>
      </section>

      {/* 🧠 EXPERTISE */}
      <section className="mb-24 grid items-center gap-12 md:grid-cols-2">
        <div>
          <h2 className="text-heading-secondary mb-4 text-3xl font-bold">
            Our Expertise in TypeScript Development
          </h2>
          <p className="text-text-tertiary leading-relaxed">
            From REST APIs and real-time systems to enterprise web apps, our engineers leverage
            TypeScript&apos;s type safety and modular architecture to ensure reliability and
            maintainability. We architect solutions that evolve gracefully with your business while
            minimizing technical debt.
          </p>
        </div>
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center"
        >
          <Image
            src="/images/tech-typescript.png"
            alt="TypeScript Expertise Illustration"
            width={450}
            height={350}
          />
        </motion.div>
      </section>

      {/* ⚙️ WHY TYPESCRIPT */}
      <section className="mb-24 text-center">
        <h2 className="text-heading-secondary mb-8 text-3xl font-bold">Why We Use TypeScript</h2>
        <div className="text-text-tertiary mx-auto max-w-4xl space-y-6">
          <p>
            TypeScript brings the best of both worlds — JavaScript&apos;s flexibility and the
            confidence of a statically typed system. It helps us catch bugs early, scale codebases
            safely, and improve team collaboration across large projects.
          </p>
          <p>
            Whether we&apos;re building API gateways, real-time dashboards, or microservice
            architectures, TypeScript&apos;s modern tooling and language features enable faster
            delivery without sacrificing long-term maintainability.
          </p>
        </div>
      </section>

      {/* 🧩 TOOLS & FRAMEWORKS */}
      <section className="mb-24 text-center">
        <h2 className="text-heading-secondary mb-10 text-3xl font-bold">
          Tools and Frameworks We Love
        </h2>
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {["NestJS", "Express", "Next.js", "React", "TypeORM", "Prisma", "tRPC", "Zod"].map(
            (tool) => (
              <motion.div
                key={tool}
                whileHover={{ scale: 1.05 }}
                className="bg-surface-primary rounded-xl p-6 shadow-md transition-shadow hover:shadow-lg"
              >
                <p className="text-text-secondary font-semibold">{tool}</p>
              </motion.div>
            )
          )}
        </div>
      </section>

      {/* 🔗 TECH STACK INTEGRATION */}
      <section className="mb-24 text-center">
        <h2 className="text-heading-secondary mb-10 text-3xl font-bold">
          How TypeScript Fits Into Your Tech Stack
        </h2>
        <div className="mx-auto grid max-w-5xl items-start gap-8 md:grid-cols-3">
          {[
            {
              title: "Modern Web Apps",
              desc: "We use TypeScript with React and Next.js to build responsive, dynamic web applications that are both robust and maintainable.",
            },
            {
              title: "Backend Microservices",
              desc: "Clean, modular architectures built using NestJS or Express, with strong typing and dependency injection for scalability.",
            },
            {
              title: "DevOps & Cloud Integrations",
              desc: "TypeScript integrates seamlessly with CI/CD pipelines, infrastructure as code (Pulumi/Terraform), and containerized deployments.",
            },
          ].map((block, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -4 }}
              className="bg-surface-secondary rounded-xl border p-6 shadow-md transition-shadow hover:shadow-lg"
            >
              <h3 className="text-text-secondary mb-2 text-xl font-semibold">{block.title}</h3>
              <p className="text-text-tertiary text-sm">{block.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ⚖️ WHEN TO USE TYPESCRIPT */}
      <section className="mb-24 text-center">
        <h2 className="text-heading-secondary mb-10 text-3xl font-bold">
          When to Use TypeScript (and When Not To)
        </h2>
        <div className="mx-auto grid max-w-5xl gap-10 md:grid-cols-2">
          <div className="bg-surface-primary rounded-xl border p-8 shadow-md">
            <h3 className="mb-3 text-2xl font-semibold text-emerald-600">When to Use TypeScript</h3>
            <ul className="text-text-tertiary list-inside list-disc space-y-3 text-left marker:text-emerald-600">
              <li>Large-scale frontend or backend projects</li>
              <li>APIs and microservices shared by multiple teams</li>
              <li>Applications requiring long-term maintainability</li>
              <li>Cross-platform systems (React, Node.js, Deno)</li>
            </ul>
          </div>
          <div className="bg-surface-primary rounded-xl border p-8 shadow-md">
            <h3 className="mb-3 text-2xl font-semibold text-orange-600">
              When Not to Use TypeScript
            </h3>
            <ul className="text-text-tertiary list-inside list-disc space-y-3 text-left marker:text-orange-600">
              <li>Very small projects or quick prototypes</li>
              <li>Performance-critical low-level systems</li>
              <li>Teams unfamiliar with static typing</li>
              <li>Pure frontend experiments or UI demos</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 📰 BLOG SECTION */}
      {typescriptArticles.length > 0 && (
        <section className="mb-24 text-center">
          <h2 className="text-heading-secondary mb-10 text-3xl font-bold">
            Insights from Our Team
          </h2>
          <p className="text-text-tertiary mx-auto mb-10 max-w-2xl">
            Articles and case studies from our engineers exploring TypeScript&apos;s role in
            large-scale architecture, reliability, and developer productivity.
          </p>
          <div className="grid gap-8 md:grid-cols-3">
            {typescriptArticles.map((article) => (
              <motion.div
                key={article.name}
                whileHover={{ scale: 1.03 }}
                className="bg-background rounded-xl p-6 text-left shadow-md"
              >
                <Link href={article.link}>
                  <div className="mb-4 h-40 w-full rounded-lg bg-gray-200">
                    {article?.imageUrl ? (
                      <Image src={article.imageUrl} alt={article.name} height={160} width={160} />
                    ) : (
                      <div className="h-full w-full bg-gradient-to-br from-sky-500 to-blue-500"></div>
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
        className="text-foreground rounded-xl bg-purple-400 px-4 py-16 text-center dark:bg-purple-600"
      >
        <h3 className="mb-4 text-3xl font-bold md:text-4xl">
          Ready to scale your next big idea with TypeScript?
        </h3>
        <p className="mb-6 px-4 text-lg md:text-xl">
          Let&apos;s build software that&apos;s type-safe, scalable, and future-proof — together.
        </p>
        <div className="flex items-center justify-center gap-3">
          <Link
            href="/contact"
            className="bg-background rounded-lg px-8 py-3 font-semibold text-purple-600 shadow-lg transition hover:scale-105 hover:bg-gray-100"
          >
            Get Started
          </Link>
        </div>
      </section>
    </main>
  );
}
