"use client";

import careers from "@/data/careers.json";

export default function CareersPage() {
  return (
    <main className="min-h-screen bg-gray-50 px-6 py-20">
      {/* Hero Section */}
      <section className="mb-16 text-center">
        <h1 className="mb-4 text-4xl font-bold text-gray-800 md:text-5xl">Join Our Team</h1>
        <p className="mx-auto max-w-2xl text-lg text-gray-600">
          Be part of a culture that values creativity, technical excellence, and meaningful impact.
        </p>
      </section>

      {/* Job Listings */}
      <section className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2">
        {careers.openings.map(
          (job: {
            id: number;
            title: string;
            location: string;
            type: string;
            description: string;
            department: string;
            requirements: string[];
          }) => (
            <div
              key={job.id}
              className="flex flex-col rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition hover:shadow-md"
            >
              <div className="mb-4">
                <h2 className="text-2xl font-semibold text-gray-800">{job.title}</h2>
                <p className="text-sm text-gray-500">
                  {job.department} • {job.location} • {job.type}
                </p>
              </div>

              <p className="mb-4 flex-1 text-gray-600">{job.description}</p>

              <div>
                <h3 className="mb-2 font-medium text-gray-800">Requirements:</h3>
                <ul className="mb-4 list-inside list-disc space-y-1 text-sm text-gray-600">
                  {job.requirements.map((req, i) => (
                    <li key={i}>{req}</li>
                  ))}
                </ul>
              </div>

              <button className="mt-auto rounded-full bg-indigo-600 px-5 py-2 font-medium text-white transition hover:bg-indigo-700">
                Apply Now
              </button>
            </div>
          )
        )}
      </section>

      {/* Footer Section */}
      <section className="mt-24 text-center">
        <h2 className="mb-4 text-3xl font-semibold text-gray-800">Don’t See Your Role?</h2>
        <p className="mx-auto mb-6 max-w-xl text-gray-600">
          We’re always looking for passionate individuals to join our growing team. Send us your CV
          — we’d love to hear from you.
        </p>
        <a
          href="mailto:careers@wissenschaft-inc.com"
          className="inline-block rounded-full bg-indigo-600 px-6 py-3 font-semibold text-white shadow transition hover:bg-indigo-700"
        >
          Send Resume
        </a>
      </section>
    </main>
  );
}
