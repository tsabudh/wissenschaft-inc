import Image from "next/image";
import Link from "next/link";

export default function DiscoveryApproachPage() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-800 max-w-7xl mx-auto">
      <section className="relative px-6 py-20 md:px-10">
        <div className="mx-auto max-w-7xl text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 md:text-5xl">Discovery Approach</h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-600">
            Every successful digital product starts with discovery — a deep dive into your business
            goals, technical ecosystem, and user expectations. Our discovery phase lays the
            foundation for a scalable, high-performance solution that aligns engineering execution
            with measurable business impact.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-7xl items-center gap-12 md:grid-cols-2">
          <div>
            <Image
              src="/images/discovery-session.jpg"
              alt="Discovery workshop session"
              width={600}
              height={400}
              className="rounded-2xl shadow-lg"
            />
          </div>
          <div>
            <h2 className="mb-4 text-2xl font-semibold">From Vision to Validated Roadmap</h2>
            <p className="mb-4 text-gray-600">
              We collaborate with key stakeholders, engineering teams, and domain experts to clarify
              objectives, map dependencies, and identify early opportunities for technical
              innovation. By combining product design thinking with system-level architecture
              planning, we ensure your product vision translates into a viable, scalable technical
              roadmap.
            </p>
            <p className="text-gray-600">
              Our discovery workshops emphasize **measurable outcomes** — whether it&apos;s faster
              go-to-market, optimized cloud spending, or improving long-term maintainability across
              distributed teams.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-gray-100 bg-white px-6 py-20 md:px-10">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-3">
          <div className="rounded-xl bg-gray-50 p-6 shadow-sm transition hover:shadow-md">
            <h3 className="mb-2 text-xl font-semibold">Business Alignment</h3>
            <p className="text-gray-600">
              We identify core business drivers and design KPIs that connect development priorities
              directly to measurable outcomes — such as revenue growth, operational efficiency, and
              customer retention.
            </p>
          </div>

          <div className="rounded-xl bg-gray-50 p-6 shadow-sm transition hover:shadow-md">
            <h3 className="mb-2 text-xl font-semibold">Technical Feasibility</h3>
            <p className="text-gray-600">
              Before writing a single line of code, we validate assumptions through
              proof-of-concepts, infrastructure simulations, and architecture audits. This minimizes
              long-term refactoring and ensures smooth scaling from MVP to enterprise scale.
            </p>
          </div>

          <div className="rounded-xl bg-gray-50 p-6 shadow-sm transition hover:shadow-md">
            <h3 className="mb-2 text-xl font-semibold">User-Centered Research</h3>
            <p className="text-gray-600">
              Our UX and product research teams gather insights from real users and market data to
              inform feature prioritization, usability flows, and content strategy — ensuring your
              product meets genuine user needs.
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 md:px-10">
        <div className="mx-auto max-w-7xl text-center">
          <h2 className="mb-6 text-3xl font-bold">Deliverables from the Discovery Phase</h2>
          <ul className="mx-auto max-w-2xl space-y-3 text-left text-gray-700">
            <li>✅ Product Vision &amp; Technical Strategy Document</li>
            <li>✅ System Architecture &amp; Infrastructure Blueprint</li>
            <li>✅ Risk &amp; Feasibility Assessment</li>
            <li>✅ Product Backlog with Prioritized Features</li>
            <li>✅ Estimated Timeline &amp; Budget Overview</li>
          </ul>
          <p className="mx-auto mt-10 max-w-2xl text-gray-600">
            The discovery phase reduces uncertainty, aligns teams, and sets a validated course for
            the development journey — ensuring your investment turns into long-term product success.
          </p>
          <div className="mt-10">
            <Link href="/approach/agile" className="font-medium text-blue-600 hover:underline">
              Learn about our Agile development approach →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
