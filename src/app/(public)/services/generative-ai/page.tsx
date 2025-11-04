// app/services/generative-ai/page.tsx
import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function GenerativeAIPage() {
  return (
    <div className="mx-auto min-h-screen max-w-7xl bg-gray-50 px-6 py-16 lg:px-20">
      {/* Hero Section */}
      <section className="mb-20 text-center">
        <h1 className="mb-4 text-5xl font-bold text-gray-800 md:text-6xl">
          Generative AI Solutions
        </h1>
        <p className="mx-auto max-w-3xl text-lg text-gray-600 md:text-xl">
          We help businesses harness the power of Generative AI — from creative automation and
          intelligent assistants to custom-trained models that unlock new possibilities.
        </p>
      </section>

      {/* Who We Build For */}
      <section className="mb-20 text-center">
        <h2 className="mb-6 text-4xl font-bold text-gray-800">Who We Build For</h2>
        <p className="mx-auto mb-10 max-w-3xl text-gray-600">
          Whether you&apos;re experimenting with AI or scaling enterprise-grade automation — we design,
          build, and deploy solutions tailored to your context.
        </p>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {[
            {
              title: "Startups",
              desc: "Rapid prototyping, AI-powered MVPs, and lean integrations that accelerate go-to-market.",
            },
            {
              title: "Growing Businesses",
              desc: "Enhance productivity and user experience with smart assistants, chatbots, or AI workflows.",
            },
            {
              title: "Enterprises",
              desc: "Deploy secure, compliant, and scalable AI systems integrated into complex infrastructure.",
            },
          ].map((card, idx) => (
            <div key={idx} className="rounded-xl bg-white p-6 shadow-md transition hover:shadow-xl">
              <h3 className="mb-2 text-2xl font-semibold">{card.title}</h3>
              <p className="text-gray-600">{card.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Core AI Capabilities */}
      <section className="mb-20">
        <h2 className="mb-6 text-center text-4xl font-bold text-gray-800">Core AI Capabilities</h2>
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          {[
            {
              title: "Custom AI Models",
              desc: "Fine-tuned large language and diffusion models built for your data and domain — achieving reliable, business-specific performance.",
            },
            {
              title: "AI-Powered Applications",
              desc: "Integrate AI into products — from intelligent chat interfaces to contextual creative tools.",
            },
            {
              title: "Knowledge & Document Intelligence",
              desc: "Transform unstructured text and files into insights using embeddings, retrieval-augmented generation (RAG), and semantic search.",
            },
            {
              title: "Automation & Insights",
              desc: "Automate repetitive workflows, summarize reports, and uncover key insights through intelligent pipelines.",
            },
            {
              title: "Multimodal AI",
              desc: "Create or analyze text, images, and audio in unified experiences — enabling new creative and operational workflows.",
            },
          ].map((card, idx) => (
            <div key={idx} className="rounded-xl bg-white p-6 shadow-md transition hover:shadow-xl">
              <h3 className="mb-2 text-2xl font-semibold">{card.title}</h3>
              <p className="text-gray-600">{card.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Educational Section: What Generative AI Means */}
      <section className="mb-20">
        <div className="mb-10 text-center">
          <h2 className="mb-4 text-4xl font-bold text-gray-800">
            What Generative AI Can Do For You
          </h2>
          <p className="mx-auto max-w-3xl text-gray-600">
            Generative AI isn&apos;t just about automation — it&apos;s about extending creativity, decision
            making, and efficiency. Here&apos;s what it enables across industries:
          </p>
        </div>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          {[
            {
              title: "Text Generation",
              desc: "Produce reports, articles, or customer responses in seconds — saving time while maintaining quality.",
            },
            {
              title: "Image Generation",
              desc: "Create marketing visuals, concept art, or design assets instantly using diffusion models.",
            },
            {
              title: "Audio & Speech",
              desc: "Add realistic voice, speech-to-text, or audio summarization for immersive media experiences.",
            },
            {
              title: "Code Generation",
              desc: "Accelerate development with AI-assisted tools for prototyping, testing, and documentation.",
            },
          ].map((item, idx) => (
            <div key={idx} className="rounded-xl bg-white p-6 shadow-md transition hover:shadow-xl">
              <h3 className="mb-2 text-2xl font-semibold">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Our AI Process */}
      <section className="mb-20 flex flex-col items-center gap-10 md:flex-row">
        <div className="md:w-1/2">
          <h2 className="mb-4 text-4xl font-bold text-gray-800">Our AI Integration Process</h2>
          <p className="mb-4 text-gray-600">
            Our workflow blends research, design thinking, and engineering rigor — ensuring that
            every AI integration delivers measurable results.
          </p>
          <ul className="list-inside list-disc space-y-2 text-gray-600">
            <li>Discovery & Feasibility Analysis</li>
            <li>Data Preparation & Architecture Design</li>
            <li>Model Fine-Tuning & Evaluation</li>
            <li>API Integration & Deployment</li>
            <li>Monitoring, Feedback & Continuous Improvement</li>
          </ul>
        </div>
        <div className="relative h-64 md:h-80 md:w-1/2">
          <Image
            src="/images/generative-ai.jpg"
            alt="Generative AI Illustration"
            fill
            className="object-contain"
            priority
          />
        </div>
      </section>

      {/* Technology Stack */}
      <section className="mb-20 text-center">
        <h2 className="mb-6 text-4xl font-bold text-gray-800">Technology Stack</h2>
        <p className="mx-auto mb-10 max-w-3xl text-gray-600">
          Our go-to technologies for production-grade AI — flexible enough to integrate with your
          current systems or modernize legacy infrastructure.
        </p>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          <div>
            <h3 className="mb-3 text-2xl font-semibold text-gray-800">AI Frameworks</h3>
            <p className="text-gray-600">
              PyTorch, TensorFlow, HuggingFace, LangChain, OpenAI, Ollama
            </p>
          </div>
          <div>
            <h3 className="mb-3 text-2xl font-semibold text-gray-800">Backend</h3>
            <p className="text-gray-600">
              Node.js, NestJS, Redis, PostgreSQL, FastAPI, GraphQL, gRPC
            </p>
          </div>
          <div>
            <h3 className="mb-3 text-2xl font-semibold text-gray-800">Infrastructure</h3>
            <p className="text-gray-600">
              Docker, Kubernetes, Vector DBs (Pinecone, Milvus), AWS, GCP, Azure
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="mb-20 text-center">
        <h2 className="mb-6 text-4xl font-bold text-gray-800">Why Choose Us</h2>
        <p className="mx-auto mb-10 max-w-3xl text-gray-600">
          We blend AI research with real-world engineering, delivering results that go beyond
          prototypes — helping teams deploy intelligent systems safely and effectively.
        </p>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {[
            "Research-driven yet pragmatic approach",
            "Transparent roadmap from prototype to deployment",
            "Deep understanding of data, models, and infra",
            "End-to-end ownership of design, backend, and integration",
            "Experience with secure and compliant enterprise systems",
            "Focused on long-term business impact — not just AI hype",
          ].map((point, idx) => (
            <div key={idx} className="rounded-xl bg-white p-6 shadow-md transition hover:shadow-xl">
              <p className="text-gray-700">{point}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="rounded-xl bg-purple-600 py-16 text-center text-white">
        <h3 className="mb-4 text-3xl font-bold md:text-4xl">
          Build your next AI-powered product with us
        </h3>
        <p className="mb-6 text-lg md:text-xl">
          From idea to production — we&apos;ll help you design, train, and deploy intelligent systems
          that innovate and inspire.
        </p>
        <Link
          href="/contact"
          className="inline-block rounded-lg bg-white px-8 py-3 font-semibold text-purple-600 shadow-lg transition hover:scale-105 hover:bg-gray-100"
        >
          Get Started
        </Link>
      </section>
    </div>
  );
}
