"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function ApproachPage() {
  return (
    <main className="mx-auto min-h-screen max-w-7xl bg-gray-50 px-6 py-16 text-gray-800 lg:px-20">
      {/* HERO */}
      <section className="mb-20 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-4 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl"
        >
          How We Work — A Process Built Around <span className="text-rose-700 font-extrabold">*You*</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mx-auto max-w-3xl text-lg text-gray-600 md:text-xl"
        >
          Every business is different — your process should be too.  
          We combine strategy, flexibility, and proven frameworks to build software that matches
          your vision, your timeline, and your way of working.
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
          <h2 className="text-3xl font-bold text-gray-900">
            The Principles That Guide Our Work
          </h2>
          <p className="mx-auto mt-2 max-w-2xl text-gray-600">
            Behind every project we deliver is a set of values that ensures clarity, momentum, and quality.
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
              className="rounded-xl bg-white p-8 shadow-md transition hover:shadow-xl"
            >
              <h3 className="mb-3 text-xl font-semibold">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* OUR MODES OF WORK */}
      <section className="mb-20">
        <header className="mb-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900">
            Choose the workflow that fits your product
          </h2>
          <p className="mx-auto max-w-2xl text-gray-600">
            From early-stage idea validation to fast-paced feature delivery —  
            we support multiple engagement styles tailored to your needs.
          </p>
        </header>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl bg-white p-8 shadow-md hover:shadow-xl"
          >
            <h3 className="mb-3 text-2xl font-semibold text-gray-900">Discovery-Led Approach</h3>
            <p className="mb-4 text-gray-600">
              Ideal when you have a vision but need clarity, validation, and a roadmap.  
              We help you define the right problems before writing a single line of code.
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
            className="rounded-2xl bg-white p-8 shadow-md hover:shadow-xl"
          >
            <h3 className="mb-3 text-2xl font-semibold text-gray-900">Agile Delivery Model</h3>
            <p className="mb-4 text-gray-600">
              Perfect for teams who want constant progress, iterative releases,  
              and a delivery loop that adapts to new insights and business changes.
            </p>
            <Link
              href="/approach/agile"
              className="font-semibold text-green-700 hover:underline"
            >
              Explore Agile →
            </Link>
          </motion.div>
        </div>
      </section>

      {/* HOW COLLABORATION WORKS */}
      <section className="mb-20 rounded-3xl bg-white p-10 shadow-md">
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
            <h2 className="mb-4 text-3xl font-semibold text-gray-900">
              Collaboration that feels natural — not forced
            </h2>
            <p className="mb-4 text-gray-600">
              Some clients want daily meetings. Others prefer async updates.  
              Some want us to lead; others want tight integration with their internal team.
            </p>
            <p className="text-gray-600">
              We fit into your world, not the other way around — while still bringing  
              structure, accountability, and technical excellence.
            </p>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="rounded-3xl bg-purple-700 py-16 text-center text-white shadow-lg">
        <h3 className="mb-4 text-3xl font-bold md:text-4xl">
          Not sure which approach fits you best?
        </h3>
        <p className="mx-auto mb-6 max-w-2xl text-lg text-purple-100 md:text-xl">
          Let’s design a workflow tailored to your product, timeline, and goals —  
          whether that’s structured discovery, fast-paced agile execution, or a hybrid model.
        </p>

        <Link
          href="/contact"
          className="inline-block rounded-lg bg-white px-10 py-4 font-semibold text-purple-700 shadow-xl transition hover:scale-105 hover:bg-gray-100"
        >
          Design My Custom Workflow
        </Link>
      </section>

      <footer className="text-md mt-12 text-center text-gray-500">
        <p>© {new Date().getFullYear()} Wissenschaft Inc. Flexible, collaborative, human-centered delivery.</p>
      </footer>
    </main>
  );
}
