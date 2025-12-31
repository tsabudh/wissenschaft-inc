"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { dataEngineeringArticles } from "@/data/articles";
import RoundGradient from "@/components/ui/backgrounds/round-gradient";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function DataEngineeringPage() {
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
          Build Scalable Data Pipelines and Infrastructure
        </motion.h1>
        <motion.p
          variants={fadeIn}
          initial="hidden"
          animate="show"
          transition={{ delay: 0.2 }}
          className="text-text-tertiary mx-auto max-w-3xl text-lg"
        >
          We design and deploy robust data engineering solutions that power real-time analytics,
          machine learning, and business intelligence across your organization.
        </motion.p>
        <p className="mt-3 text-sm text-gray-500">
          Building the data foundation for intelligent decision-making.
        </p>
      </section>

      {/* 🧠 OUR EXPERTISE */}
      <section className="mb-24 grid items-center gap-12 md:grid-cols-2">
        <div>
          <h2 className="text-text-primary mb-4 text-3xl font-bold">
            Our Expertise in Data Engineering
          </h2>
          <p className="text-text-tertiary leading-relaxed">
            Our team builds scalable data architectures that support real-time analytics, machine
            learning pipelines, and enterprise-grade reporting. We focus on reliability,
            performance, and maintainability.
          </p>
          <ul className="text-text-tertiary mt-4 list-inside list-disc">
            <li>Scalable data pipeline design and implementation</li>
            <li>Real-time streaming and batch processing</li>
            <li>Data warehouse and lakehouse architecture</li>
          </ul>
        </div>
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="show"
          className="flex justify-center"
        >
          <Image
            src="/images/tech-data.png"
            alt="Data Engineering Illustration"
            width={450}
            height={350}
            className="rounded-xl object-contain"
          />
        </motion.div>
      </section>

      {/* ⚙️ WHY DATA ENGINEERING MATTERS */}
      <section className="mb-24 text-center">
        <h2 className="text-text-primary mb-8 text-3xl font-bold">Why Data Engineering Matters</h2>
        <div className="text-text-tertiary mx-auto max-w-4xl space-y-6">
          <p>
            Data engineering is the backbone of modern analytics and AI — ensuring data flows
            reliably, scales efficiently, and powers informed decision-making. Our solutions enable
            organizations to harness their data assets effectively.
          </p>
          <p>
            From real-time streaming to batch processing, we build data pipelines that are reliable,
            cost-effective, and optimized for your business needs.
          </p>
        </div>
      </section>

      {/* 🧩 TOOLS & ECOSYSTEM */}
      <section className="mb-24 text-center">
        <h2 className="text-text-primary mb-10 text-3xl font-bold">Tools and Ecosystem We Use</h2>
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {[
            "Apache Spark",
            "Kafka",
            "Airflow",
            "Snowflake",
            "AWS Glue",
            "Databricks",
            "Tableau",
            "Power BI",
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
          How Data Engineering Fits Into Your Tech Stack
        </h2>
        <div className="mx-auto grid max-w-5xl items-start gap-8 md:grid-cols-3">
          {[
            {
              title: "Data Ingestion & Collection",
              desc: "Reliable data collection from multiple sources using Kafka, AWS Kinesis, and ETL frameworks.",
            },
            {
              title: "Processing & Transformation",
              desc: "Transform raw data into actionable insights using Spark, Airflow, and modern data orchestration tools.",
            },
            {
              title: "Storage & Analytics",
              desc: "Optimize data storage with data warehouses and lakehouses for fast queries and cost efficiency.",
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
          When to Use Data Engineering (and When Not To)
        </h2>
        <p className="text-text-tertiary mx-auto mb-8 max-w-3xl">
          Data engineering solves specific challenges — knowing when to invest is key to maximizing
          ROI.
        </p>
        <div className="mx-auto grid max-w-5xl gap-10 md:grid-cols-2">
          <div className="bg-surface-primary rounded-xl border p-8 shadow-md">
            <h3 className="mb-3 text-2xl font-semibold text-emerald-600">
              When to Use Data Engineering
            </h3>
            <ul className="text-text-tertiary list-inside list-disc space-y-3 text-left marker:text-emerald-600">
              <li>High-volume data from multiple sources</li>
              <li>Real-time analytics and decision-making requirements</li>
              <li>Supporting machine learning pipelines at scale</li>
              <li>Complex data transformations and quality assurance</li>
            </ul>
          </div>
          <div className="bg-surface-primary rounded-xl border p-8 shadow-md">
            <h3 className="mb-3 text-2xl font-semibold text-orange-600">
              When Not to Use Data Engineering
            </h3>
            <ul className="text-text-tertiary list-inside list-disc space-y-3 text-left marker:text-orange-600">
              <li>Small datasets that fit in traditional databases</li>
              <li>One-time analysis or ad-hoc queries</li>
              <li>Simple CRUD applications with minimal analytics</li>
              <li>Projects without clear ROI on infrastructure costs</li>
            </ul>
          </div>
        </div>
      </section>
      <RoundGradient variant="fifth" />

      {/* 📰 BLOG / ARTICLES */}
      {dataEngineeringArticles.length > 0 && (
        <section className="mb-24 text-center">
          <h2 className="text-text-primary mb-10 text-3xl font-bold">Insights from Our Team</h2>
          <p className="text-text-tertiary mx-auto mb-10 max-w-2xl">
            Articles and case studies from our data engineering experts — covering architecture
            patterns, optimization strategies, and industry best practices.
          </p>
          <div className="grid gap-8 md:grid-cols-3">
            {dataEngineeringArticles.map((article) => (
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
                      <div className="h-full w-full bg-gradient-to-br from-blue-500 to-cyan-500"></div>
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
        <h3 className="mb-4 text-3xl font-bold md:text-4xl">
          Ready to build your data foundation?
        </h3>
        <p className="text-background mx-auto mb-6 max-w-2xl text-lg md:text-xl">
          Let&apos;s design scalable, reliable data infrastructure that powers your analytics and
          business growth.
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
