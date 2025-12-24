import RoundGradient from "@/components/ui/backgrounds/round-gradient";
import careers from "@/data/careers.json";
import { metadataMap } from "@/lib/metadataMap";
import { Metadata } from "next";

export default function CareersPage() {
  return (
    <main className="min-h-screen px-6 py-20">
      {/* Hero Section */}
      <section className="mb-16 text-center">
        <h1 className="text-text-tertiary mb-4 text-4xl font-bold md:text-5xl">Join Our Team</h1>
        <p className="text-text-tertiary mx-auto max-w-2xl text-lg">
          Be part of a culture that values creativity, technical excellence, and meaningful impact.
        </p>
      </section>

      <RoundGradient variant="first" />

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
              className="bg-surface-secondary flex flex-col rounded-2xl p-6 shadow-sm transition hover:shadow-md"
            >
              <div className="mb-4">
                <h2 className="text-text-tertiary text-2xl font-semibold">{job.title}</h2>
                <p className="text-text-tertiary text-sm">
                  {job.department} • {job.location} • {job.type}
                </p>
              </div>

              <p className="text-text-tertiary mb-4 flex-1">{job.description}</p>

              <div>
                <h3 className="text-text-tertiary mb-2 font-medium">Requirements:</h3>
                <ul className="text-text-tertiary mb-4 list-inside list-disc space-y-1 text-sm">
                  {job.requirements.map((req, i) => (
                    <li key={i}>{req}</li>
                  ))}
                </ul>
              </div>

              <button className="text-md text-primary-foreground bg-primary hover:bg-accent rounded-lg px-4 py-2 font-medium shadow-md transition dark:text-gray-100">
                Apply Now
              </button>
            </div>
          )
        )}
        {careers.openings.length === 0 ? <p>We do not have any openings right now. </p> : null}
      </section>

      {/* Footer Section */}
      <section className="mt-24 text-center">
        <h2 className="text-text-tertiary mb-4 text-3xl font-semibold">
          Don&apos;t See Your Role?
        </h2>
        <p className="text-text-tertiary mx-auto mb-6 max-w-xl">
          We&apos;re always looking for passionate individuals to join our growing team. Send us
          your CV — we&apos;d love to hear from you.
        </p>
        <a
          href="mailto:careers@wissenschaft-inc.com"
          className="text-text-primary hover:text-primary-foreground bg-surface-tertiary hover:bg-primary rounded-lg px-4 py-2 font-medium"
        >
          Send Resume
        </a>
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
