"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { aiMlArticles } from "@/data/articles";
import RoundGradient from "@/components/ui/backgrounds/round-gradient";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function AIMLPage() {
  return (
    <main className="text-text-primary mx-auto min-h-screen max-w-7xl px-6 py-16 lg:px-20">
      {/* 🟣 HERO */}
      <section className="mb-24 py-10 text-center">
        <motion.h1
          variants={fadeIn}
          initial="hidden"
          animate="show"
          className="text-text-primary mb-6 text-4xl font-bold md:text-6xl"
        >
          Unlock the Power of Artificial Intelligence & Machine Learning
        </motion.h1>
        <motion.p
          variants={fadeIn}
          initial="hidden"
          animate="show"
          transition={{ delay: 0.2 }}
          className="text-text-tertiary mx-auto max-w-3xl text-lg"
        >
          We help teams design and deploy AI-driven systems that turn data into intelligence — from
          predictive models to real-time decision automation.
        </motion.p>
        <p className="mt-3 text-sm text-gray-500">
          Empowering innovation through applied AI and ML engineering.
        </p>
      </section>

      {/* 🧠 OUR EXPERTISE */}
      <section className="mb-24 grid items-center gap-12 md:grid-cols-2">
        <div>
          <h2 className="text-text-primary mb-4 text-3xl font-bold">
            Our Expertise in AI & Machine Learning
          </h2>
          <p className="text-text-tertiary leading-relaxed">
            Our team builds intelligent systems using modern AI frameworks, enabling organizations
            to automate decisions, detect patterns, and predict outcomes with accuracy and
            confidence. We focus on solving real-world problems with data.
          </p>
          <ul className="text-text-tertiary mt-4 list-inside list-disc">
            <li>Custom ML model development and deployment</li>
            <li>Data pipeline engineering for large-scale training</li>
            <li>Real-time inference with scalable APIs</li>
          </ul>
        </div>
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="show"
          className="flex justify-center"
        >
          <Image
            src="/images/tech-aiml.png"
            alt="AI and Machine Learning Illustration"
            width={450}
            height={350}
            className="rounded-xl object-contain"
          />
        </motion.div>
      </section>

      {/* ⚙️ WHY WE USE AI/ML */}
      <section className="mb-24 text-center">
        <h2 className="text-text-primary mb-8 text-3xl font-bold">Why AI/ML Matters</h2>
        <div className="text-text-tertiary mx-auto max-w-4xl space-y-6">
          <p>
            AI and ML are at the heart of digital transformation — driving personalization,
            automation, and intelligent decision-making across industries. Our solutions empower
            businesses to act on insights faster and smarter.
          </p>
          <p>
            From recommendation systems to anomaly detection, we build machine learning pipelines
            that continuously learn, adapt, and improve performance over time.
          </p>
        </div>
      </section>

      {/* 🧩 TOOLS & ECOSYSTEM */}
      <section className="mb-24 text-center">
        <h2 className="text-text-primary mb-10 text-3xl font-bold">Tools and Ecosystem We Use</h2>
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {[
            "TensorFlow",
            "PyTorch",
            "Scikit-Learn",
            "LangChain",
            "OpenAI API",
            "Hugging Face",
            "MLflow",
            "Kubeflow",
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

      {/* 🔗 TECH STACK INTEGRATION */}
      <section className="mb-24 text-center">
        <h2 className="text-text-primary mb-10 text-3xl font-bold">
          How AI/ML Fits Into Your Tech Stack
        </h2>
        <div className="mx-auto grid max-w-5xl items-start gap-8 md:grid-cols-3">
          {[
            {
              title: "Data Engineering Backbone",
              desc: "We build scalable data pipelines using Kafka, Spark, and Airflow for continuous model training and feedback loops.",
            },
            {
              title: "Intelligent APIs",
              desc: "Expose ML models via production-ready APIs for real-time predictions and recommendations.",
            },
            {
              title: "Integrated Analytics",
              desc: "Combine AI insights with your existing dashboards and business workflows to unlock data-driven operations.",
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

      {/* ⚖️ WHEN TO USE / NOT USE */}
      <section className="mb-24 text-center">
        <h2 className="text-text-primary mb-10 text-3xl font-bold">
          When to Use AI/ML (and When Not To)
        </h2>
        <p className="text-text-tertiary mx-auto mb-8 max-w-3xl">
          AI and ML can drive incredible results — but it&apos;s crucial to apply them where they
          create real value.
        </p>
        <div className="mx-auto grid max-w-5xl gap-10 md:grid-cols-2">
          <div className="bg-surface-primary rounded-xl border p-8 shadow-md">
            <h3 className="mb-3 text-2xl font-semibold text-emerald-600">When to Use AI/ML</h3>
            <ul className="text-text-tertiary list-inside list-disc space-y-3 text-left marker:text-emerald-600">
              <li>Personalization, recommendations, and predictive analytics</li>
              <li>Automation and process optimization</li>
              <li>Pattern recognition or anomaly detection</li>
              <li>Complex decision-making and adaptive systems</li>
            </ul>
          </div>
          <div className="bg-surface-primary rounded-xl border p-8 shadow-md">
            <h3 className="mb-3 text-2xl font-semibold text-orange-600">When Not to Use AI/ML</h3>
            <ul className="text-text-tertiary list-inside list-disc space-y-3 text-left marker:text-orange-600">
              <li>Simple logic-based systems that don&apos;t require learning</li>
              <li>Small datasets with no clear predictive value</li>
              <li>Projects needing guaranteed deterministic results</li>
              <li>Early-stage MVPs without sufficient data pipelines</li>
            </ul>
          </div>
        </div>
      </section>
      <RoundGradient variant="fifth" />

      {/* 📰 BLOG / ARTICLES */}
      {aiMlArticles.length > 0 && (
        <section className="mb-24 text-center">
          <h2 className="text-text-primary mb-10 text-3xl font-bold">Insights from Our Team</h2>
          <p className="text-text-tertiary mx-auto mb-10 max-w-2xl">
            Articles and research from our AI engineers — covering model design, MLOps, and the
            future of intelligent software systems.
          </p>
          <div className="grid gap-8 md:grid-cols-3">
            {aiMlArticles.map((article) => (
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
      <section className="text-background rounded-3xl bg-green-700 px-2 py-16 text-center shadow-md">
        <h3 className="mb-4 text-3xl font-bold md:text-4xl">Ready to bring AI to your product?</h3>
        <p className="text-background mx-auto mb-6 max-w-2xl text-lg md:text-xl">
          Let&apos;s design intelligent, data-driven systems that give your business a competitive
          edge.
        </p>
        <div className="flex items-center justify-center gap-3">
          <Link
            href="/contact"
            className="bg-background inline-block rounded-lg px-8 py-3 font-semibold text-green-700 shadow-lg transition hover:scale-105 hover:bg-gray-300"
          >
            Get Started
          </Link>
        </div>
      </section>
    </main>
  );
}
