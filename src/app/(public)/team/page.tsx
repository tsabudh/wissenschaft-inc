"use client";
import CardProfileA from "@/components/ui/cards/card-profile-a";
import teamData from "@/data/team.json";

export default function TeamPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-20">
      {/* Hero Section */}
      <section className="mb-16 px-6 text-center">
        <h1 className="mb-4 text-4xl font-bold text-gray-800 md:text-5xl">Meet the Team</h1>
        <p className="mx-auto max-w-2xl text-lg text-gray-600">
          The minds driving Wissenschaft’s excellence, innovation, and global impact.
        </p>
      </section>

      {/* Team Grid */}
      <section className="mx-auto grid max-w-6xl gap-10 px-6 sm:grid-cols-2 md:grid-cols-4">
        {teamData.members.map((member, idx) => (
          <CardProfileA
            key={idx}
            name={member.name}
            position={member.position}
            bio={member.bio}
            image={member.image}
          />
        ))}
      </section>

      {/* Culture Section */}
      <section className="mt-24 bg-white py-16">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="mb-6 text-3xl font-semibold text-gray-800">Our Culture</h2>
          <p className="text-lg leading-relaxed text-gray-600">
            At Wissenschaft, we believe in curiosity, collaboration, and continuous innovation. Our
            culture fosters creativity and technical excellence, empowering each member to
            contribute meaningfully to transformative projects.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="mt-20 bg-indigo-600 py-16 text-center text-white">
        <h2 className="mb-4 text-3xl font-semibold">Join Our Team</h2>
        <p className="mx-auto mb-6 max-w-xl text-indigo-100">
          We’re always looking for curious and passionate minds to help us redefine software
          innovation.
        </p>
        <a
          href="/careers"
          className="inline-block rounded-full bg-white px-6 py-3 font-semibold text-indigo-600 shadow transition hover:bg-indigo-50"
        >
          View Open Positions
        </a>
      </section>
    </main>
  );
}
