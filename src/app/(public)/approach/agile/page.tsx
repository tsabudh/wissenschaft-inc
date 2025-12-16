import { metadataMap } from "@/lib/metadataMap";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export default function AgileApproachPage() {
  return (
    <main className="text-text-primary mx-auto flex min-h-screen max-w-7xl flex-col gap-12 px-6 py-16">
      {/* Hero Section */}
      <section className="relative mb-20 px-6 text-center md:px-10">
        <h1 className="text-text-primary mb-4 text-4xl font-extrabold md:text-5xl">
          Agile Delivery — Turning Strategy Into Predictable, Continuous Progress
        </h1>
        <p className="mx-auto max-w-3xl text-lg text-text-tertiary">
          Agile isn&apos;t about speed — it&apos;s about clarity, adaptability, and delivering value
          without surprises. Our Agile Delivery approach gives your business the confidence that
          every sprint moves your product forward, aligns with your goals, and responds to real user
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
      <section className="bg-background rounded-3xl px-6 py-20 shadow-sm md:px-10">
        <div className="mb-12 text-center">
          <h2 className="text-text-primary mb-3 text-3xl font-bold">
            What Agile Means for Your Business
          </h2>
          <p className="mx-auto max-w-2xl text-text-tertiary">
            Agile isn&apos;t just a development method — it&apos;s a decision-making framework. It
            helps you reduce risk, stay aligned with customers, and validate the right features at
            the right time. You stay in control as the product evolves.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          <div className="bg-surface-secondary rounded-xl p-6 shadow-sm hover:shadow-md">
            <h3 className="mb-2 text-lg font-semibold">Clarity & Visibility</h3>
            <p className="text-text-tertiary">
              Regular demos, real-time progress tracking, and transparent communication ensure you
              always know what&apos;s being built and why.
            </p>
          </div>

          <div className="bg-surface-secondary rounded-xl p-6 shadow-sm hover:shadow-md">
            <h3 className="mb-2 text-lg font-semibold">Adaptability at Every Step</h3>
            <p className="text-text-tertiary">
              Priorities shift — and that&apos;s normal. Agile allows us to pivot quickly without
              losing momentum or clarity.
            </p>
          </div>

          <div className="bg-surface-secondary rounded-xl p-6 shadow-sm hover:shadow-md">
            <h3 className="mb-2 text-lg font-semibold">Business-First Decision Making</h3>
            <p className="text-text-tertiary">
              Every sprint focuses on delivering measurable business impact — not just completing
              tickets.
            </p>
          </div>
        </div>
      </section>

      {/* Agile Delivery Process */}
      <section className="px-6 py-20 md:px-10">
        <div className="mb-10 text-center">
          <h2 className="text-text-primary mb-3 text-3xl font-bold">Our Agile Delivery Process</h2>
          <p className="mx-auto max-w-3xl text-text-tertiary">
            A predictable and collaborative framework designed to minimize risk, accelerate value,
            and keep your product aligned with user and business needs.
          </p>
        </div>

        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <ol className="list-inside list-decimal space-y-3 text-text-tertiary marker:font-bold">
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
              className="rounded-2xl bg-linear-60 from-blue-300 to-amber-200 object-contain shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Collaboration & Transparency */}
      <section className="bg-background rounded-3xl px-6 py-20 shadow-sm md:px-10">
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
            <h2 className="text-text-primary mb-4 text-3xl font-semibold">
              Full Transparency, Constant Communication
            </h2>
            <p className="mb-4 text-text-tertiary">
              Agile thrives on collaboration. You&apos;ll have total visibility into planning,
              prioritization, progress, and decisions — no hidden work, no surprises.
            </p>
            <p className="text-text-tertiary">
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
            <h2 className="text-text-primary mb-4 text-3xl font-semibold">
              Predictable Delivery. Reduced Risk. Measurable Outcomes.
            </h2>
            <p className="mb-4 text-text-tertiary">
              Agile gives you structured progress with room to adapt. Instead of long timelines and
              uncertain outcomes, you get continuous delivery and clear expectations every step of
              the way.
            </p>
            <p className="text-text-tertiary">
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
      <section className="text-background rounded-3xl bg-green-700 px-2 py-16 text-center shadow-md">
        <h3 className="mb-4 text-3xl font-bold md:text-4xl">
          Build With a Team That Delivers Value — Every Sprint
        </h3>
        <p className="mx-auto mb-6 max-w-2xl text-lg text-background md:text-xl">
          Whether you&apos;re launching an MVP or scaling a mature system, our Agile Delivery model
          keeps you aligned, informed, and ahead of the curve.
        </p>
        <Link
          href="/contact"
          className="bg-background inline-block rounded-lg px-8 py-3 font-semibold text-green-700 shadow-lg transition hover:scale-105 hover:bg-gray-300"
        >
          Start Your Agile Journey
        </Link>
      </section>
    </main>
  );
}

export async function generateMetadata({ pathname }: { pathname: string }): Promise<Metadata> {
  return (
    metadataMap[pathname] ?? {
      title: "Wissenschaft Inc",
      description: "Engineering Excellence",
    }
  );
}
