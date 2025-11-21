"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { gcpArticles } from "@/data/articles";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function GCPPage() {
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
          Build and Scale Seamlessly with Google Cloud Platform
        </motion.h1>
        <motion.p
          variants={fadeIn}
          initial="hidden"
          animate="show"
          transition={{ delay: 0.2 }}
          className="mx-auto max-w-3xl text-lg text-gray-600"
        >
          We architect, deploy, and optimize scalable cloud infrastructures on GCP — empowering
          teams to innovate faster, operate reliably, and reduce costs with confidence.
        </motion.p>
        <p className="mt-3 text-sm text-gray-500">
          Certified experts in Google Cloud&apos;s compute, storage, and AI ecosystem.
        </p>
      </section>

      {/* 🧠 OUR EXPERTISE */}
      <section className="mb-24 grid items-center gap-12 md:grid-cols-2">
        <div>
          <h2 className="mb-4 text-3xl font-bold text-gray-900">
            Our Expertise in Google Cloud Platform
          </h2>
          <p className="leading-relaxed text-gray-600">
            From startups to enterprise systems, our engineers design cloud-native architectures
            that leverage GCP&apos;s reliability, automation, and AI capabilities. We focus on
            performance, scalability, and cost efficiency — all while maintaining developer
            velocity.
          </p>
          <ul className="mt-4 list-inside list-disc text-gray-600">
            <li>Infrastructure automation with Terraform and Cloud Build</li>
            <li>Containerized workloads on GKE and Cloud Run</li>
            <li>Serverless applications using Cloud Functions</li>
          </ul>
        </div>
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="show"
          className="flex justify-center"
        >
          <Image
            src="/images/tech-gcp.png"
            alt="Google Cloud Platform Illustration"
            width={450}
            height={350}
            className="rounded-xl object-contain"
          />
        </motion.div>
      </section>

      {/* ⚙️ WHY WE USE GCP */}
      <section className="mb-24 text-center">
        <h2 className="mb-8 text-3xl font-bold text-gray-900">Why We Choose Google Cloud</h2>
        <div className="mx-auto max-w-4xl space-y-6 text-gray-600">
          <p>
            Google Cloud provides an unmatched combination of scalability, data intelligence, and
            sustainability. It&apos;s designed to power modern, distributed systems while keeping
            cost and performance in balance.
          </p>
          <p>
            Whether we&apos;re running data pipelines, deploying microservices, or leveraging
            BigQuery for analytics, GCP&apos;s ecosystem allows our team to build faster, scale
            smarter, and maintain reliability across global workloads.
          </p>
        </div>
      </section>

      {/* 🧩 TOOLS & ECOSYSTEM */}
      <section className="mb-24 text-center">
        <h2 className="mb-10 text-3xl font-bold text-gray-900">Tools and Services We Use on GCP</h2>
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {[
            "Compute Engine",
            "Kubernetes Engine (GKE)",
            "Cloud Run",
            "Cloud Functions",
            "BigQuery",
            "Pub/Sub",
            "Cloud Storage",
            "Cloud Build",
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
          How GCP Integrates With Your Tech Stack
        </h2>
        <div className="mx-auto grid max-w-5xl items-start gap-8 md:grid-cols-3">
          {[
            {
              title: "Containerized Infrastructure",
              desc: "We deploy and manage scalable microservices on GKE and Cloud Run, ensuring high availability and efficiency.",
            },
            {
              title: "Data & Analytics Platforms",
              desc: "Leverage BigQuery, Dataflow, and AI APIs to transform raw data into actionable insights and business intelligence.",
            },
            {
              title: "CI/CD & DevOps Pipelines",
              desc: "Automate builds, testing, and deployments using Cloud Build, Artifact Registry, and GitHub Actions.",
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
          When to Use GCP (and When Not To)
        </h2>
        <p className="mx-auto mb-8 max-w-3xl text-gray-600">
          GCP is an incredible platform — but it shines brightest in certain contexts.
        </p>
        <div className="mx-auto grid max-w-5xl gap-10 md:grid-cols-2">
          <div className="bg-background rounded-xl border border-green-100 p-8 shadow-md">
            <h3 className="mb-3 text-2xl font-semibold text-emerald-600">When to Use GCP</h3>
            <ul className="list-inside list-disc space-y-3 text-left text-gray-600 marker:text-emerald-600">
              <li>Cloud-native applications needing global scale</li>
              <li>AI/ML workloads leveraging Tensor Processing Units (TPUs)</li>
              <li>Data engineering and analytics at petabyte scale</li>
              <li>Organizations already using Google Workspace or Firebase</li>
            </ul>
          </div>
          <div className="bg-background rounded-xl border border-red-100 p-8 shadow-md">
            <h3 className="mb-3 text-2xl font-semibold text-orange-600">When Not to Use GCP</h3>
            <ul className="list-inside list-disc space-y-3 text-left text-gray-600 marker:text-orange-600">
              <li>On-premise or hybrid environments needing full AWS/Azure integration</li>
              <li>Legacy systems requiring deep VM migration support</li>
              <li>Extremely low-latency regional deployments with minimal data center presence</li>
              <li>Organizations already locked into another cloud vendor</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 📰 BLOG / ARTICLES */}
      <section className="mb-24 text-center">
        <h2 className="mb-10 text-3xl font-bold text-gray-900">Insights from Our Cloud Team</h2>
        <p className="mx-auto mb-10 max-w-2xl text-gray-600">
          Articles and case studies from our engineers — covering GCP architecture, DevOps, and cost
          optimization best practices.
        </p>
        <div className="grid gap-8 md:grid-cols-3">
          {gcpArticles.map((article) => (
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
        <h3 className="mb-4 text-3xl font-bold md:text-4xl">
          Ready to take your infrastructure to the cloud?
        </h3>
        <p className="mb-6 px-4 text-lg md:text-xl">
          Let&apos;s design a scalable, secure, and efficient GCP architecture that powers your next
          breakthrough.
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
