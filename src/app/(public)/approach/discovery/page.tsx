import Image from "next/image";
import Link from "next/link";

export default function DiscoveryApproachPage() {
  return (
    <main className="mx-auto min-h-screen max-w-7xl bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section className="relative px-6 py-20 text-center md:px-10">
        <h1 className="mb-4 text-4xl font-extrabold text-gray-900 md:text-5xl">
          Discovery Approach — Building Confidence Before We Build Code
        </h1>
        <p className="mx-auto max-w-3xl text-lg text-gray-600">
          Every successful digital product begins with clarity. Our Discovery phase helps you move
          from ideas and uncertainty to a validated, actionable roadmap — designed to align your
          business goals, user needs, and technical realities. We don&apos;t just plan software — we plan
          success.
        </p>
        <div className="mt-12 flex justify-center">
          <Image
            src="/images/discovery-session.jpg"
            alt="Discovery workshop"
            width={700}
            height={400}
            className="rounded-2xl shadow-lg"
          />
        </div>
      </section>

      {/* What We Need From You */}
      <section className="my-10 rounded-3xl bg-white px-6 py-20 shadow-sm md:px-10">
        <div className="mb-10 text-center">
          <h2 className="mb-3 text-3xl font-bold text-gray-900">What We Need From You</h2>
          <p className="mx-auto max-w-2xl text-gray-600">
            Your insights are our foundation. The more we understand your goals, challenges, and
            customers, the stronger and faster we can build. You bring the vision — we bring the
            strategy, structure, and execution.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          <div className="rounded-xl bg-gray-50 p-6 shadow-sm hover:shadow-md">
            <h3 className="mb-2 text-lg font-semibold">Business Context</h3>
            <p className="text-gray-600">
              Share your objectives, target audience, market positioning, and internal processes.
              These insights help us design a product that serves both your customers and your
              bottom line.
            </p>
          </div>
          <div className="rounded-xl bg-gray-50 p-6 shadow-sm hover:shadow-md">
            <h3 className="mb-2 text-lg font-semibold">Access to Teams</h3>
            <p className="text-gray-600">
              We collaborate with key stakeholders — product, design, and tech — to uncover hidden
              assumptions, dependencies, and opportunities that make your product more resilient.
            </p>
          </div>
          <div className="rounded-xl bg-gray-50 p-6 shadow-sm hover:shadow-md">
            <h3 className="mb-2 text-lg font-semibold">Open Collaboration</h3>
            <p className="text-gray-600">
              Discovery works best when we communicate openly. Regular touchpoints ensure every
              insight, idea, and pivot is aligned with your evolving vision.
            </p>
          </div>
        </div>
      </section>

      {/* Process Overview */}
      <section className="px-6 py-20 md:px-10">
        <div className="mb-10 text-center">
          <h2 className="mb-3 text-3xl font-bold text-gray-900">Our Discovery Process</h2>
          <p className="mx-auto max-w-3xl text-gray-600">
            We follow a structured yet flexible discovery framework that turns complexity into
            clarity. From deep analysis to prototype validation, every step builds momentum toward a
            confident launch.
          </p>
        </div>

        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <ol className="list-inside list-decimal space-y-3 text-gray-700">
              <li>
                <strong>1. Kickoff & Alignment —</strong> We align on business goals, timelines, and
                expectations to ensure our teams are perfectly in sync.
              </li>
              <li>
                <strong>2. Stakeholder Workshops —</strong> Through guided sessions, we uncover
                requirements, constraints, and success metrics that shape our roadmap.
              </li>
              <li>
                <strong>3. Research & Feasibility —</strong> We validate ideas through technical
                audits, user interviews, and proof-of-concepts.
              </li>
              <li>
                <strong>4. Prototyping & Feedback —</strong> Rapid prototypes visualize concepts,
                validate UX decisions, and gather early feedback from your team.
              </li>
              <li>
                <strong>5. Roadmap & MVP Definition —</strong> We deliver a prioritized backlog and
                clear technical strategy, so your MVP is focused, achievable, and impactful.
              </li>
            </ol>
          </div>
          <div className="relative h-80">
            <Image
              src="/images/discovery-process.jpg"
              alt="Discovery process visualization"
              fill
              className="rounded-2xl object-cover shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Feedback & Prototyping Section */}
      <section className="my-10 rounded-3xl bg-white px-6 py-20 shadow-sm md:px-10">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div className="relative h-72 md:h-96">
            <Image
              src="/images/prototype-feedback.jpg"
              alt="Prototyping and feedback"
              fill
              className="rounded-2xl object-cover"
            />
          </div>
          <div>
            <h2 className="mb-4 text-3xl font-semibold text-gray-900">
              Collaborative Feedback & Prototyping
            </h2>
            <p className="mb-4 text-gray-600">
              You&apos;ll see tangible progress early. We build clickable prototypes and technical
              mockups to visualize functionality before full-scale development begins. Each
              iteration is refined based on your feedback — ensuring the end product matches your
              expectations exactly.
            </p>
            <p className="text-gray-600">
              This phase isn&apos;t just about design — it&apos;s about validating assumptions, mitigating
              risks, and giving you complete confidence in what comes next.
            </p>
          </div>
        </div>
      </section>

      {/* MVP & Handoff */}
      <section className="px-6 py-20 md:px-10">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <h2 className="mb-4 text-3xl font-semibold text-gray-900">
              From Discovery to MVP — A Clear Path Forward
            </h2>
            <p className="mb-4 text-gray-600">
              Once Discovery is complete, you&apos;ll have a clear, validated roadmap ready for
              development. Your MVP will focus on the features that drive the most business value,
              minimizing waste and maximizing learning. Every technical decision — from architecture
              to deployment — will be backed by data and aligned with your business strategy.
            </p>
            <p className="text-gray-600">
              Whether you continue with us for development or use our documentation with your
              in-house team, you&apos;ll walk away with everything you need to move forward confidently.
            </p>
          </div>
          <div className="relative h-80">
            <Image
              src="/images/mvp-handoff.jpg"
              alt="MVP handoff"
              fill
              className="rounded-2xl object-cover shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="my-10 rounded-3xl bg-purple-700 py-16 text-center text-white shadow-md">
        <h3 className="mb-4 text-3xl font-bold md:text-4xl">
          Start Your Product Discovery With a Trusted Partner
        </h3>
        <p className="mx-auto mb-6 max-w-2xl text-lg text-purple-100 md:text-xl">
          Let&apos;s turn your vision into a clear, validated, and measurable product plan. Together,
          we&apos;ll define success before development begins.
        </p>
        <Link
          href="/contact"
          className="inline-block rounded-lg bg-white px-8 py-3 font-semibold text-purple-700 shadow-lg transition hover:scale-105 hover:bg-gray-100"
        >
          Schedule Your Discovery Call
        </Link>
      </section>
    </main>
  );
}
