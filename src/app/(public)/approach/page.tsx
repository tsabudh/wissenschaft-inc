"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function ApproachPage() {
  return (
    <main className="text-text-primary mx-auto min-h-screen max-w-7xl px-6 py-16 lg:px-20">
      {/* HERO */}
      <section className="mb-20 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-4 text-4xl leading-tight font-bold md:text-5xl lg:text-6xl"
        >
          How We Work — A Process Built Around{" "}
          <span className="font-extrabold text-rose-700">*You*</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-text-tertiary mx-auto max-w-3xl text-lg md:text-xl"
        >
          Every business is different — your process should be too. We combine strategy,
          flexibility, and proven frameworks to build software that matches your vision, your
          timeline, and your way of working.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="mt-10 flex justify-center"
        >
          <Image
            src="/images/team-collaboration.jpg"
            alt="Team collaboration"
            width={720}
            height={420}
            className="rounded-3xl shadow-lg"
          />
        </motion.div>
      </section>

      {/* CORE VALUES */}
      <section className="mb-20">
        <header className="mb-10 text-center">
          <h2 className="text-text-primary text-3xl font-bold">
            The Principles That Guide Our Work
          </h2>
          <p className="text-text-tertiary mx-auto mt-2 max-w-2xl">
            Behind every project we deliver is a set of values that ensures clarity, momentum, and
            quality.
          </p>
        </header>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {[
            {
              title: "Flexible by Design",
              desc: "Whether you need structure, speed, or exploration, we adjust our workflow to match the way you operate.",
            },
            {
              title: "Transparent at Every Step",
              desc: "Clear communication, visible progress, and honest expectations keep everyone aligned.",
            },
            {
              title: "Outcome-Focused",
              desc: "We prioritize decisions that move your business forward — not just deliver tickets.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-surface-tertiary rounded-xl p-8 shadow-md transition hover:shadow-xl"
            >
              <h3 className="mb-3 text-xl font-semibold">{item.title}</h3>
              <p className="text-text-tertiary">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* OUR MODES OF WORK */}
      <section className="mb-20">
        <header className="mb-8 text-center">
          <h2 className="text-text-primary text-3xl font-bold">
            Choose the workflow that fits your product
          </h2>
          <p className="text-text-tertiary mx-auto max-w-2xl">
            From early-stage idea validation to fast-paced feature delivery — we support multiple
            engagement styles tailored to your needs.
          </p>
        </header>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-surface-tertiary rounded-2xl p-8 shadow-md hover:shadow-xl"
          >
            <h3 className="text-text-primary mb-3 text-2xl font-semibold">
              Discovery-Led Approach
            </h3>
            <p className="text-text-tertiary mb-4">
              Ideal when you have a vision but need clarity, validation, and a roadmap. We help you
              define the right problems before writing a single line of code.
            </p>
            <Link
              href="/approach/discovery"
              className="font-semibold text-purple-700 hover:underline"
            >
              Explore Discovery →
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-surface-tertiary rounded-2xl p-8 shadow-md hover:shadow-xl"
          >
            <h3 className="text-text-primary mb-3 text-2xl font-semibold">Agile Delivery Model</h3>
            <p className="text-text-tertiary mb-4">
              Perfect for teams who want constant progress, iterative releases, and a delivery loop
              that adapts to new insights and business changes.
            </p>
            <Link href="/approach/agile" className="font-semibold text-green-700 hover:underline">
              Explore Agile →
            </Link>
          </motion.div>
        </div>
      </section>

      {/* HOW COLLABORATION WORKS */}
      <section className="bg-surface-tertiary mb-20 rounded-3xl p-10 shadow-md">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div className="relative h-72">
            <Image
              src="/images/team_hands.jpg"
              alt="Collaboration"
              fill
              className="rounded-2xl object-cover shadow-md"
            />
          </div>
          <div>
            <h2 className="text-text-primary mb-4 text-3xl font-semibold">
              Collaboration that feels natural — not forced
            </h2>
            <p className="text-text-tertiary mb-4">
              Some clients want daily meetings. Others prefer async updates. Some want us to lead;
              others want tight integration with their internal team.
            </p>
            <p className="text-text-tertiary">
              We fit into your world, not the other way around — while still bringing structure,
              accountability, and technical excellence.
            </p>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section 
      className="rounded-3xl bg-purple-700 px-2 py-16 text-center shadow-md">
        <h3 className="mb-4 text-3xl font-bold text-white md:text-4xl dark:text-gray-200">
          Not sure which approach fits you best?
        </h3>
        <p className="mx-auto mb-6 max-w-2xl text-lg text-purple-100 md:text-xl">
          Let&apos;s design a workflow tailored to your product, timeline, and goals — whether
          that&apos;s structured discovery, fast-paced agile execution, or a hybrid model.
        </p>

        <Link
          href="/contact"
          className="bg-background inline-block rounded-lg px-8 py-3 font-semibold text-purple-600 shadow-lg transition hover:scale-105 hover:bg-gray-300 hover:text-purple-700"
        >
          Design My Custom Workflow
        </Link>
      </section>
    </main>
  );
}
