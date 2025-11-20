import Image from "next/image";
import Link from "next/link";

export default function AgileApproachPage() {
  return (
    <main className="mx-auto min-h-screen max-w-7xl bg-gray-50 text-gray-800 px-6 py-16 flex flex-col gap-12">
      {/* Hero Section */}
      <section className="relative px-6 mb-20 text-center md:px-10">
        <h1 className="mb-4 text-4xl font-extrabold text-gray-900 md:text-5xl">
          Agile Delivery — Turning Strategy Into Predictable, Continuous Progress
        </h1>
        <p className="mx-auto max-w-3xl text-lg text-gray-600">
          Agile isn&apos;t about speed — it&apos;s about clarity, adaptability, and delivering value without
          surprises. Our Agile Delivery approach gives your business the confidence that every
          sprint moves your product forward, aligns with your goals, and responds to real user
          feedback.
        </p>

        <div className="mt-12 flex justify-center">
          <Image
            src="/images/team-collaboration.jpg"
            alt="Agile collaboration workshop"
            width={750}
            height={420}
            className="rounded-2xl shadow-lg"
          />
        </div>
      </section>

      {/* What Agile Means for Your Business */}
      <section className=" rounded-3xl bg-white px-6 py-20 shadow-sm md:px-10">
        <div className="mb-12 text-center">
          <h2 className="mb-3 text-3xl font-bold text-gray-900">
            What Agile Means for Your Business
          </h2>
          <p className="mx-auto max-w-2xl text-gray-600">
            Agile isn&apos;t just a development method — it&apos;s a decision-making framework. It helps you
            reduce risk, stay aligned with customers, and validate the right features at the right
            time. You stay in control as the product evolves.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          <div className="rounded-xl bg-gray-50 p-6 shadow-sm hover:shadow-md">
            <h3 className="mb-2 text-lg font-semibold">Clarity & Visibility</h3>
            <p className="text-gray-600">
              Regular demos, real-time progress tracking, and transparent communication ensure you
              always know what&apos;s being built and why.
            </p>
          </div>

          <div className="rounded-xl bg-gray-50 p-6 shadow-sm hover:shadow-md">
            <h3 className="mb-2 text-lg font-semibold">Adaptability at Every Step</h3>
            <p className="text-gray-600">
              Priorities shift — and that&apos;s normal. Agile allows us to pivot quickly without losing
              momentum or clarity.
            </p>
          </div>

          <div className="rounded-xl bg-gray-50 p-6 shadow-sm hover:shadow-md">
            <h3 className="mb-2 text-lg font-semibold">Business-First Decision Making</h3>
            <p className="text-gray-600">
              Every sprint focuses on delivering measurable business impact — not just completing
              tickets.
            </p>
          </div>
        </div>
      </section>

      {/* Agile Delivery Process */}
      <section className="px-6 py-20 md:px-10">
        <div className="mb-10 text-center">
          <h2 className="mb-3 text-3xl font-bold text-gray-900">Our Agile Delivery Process</h2>
          <p className="mx-auto max-w-3xl text-gray-600">
            A predictable and collaborative framework designed to minimize risk, accelerate value,
            and keep your product aligned with user and business needs.
          </p>
        </div>

        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <ol className="list-inside list-decimal space-y-3 text-gray-700 marker:font-bold">
              <li>
                <strong>Sprint Planning —</strong> We set clear goals for each sprint based on
                business priorities, scope, and available capacity.
              </li>
              <li>
                <strong>Design & Development —</strong> Features are built in small, testable
                increments, ensuring rapid progress with minimal risk.
              </li>
              <li>
                <strong>Testing & Quality Assurance —</strong> Automated and manual tests validate
                functionality, performance, and user experience continuously.
              </li>
              <li>
                <strong>Sprint Review —</strong> You see working software every two weeks — tangible
                output, not theoretical plans.
              </li>
              <li>
                <strong>Retrospective & Improvement —</strong> We refine processes, improve
                velocity, and adapt based on real-world feedback and new information.
              </li>
            </ol>
          </div>

          <div className="relative h-80">
            <Image
              src="/images/agile-board.png"
              alt="Agile process visualization"
              fill
              className="rounded-2xl object-contain shadow-lg bg-linear-60 from-blue-300 to-amber-200"
            />
          </div>
        </div>
      </section>

      {/* Collaboration & Transparency */}
      <section className=" rounded-3xl bg-white px-6 py-20 shadow-sm md:px-10">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div className="relative h-72 md:h-96">
            <Image
              src="/images/agile_trans.png"
              alt="Agile collaboration"
              fill
              className="rounded-2xl object-cover"
            />
          </div>
          <div>
            <h2 className="mb-4 text-3xl font-semibold text-gray-900">
              Full Transparency, Constant Communication
            </h2>
            <p className="mb-4 text-gray-600">
              Agile thrives on collaboration. You&apos;ll have total visibility into planning,
              prioritization, progress, and decisions — no hidden work, no surprises.
            </p>
            <p className="text-gray-600">
              Through dashboards, regular touchpoints, and sprint reviews, we work as an extension
              of your team — aligned around your goals and outcomes.
            </p>
          </div>
        </div>
      </section>

      {/* Business Impact Section */}
      <section className="px-6 py-20 md:px-10">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <h2 className="mb-4 text-3xl font-semibold text-gray-900">
              Predictable Delivery. Reduced Risk. Measurable Outcomes.
            </h2>
            <p className="mb-4 text-gray-600">
              Agile gives you structured progress with room to adapt. Instead of long timelines and
              uncertain outcomes, you get continuous delivery and clear expectations every step of
              the way.
            </p>
            <p className="text-gray-600">
              Each sprint produces real value — validated features, working software, and insights
              that shape the product more intelligently.
            </p>
          </div>

          <div className="relative h-80">
            <Image
              src="/images/agile_risk.png"
              alt="Agile outcomes"
              fill
              className="rounded-2xl object-cover shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className=" rounded-3xl bg-green-700 py-16 px-2 text-center text-white shadow-md">
        <h3 className="mb-4 text-3xl font-bold md:text-4xl">
          Build With a Team That Delivers Value — Every Sprint
        </h3>
        <p className="mx-auto mb-6 max-w-2xl text-lg text-green-100 md:text-xl">
          Whether you&apos;re launching an MVP or scaling a mature system, our Agile Delivery model keeps
          you aligned, informed, and ahead of the curve.
        </p>
        <Link
          href="/contact"
          className="inline-block rounded-lg bg-white px-8 py-3 font-semibold text-green-700 shadow-lg transition hover:scale-105 hover:bg-gray-100"
        >
          Start Your Agile Journey
        </Link>
      </section>

    </main>
  );
}
