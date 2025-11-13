"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { awsArticles } from "@/data/articles";

export default function AwsPage() {
  return (
    <main className="mx-auto min-h-screen max-w-7xl bg-gray-50 px-6 py-16 text-gray-800 lg:px-20">
      {/* 🟣 HERO */}
      <section className="py-10 text-center">
        <h1 className="mb-6 text-4xl font-bold text-amber-500 md:text-6xl">
          AWS Development & Cloud Solutions
        </h1>
        <p className="mx-auto max-w-3xl text-lg text-gray-600">
          Build, scale, and secure your applications on the world&apos;s most trusted cloud
          platform. We help teams harness AWS to achieve operational excellence, cost efficiency,
          and rapid scalability.
        </p>
      </section>

      {/* 💡 OUR EXPERTISE */}
      <section className="mb-24 text-center">
        <h2 className="mb-8 text-3xl font-bold text-gray-900">
          Our Expertise in AWS Cloud Development
        </h2>
        <p className="mx-auto mb-10 max-w-3xl text-gray-600">
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
        <h2 className="mb-8 text-3xl font-bold text-gray-900">Tools & Ecosystem</h2>
        <p className="mx-auto mb-12 max-w-2xl text-gray-600">
          Our AWS implementations integrate seamlessly with modern DevOps pipelines, CI/CD, and
          observability tools to ensure continuous delivery and system health.
        </p>

        <div className="grid grid-cols-2 gap-6 font-medium text-gray-700 md:grid-cols-4">
          <div className="rounded-lg bg-white py-6 shadow-sm">EC2</div>
          <div className="rounded-lg bg-white py-6 shadow-sm">ECS & Fargate</div>
          <div className="rounded-lg bg-white py-6 shadow-sm">Lambda</div>
          <div className="rounded-lg bg-white py-6 shadow-sm">S3 & CloudFront</div>
          <div className="rounded-lg bg-white py-6 shadow-sm">RDS</div>
          <div className="rounded-lg bg-white py-6 shadow-sm">DynamoDB</div>
          <div className="rounded-lg bg-white py-6 shadow-sm">CloudWatch</div>
          <div className="rounded-lg bg-white py-6 shadow-sm">CDK / Terraform</div>
        </div>
      </section>

      {/* 🔌 TECH STACK INTEGRATION */}
      <section className="mb-24 text-center">
        <h2 className="mb-8 text-3xl font-bold text-gray-900">Tech Stack Integration</h2>
        <p className="mx-auto mb-10 max-w-2xl text-gray-600">
          AWS works harmoniously with your existing stack — whether it&apos;s Node.js, Python, or
          Rust — providing infrastructure primitives to support every layer of your product.
        </p>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {[
            { title: "Frontend on React / Next.js", color: "from-yellow-400 to-orange-500" },
            { title: "Backend APIs on AWS Lambda", color: "from-blue-500 to-green-500" },
            { title: "Storage & Queues on S3 / SQS", color: "from-indigo-500 to-purple-500" },
          ].map((item) => (
            <motion.div
              key={item.title}
              whileHover={{ scale: 1.03 }}
              className={`rounded-xl bg-gradient-to-br ${item.color} p-6 text-white shadow-lg`}
            >
              <h3 className="text-lg font-semibold">{item.title}</h3>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ⚙️ WHEN TO USE / NOT USE AWS */}
      <section className="mb-24 text-center">
        <h2 className="mb-8 text-3xl font-bold text-gray-900">When to Use AWS — and When Not To</h2>
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

      {/* 📰 BLOG SECTION */}
      <section className="mb-24 text-center">
        <h2 className="mb-10 text-3xl font-bold text-gray-900">Insights from Our Team</h2>
        <p className="mx-auto mb-10 max-w-2xl text-gray-600">
          Learn how we leverage AWS to build resilient, cost-efficient, and high-performance cloud
          systems through real engineering case studies and insights.
        </p>
        <div className="grid gap-8 md:grid-cols-3">
          {awsArticles.map((article) => (
            <motion.div
              key={article.name}
              whileHover={{ scale: 1.03 }}
              className="rounded-xl bg-white p-6 text-left shadow-md transition-shadow hover:shadow-lg"
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
                <p className="text-sm text-gray-600">{article.description}</p>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 🚀 CTA */}
      <section id="contact" className="rounded-xl bg-yellow-600 px-4 py-16 text-center text-white">
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
            className="rounded-lg bg-white px-8 py-3 font-semibold text-yellow-700 shadow-lg transition hover:scale-105 hover:bg-gray-100"
          >
            Get Started
          </Link>
          <Link
            href="/contact#brief"
            className="rounded-lg border border-white/30 px-6 py-3 text-white hover:bg-white/5"
          >
            Send Brief
          </Link>
        </div>
      </section>
    </main>
  );
}
