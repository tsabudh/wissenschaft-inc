"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { awsArticles } from "@/data/articles";
import RoundGradient from "@/components/ui/backgrounds/round-gradient";

export default function AwsPage() {
  return (
    <main className="text-primary mx-auto min-h-screen max-w-7xl px-6 py-16 lg:px-20">
      {/* 🟣 HERO */}
      <section className="py-10 text-center">
        <h1 className="text-heading-primary mb-6 text-4xl font-bold md:text-6xl">
          AWS Development & Cloud Solutions
        </h1>
        <p className="text-text-tertiary mx-auto max-w-3xl text-lg">
          Build, scale, and secure your applications on the world&apos;s most trusted cloud
          platform. We help teams harness AWS to achieve operational excellence, cost efficiency,
          and rapid scalability.
        </p>
      </section>

      {/* 💡 OUR EXPERTISE */}
      <section className="mb-24 text-center">
        <h2 className="text-heading-secondary mb-8 text-3xl font-bold">
          Our Expertise in AWS Cloud Development
        </h2>
        <p className="text-text-tertiary mx-auto mb-10 max-w-3xl">
          From modern serverless APIs to globally distributed infrastructures, our engineers design
          AWS solutions optimized for reliability, automation, and scale. We&apos;ve deployed
          production systems leveraging EC2, ECS, Lambda, S3, CloudFront, and more.
        </p>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <Image
            src="/images/tech-aws.png"
            alt="AWS Architecture Diagram"
            width={720}
            height={400}
            className="rounded-xl shadow-md"
          />
        </motion.div>
      </section>

      {/* 🔧 TOOLS & ECOSYSTEM */}
      <section className="mb-24 text-center">
        <h2 className="text-heading-secondary mb-8 text-3xl font-bold">Tools & Ecosystem</h2>
        <p className="text-text-tertiary mx-auto mb-12 max-w-2xl">
          Our AWS implementations integrate seamlessly with modern DevOps pipelines, CI/CD, and
          observability tools to ensure continuous delivery and system health.
        </p>

        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {[
            "EC2",
            "ECS & Fargate",
            "Lambda",
            "S3 & CloudFront",
            "RDS",
            "DynamoDB",
            "CloudWatch",
            "CDK / Terraform",
          ].map((tool) => (
            <motion.div
              key={tool}
              whileHover={{ scale: 1.05 }}
              className="bg-surface-primary rounded-xl p-6 shadow-md transition-shadow hover:shadow-lg"
            >
              <p className="text-text-secondary font-medium">{tool}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 🔌 TECH STACK INTEGRATION */}
      <section className="mb-24 text-center">
        <h2 className="text-heading-secondary mb-8 text-3xl font-bold">Tech Stack Integration</h2>
        <p className="text-text-tertiary mx-auto mb-10 max-w-2xl">
          AWS works harmoniously with your existing stack — whether it&apos;s Node.js, Python, or
          Rust — providing infrastructure primitives to support every layer of your product.
        </p>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {[
            { title: "Frontend on React / Next.js" },
            { title: "Backend APIs on AWS Lambda" },
            { title: "Storage & Queues on S3 / SQS" },
          ].map((item) => (
            <motion.div
              key={item.title}
              whileHover={{ scale: 1.03 }}
              className="bg-surface-secondary rounded-xl border p-6 shadow-md transition-shadow hover:shadow-lg"
            >
              <h3 className="text-text-secondary mb-2 text-xl font-semibold">{item.title}</h3>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ⚙️ WHEN TO USE / NOT USE AWS */}
      <section className="mb-24 text-center">
        <h2 className="text-heading-secondary mb-8 text-3xl font-bold">
          When to Use AWS — and When Not To
        </h2>
        <div className="grid gap-8 text-left md:grid-cols-2">
          <div className="rounded-xl bg-green-50 p-8 shadow-sm">
            <h3 className="mb-4 text-xl font-semibold text-green-700">When AWS Shines</h3>
            <ul className="list-inside list-disc space-y-2 text-gray-700">
              <li>You need elastic scalability for dynamic workloads.</li>
              <li>Your product demands global availability and redundancy.</li>
              <li>Infrastructure as Code and automation are priorities.</li>
              <li>You want access to a vast ecosystem of cloud-native services.</li>
            </ul>
          </div>
          <div className="rounded-xl bg-red-50 p-8 shadow-sm">
            <h3 className="mb-4 text-xl font-semibold text-red-700">When to Reconsider</h3>
            <ul className="list-inside list-disc space-y-2 text-gray-700">
              <li>Small-scale projects that don&apos;t justify the AWS cost overhead.</li>
              <li>Teams without DevOps experience might face steep learning curves.</li>
              <li>Latency-sensitive workloads requiring on-prem processing.</li>
            </ul>
          </div>
        </div>
      </section>

      <RoundGradient variant="first" />

      {/* 📰 BLOG SECTION */}
      {awsArticles.length > 0 && (
        <section className="mb-24 text-center">
          <h2 className="text-heading-secondary mb-10 text-3xl font-bold">
            Insights from Our Team
          </h2>
          <p className="text-text-tertiary mx-auto mb-10 max-w-2xl">
            Learn how we leverage AWS to build resilient, cost-efficient, and high-performance cloud
            systems through real engineering case studies and insights.
          </p>
          <div className="grid gap-8 md:grid-cols-3">
            {awsArticles.map((article) => (
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
                      <div className="h-full w-full bg-gradient-to-br from-yellow-500 to-orange-600"></div>
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
        className="text-foreground rounded-xl bg-yellow-600 px-4 py-16 text-center"
      >
        <h3 className="mb-4 text-3xl font-bold md:text-4xl">
          Ready to build your next cloud solution?
        </h3>
        <p className="mb-6 px-4 text-lg md:text-xl">
          Let&apos;s discuss your AWS architecture and find the right path to scalability and cost
          efficiency.
        </p>
        <div className="flex items-center justify-center gap-3">
          <Link
            href="/contact"
            className="bg-background rounded-lg px-8 py-3 font-semibold text-yellow-700 shadow-lg transition hover:scale-105 hover:bg-gray-100"
          >
            Get Started
          </Link>
        </div>
      </section>
    </main>
  );
}
