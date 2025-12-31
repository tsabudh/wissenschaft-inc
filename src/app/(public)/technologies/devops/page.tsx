"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { devopsArticles } from "@/data/articles";
import RoundGradient from "@/components/ui/backgrounds/round-gradient";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function DevOpsPage() {
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
          Build, Deploy, and Scale with DevOps Excellence
        </motion.h1>
        <motion.p
          variants={fadeIn}
          initial="hidden"
          animate="show"
          transition={{ delay: 0.2 }}
          className="text-text-tertiary mx-auto max-w-3xl text-lg"
        >
          We accelerate software delivery through automated CI/CD pipelines, infrastructure as code,
          and cloud-native practices — enabling teams to release faster, safer, and more reliably.
        </motion.p>
        <p className="mt-3 text-sm text-gray-500">
          Bridging development and operations for continuous excellence.
        </p>
      </section>

      {/* 🔧 OUR EXPERTISE */}
      <section className="mb-24 grid items-center gap-12 md:grid-cols-2">
        <div>
          <h2 className="text-text-primary mb-4 text-3xl font-bold">Our DevOps Expertise</h2>
          <p className="text-text-tertiary leading-relaxed">
            Our DevOps engineers design and maintain robust infrastructure, automate deployment
            pipelines, and implement monitoring solutions that keep your applications running
            smoothly. We focus on reliability, scalability, and operational excellence.
          </p>
          <ul className="text-text-tertiary mt-4 list-inside list-disc">
            <li>Automated CI/CD pipelines and infrastructure as code</li>
            <li>Cloud platform management (AWS, Azure, GCP)</li>
            <li>Container orchestration and Kubernetes deployment</li>
            <li>Monitoring, logging, and observability solutions</li>
          </ul>
        </div>
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="show"
          className="flex justify-center"
        >
          <Image
            src="/images/tech-devops.png"
            alt="DevOps Illustration"
            width={450}
            height={350}
            className="rounded-xl object-contain"
          />
        </motion.div>
      </section>

      {/* ⚙️ WHY DEVOPS MATTERS */}
      <section className="mb-24 text-center">
        <h2 className="text-text-primary mb-8 text-3xl font-bold">Why DevOps Matters</h2>
        <div className="text-text-tertiary mx-auto max-w-4xl space-y-6">
          <p>
            DevOps practices transform how teams build, test, and deploy software — reducing time to
            market, minimizing downtime, and improving overall product quality. It&apos;s not just a
            toolset; it&apos;s a cultural shift toward collaboration and continuous improvement.
          </p>
          <p>
            From automated deployments to real-time monitoring and incident response, DevOps enables
            organizations to maintain high availability, security, and performance at scale.
          </p>
        </div>
      </section>

      {/* 🧩 TOOLS & ECOSYSTEM */}
      <section className="mb-24 text-center">
        <h2 className="text-text-primary mb-10 text-3xl font-bold">Tools and Ecosystem We Use</h2>
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {[
            "Docker",
            "Kubernetes",
            "Jenkins",
            "GitLab CI/CD",
            "Terraform",
            "Ansible",
            "Prometheus",
            "ELK Stack",
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
          How DevOps Fits Into Your Tech Stack
        </h2>
        <div className="mx-auto grid max-w-5xl items-start gap-8 md:grid-cols-3">
          {[
            {
              title: "Automated Deployment Pipelines",
              desc: "CI/CD workflows that test, build, and deploy code automatically with zero-downtime releases and rollback capabilities.",
            },
            {
              title: "Infrastructure as Code",
              desc: "Define and manage cloud resources programmatically using Terraform and Ansible for consistency and repeatability.",
            },
            {
              title: "Monitoring & Observability",
              desc: "Real-time visibility into application performance, logs, and metrics with alerting to detect and resolve issues faster.",
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
          When to Use DevOps (and When Not To)
        </h2>
        <p className="text-text-tertiary mx-auto mb-8 max-w-3xl">
          DevOps practices yield the most value when applied strategically to the right projects and
          organizational contexts.
        </p>
        <div className="mx-auto grid max-w-5xl gap-10 md:grid-cols-2">
          <div className="bg-surface-primary rounded-xl border p-8 shadow-md">
            <h3 className="mb-3 text-2xl font-semibold text-emerald-600">When to Use DevOps</h3>
            <ul className="text-text-tertiary list-inside list-disc space-y-3 text-left marker:text-emerald-600">
              <li>Continuous delivery and frequent releases required</li>
              <li>Multi-environment deployments (dev, staging, prod)</li>
              <li>High availability and scalability requirements</li>
              <li>Cross-functional teams needing faster feedback loops</li>
            </ul>
          </div>
          <div className="bg-surface-primary rounded-xl border p-8 shadow-md">
            <h3 className="mb-3 text-2xl font-semibold text-orange-600">When Not to Use DevOps</h3>
            <ul className="text-text-tertiary list-inside list-disc space-y-3 text-left marker:text-orange-600">
              <li>Static applications with infrequent updates</li>
              <li>Legacy monolithic systems requiring minimal DevOps investment</li>
              <li>Organizations lacking automation culture or resources</li>
              <li>Projects with fixed budgets and no operational overhead</li>
            </ul>
          </div>
        </div>
      </section>
      <RoundGradient variant="fifth" />

      {/* 📰 BLOG / ARTICLES */}
      {devopsArticles.length > 0 && (
        <section className="mb-24 text-center">
          <h2 className="text-text-primary mb-10 text-3xl font-bold">Insights from Our Team</h2>
          <p className="text-text-tertiary mx-auto mb-10 max-w-2xl">
            Articles and best practices from our DevOps engineers — covering CI/CD, infrastructure,
            and operational excellence.
          </p>
          <div className="grid gap-8 md:grid-cols-3">
            {devopsArticles.map((article) => (
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
                      <div className="h-full w-full bg-gradient-to-br from-blue-500 to-purple-500"></div>
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
      <section className="text-background rounded-3xl bg-blue-700 px-2 py-16 text-center shadow-md">
        <h3 className="mb-4 text-3xl font-bold md:text-4xl">
          Ready to modernize your deployment pipeline?
        </h3>
        <p className="text-background mx-auto mb-6 max-w-2xl text-lg md:text-xl">
          Let&apos;s build a scalable, reliable infrastructure that supports your team&apos;s growth
          and velocity.
        </p>
        <div className="flex items-center justify-center gap-3">
          <Link
            href="/contact"
            className="bg-background inline-block rounded-lg px-8 py-3 font-semibold text-blue-700 shadow-lg transition hover:scale-105 hover:bg-gray-300"
          >
            Get Started
          </Link>
        </div>
      </section>
    </main>
  );
}
