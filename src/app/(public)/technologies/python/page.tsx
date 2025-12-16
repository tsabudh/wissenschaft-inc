"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { pythonArticles } from "@/data/articles";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

function Section({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <section className={`mb-24 ${className}`}>{children}</section>;
}

export default function PythonPage() {
  return (
    <main className="text-text-primary mx-auto min-h-screen max-w-7xl px-6 py-16 lg:px-20">
      {/* 🟣 HERO */}
      <Section className="py-10 text-center">
        <motion.h1
          variants={fadeIn}
          initial="hidden"
          animate="show"
          className="text-heading-primary mb-6 text-4xl font-bold md:text-6xl"
        >
          Build Scalable, Data-Driven Solutions with Python
        </motion.h1>
        <motion.p
          variants={fadeIn}
          initial="hidden"
          animate="show"
          transition={{ delay: 0.2 }}
          className="text-text-tertiary mx-auto max-w-3xl text-lg"
        >
          We use Python to power intelligent automation, data-intensive applications, and
          high-performance backends — delivering measurable results that scale with your business.
        </motion.p>
        <p className="mt-3 text-sm text-gray-500">
          Trusted by teams building analytics, automation, and AI-ready systems.
        </p>
      </Section>

      {/* 🧠 OUR EXPERTISE */}
      <Section className="grid items-center gap-12 md:grid-cols-2">
        <div>
          <h2 className="text-heading-secondary mb-4 text-3xl font-bold">
            Our Expertise in Python Development
          </h2>
          <p className="text-text-tertiary leading-relaxed">
            Our engineers craft robust backend systems, analytics pipelines, and AI-enabled
            architectures using Python&apos;s vast ecosystem. We combine deep technical precision
            with real-world business context to deliver software that scales and evolves with you.
          </p>
          <ul className="text-text-tertiary mt-4 list-inside list-disc">
            <li>High-performance APIs built on FastAPI or Django</li>
            <li>Analytics and data processing workflows</li>
            <li>AI-ready foundations for machine learning pipelines</li>
          </ul>
        </div>
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="show"
          className="flex justify-center"
        >
          <Image
            src="/images/tech-python.png"
            alt="Python Development Expertise Illustration"
            width={450}
            height={350}
            className="rounded-xl object-contain"
          />
        </motion.div>
      </Section>

      {/* ⚙️ WHY WE USE PYTHON */}
      <Section className="text-center">
        <h2 className="text-heading-secondary mb-8 text-3xl font-bold">Why We Use Python</h2>
        <div className="text-text-tertiary mx-auto max-w-4xl space-y-6">
          <p>
            Python&apos;s versatility and ecosystem make it a natural fit for data-intensive
            platforms, automation tools, and scalable backend systems. It&apos;s open source,
            battle-tested, and supported by one of the largest developer communities in the world.
          </p>
          <p>
            Whether we&apos;re building analytics dashboards, processing data streams, or
            orchestrating AI workflows, Python provides the flexibility to move fast without
            compromising stability or performance.
          </p>
        </div>
      </Section>

      {/* 🧩 TOOLS & ECOSYSTEM */}
      <Section className="text-center">
        <h2 className="text-heading-secondary mb-10 text-3xl font-bold">
          Tools and Ecosystem We Love
        </h2>
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {["Django", "FastAPI", "Flask", "Celery", "Pandas", "NumPy", "TensorFlow", "PyTorch"].map(
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
      </Section>

      {/* 🔗 TECH STACK INTEGRATION */}
      <Section className="text-center">
        <h2 className="text-heading-secondary mb-10 text-3xl font-bold">
          How Python Fits Into Your Tech Stack
        </h2>
        <div className="mx-auto grid max-w-5xl items-start justify-stretch gap-8 md:grid-cols-3">
          {[
            {
              title: "React / Next.js Frontend",
              desc: "We integrate Python APIs seamlessly with modern frontend for smooth, high-performance user experiences.",
            },
            {
              title: "Python Microservices",
              desc: "Modular service-based architectures powered by FastAPI and Django REST Framework for performance and maintainability.",
            },
            {
              title: "PostgreSQL / Kafka Core",
              desc: "Reliable, event-driven architecture leveraging PostgreSQL, Redis, and Kafka for real-time analytics and stream processing.",
            },
          ].map((block, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -4 }}
              className="bg-surface-secondary h-full rounded-xl border p-6 shadow-md transition-shadow hover:shadow-lg"
            >
              <h3 className="text-text-secondary mb-2 text-xl font-semibold">{block.title}</h3>
              <p className="text-text-tertiary text-sm">{block.desc}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* ⚖️ WHEN TO USE / NOT USE */}
      <Section className="text-center">
        <h2 className="text-heading-secondary mb-10 text-3xl font-bold">
          When to Use Python (and When Not To)
        </h2>
        <p className="text-text-tertiary mx-auto mb-8 max-w-3xl">
          Python is powerful — but like any tool, it shines brightest in the right context.
        </p>
        <div className="mx-auto grid max-w-5xl gap-10 md:grid-cols-2">
          <div className="bg-surface-primary rounded-xl border p-8 shadow-md">
            <h3 className="mb-3 text-2xl font-semibold text-emerald-600">When to Use Python</h3>
            <ul className="text-text-tertiary list-inside list-disc space-y-3 text-left marker:text-emerald-600">
              <li>Data-intensive platforms and analytics dashboards</li>
              <li>Machine learning and AI-powered systems</li>
              <li>Backend APIs and automation workflows</li>
              <li>Internal tools or MVPs needing rapid iteration</li>
            </ul>
          </div>
          <div className="bg-surface-primary rounded-xl border p-8 shadow-md">
            <h3 className="mb-3 text-2xl font-semibold text-orange-600">When Not to Use Python</h3>
            <ul className="text-text-tertiary list-inside list-disc space-y-3 text-left marker:text-orange-600">
              <li>Low-latency, real-time systems (e.g. games, trading engines)</li>
              <li>Mobile apps requiring native performance</li>
              <li>Frontend development (web or mobile)</li>
              <li>CPU-heavy workloads better handled in Rust or Go</li>
            </ul>
          </div>
        </div>
      </Section>

      {/* 📰 BLOG / ARTICLES */}
      {pythonArticles.length > 0 && (
        <Section className="text-center">
          <h2 className="text-heading-secondary mb-10 text-3xl font-bold">
            Insights from Our Team
          </h2>
          <p className="text-text-tertiary mx-auto mb-10 max-w-2xl">
            Articles and case studies from our engineers — exploring Python, backend performance,
            and data engineering best practices.
          </p>
          <div className="grid gap-8 md:grid-cols-3">
            {pythonArticles.map((article) => (
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
        </Section>
      )}

      {/* 🚀 CTA */}
      <Section className="text-foreground rounded-xl bg-purple-400 dark:bg-purple-600 px-4 py-16 text-center">
        <h3 className="mb-4 text-3xl font-bold md:text-4xl">
          Ready to build your next data-driven product?
        </h3>
        <p className="mb-6 px-4 text-lg md:text-xl">
          Tell us about your project and we&apos;ll recommend the fastest path to results.
        </p>
        <div className="flex items-center justify-center gap-3">
          <Link
            href="/contact"
            className="bg-background rounded-lg px-8 py-3 font-semibold text-purple-600 shadow-lg transition hover:scale-105 hover:bg-gray-100"
          >
            Get Started
          </Link>
        </div>
      </Section>
    </main>
  );
}
