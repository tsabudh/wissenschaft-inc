"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { aiMlArticles } from "@/data/articles";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function AIMLPage() {
  return (
    <main className="mx-auto min-h-screen max-w-7xl bg-gray-50 px-6 py-16 text-gray-800 lg:px-20">
      {/* 🟣 HERO */}
      <section className="mb-24 py-10 text-center">
        <motion.h1
          variants={fadeIn}
          initial="hidden"
          animate="show"
          className="mb-6 text-4xl font-bold text-purple-700 md:text-6xl"
        >
          Unlock the Power of Artificial Intelligence & Machine Learning
        </motion.h1>
        <motion.p
          variants={fadeIn}
          initial="hidden"
          animate="show"
          transition={{ delay: 0.2 }}
          className="mx-auto max-w-3xl text-lg text-gray-600"
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
          <h2 className="mb-4 text-3xl font-bold text-gray-900">
            Our Expertise in AI & Machine Learning
          </h2>
          <p className="leading-relaxed text-gray-600">
            Our team builds intelligent systems using modern AI frameworks, enabling organizations
            to automate decisions, detect patterns, and predict outcomes with accuracy and
            confidence. We focus on solving real-world problems with data.
          </p>
          <ul className="mt-4 list-inside list-disc text-gray-600">
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
        <h2 className="mb-8 text-3xl font-bold text-gray-900">Why AI/ML Matters</h2>
        <div className="mx-auto max-w-4xl space-y-6 text-gray-600">
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
        <h2 className="mb-10 text-3xl font-bold text-gray-900">Tools and Ecosystem We Use</h2>
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
              className="bg-background rounded-xl p-6 shadow-md transition-shadow hover:shadow-lg"
            >
              <p className="font-semibold text-gray-700">{tool}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 🔗 TECH STACK INTEGRATION */}
      <section className="mb-24 text-center">
        <h2 className="mb-10 text-3xl font-bold text-gray-900">
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
              className="rounded-xl border border-gray-100 bg-gradient-to-br from-white to-gray-50 p-6 shadow-md transition-shadow hover:shadow-lg"
            >
              <h3 className="mb-2 text-xl font-semibold text-purple-700">{block.title}</h3>
              <p className="text-sm text-gray-600">{block.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ⚖️ WHEN TO USE / NOT USE */}
      <section className="mb-24 text-center">
        <h2 className="mb-10 text-3xl font-bold text-gray-900">
          When to Use AI/ML (and When Not To)
        </h2>
        <p className="mx-auto mb-8 max-w-3xl text-gray-600">
          AI and ML can drive incredible results — but it&apos;s crucial to apply them where they
          create real value.
        </p>
        <div className="mx-auto grid max-w-5xl gap-10 md:grid-cols-2">
          <div className="bg-background rounded-xl border border-green-100 p-8 shadow-md">
            <h3 className="mb-3 text-2xl font-semibold text-emerald-600">When to Use AI/ML</h3>
            <ul className="list-inside list-disc space-y-3 text-left text-gray-600 marker:text-emerald-600">
              <li>Personalization, recommendations, and predictive analytics</li>
              <li>Automation and process optimization</li>
              <li>Pattern recognition or anomaly detection</li>
              <li>Complex decision-making and adaptive systems</li>
            </ul>
          </div>
          <div className="bg-background rounded-xl border border-red-100 p-8 shadow-md">
            <h3 className="mb-3 text-2xl font-semibold text-orange-600">When Not to Use AI/ML</h3>
            <ul className="list-inside list-disc space-y-3 text-left text-gray-600 marker:text-orange-600">
              <li>Simple logic-based systems that don&apos;t require learning</li>
              <li>Small datasets with no clear predictive value</li>
              <li>Projects needing guaranteed deterministic results</li>
              <li>Early-stage MVPs without sufficient data pipelines</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 📰 BLOG / ARTICLES */}
      <section className="mb-24 text-center">
        <h2 className="mb-10 text-3xl font-bold text-gray-900">Insights from Our Team</h2>
        <p className="mx-auto mb-10 max-w-2xl text-gray-600">
          Articles and research from our AI engineers — covering model design, MLOps, and the future
          of intelligent software systems.
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
                <p className="text-sm text-gray-600">{article.description}</p>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 🚀 CTA */}
      <section className="text-foreground mb-24 rounded-xl bg-purple-600 px-4 py-16 text-center">
        <h3 className="mb-4 text-3xl font-bold md:text-4xl">Ready to bring AI to your product?</h3>
        <p className="mb-6 px-4 text-lg md:text-xl">
          Let&apos;s design intelligent, data-driven systems that give your business a competitive
          edge.
        </p>
        <div className="flex items-center justify-center gap-3">
          <Link
            href="/contact"
            className="bg-background rounded-lg px-8 py-3 font-semibold text-purple-600 shadow-lg transition hover:scale-105 hover:bg-gray-100"
          >
            Get Started
          </Link>
          <Link
            href="/contact#brief"
            className="text-foreground hover:bg-background/5 rounded-lg border border-white/30 px-6 py-3"
          >
            Send Brief
          </Link>
        </div>
      </section>
    </main>
  );
}
