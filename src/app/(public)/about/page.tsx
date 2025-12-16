import aboutData from "@/data/about-company.json";
import { metadataMap } from "@/lib/metadataMap";
import { Metadata } from "next";

export default function AboutPage() {
  return (
    <main className="text-text- min-h-screen px-6 py-12 md:px-12 lg:px-24">
      <div className="mx-auto max-w-7xl">
        <section className="py-20">
          <h1 className="text-text- mb-6 text-center text-4xl font-bold">
            Elevating Business Excellence through Innovative Solutions
          </h1>

          <p className="text-text-secondary mx-auto mb-12 max-w-5xl text-center text-lg leading-relaxed">
            Wissenschaft is a distinguished software company renowned for its exceptional services
            in data science, market research software, business process optimization, cost
            optimization, and product development. With a steadfast commitment to excellence and
            innovation, Wissenschaft surpasses global standards in delivering bespoke solutions that
            empower businesses to thrive in today&apos;s dynamic landscape.
          </p>

          <div className="mt-16 grid gap-8 md:grid-cols-2">
            <div className="bg-surface-secondary rounded-lg p-8 shadow-sm transition-shadow hover:shadow-md">
              <h2 className="mb-3 text-2xl font-semibold">Our Mission</h2>
              <p className="text-text-tertiary">
                To empower businesses through intelligent, data-driven, and cost-efficient software
                solutions that enable sustainable growth and competitive advantage.
              </p>
            </div>

            <div className="bg-surface-secondary rounded-lg p-8 shadow-sm transition-shadow hover:shadow-md">
              <h2 className="mb-3 text-2xl font-semibold">Our Vision</h2>
              <p className="text-text-tertiary">
                To become a global leader in business innovation by blending technology, research,
                and human insight to redefine enterprise excellence.
              </p>
            </div>
          </div>
        </section>
        <section className="bg-surface-secondary py-16 rounded-lg">
          <div className="mx-auto">
            <h2 className="text-text-primary mb-10 text-center text-3xl font-semibold md:text-4xl">
              What Defines Wissenschaft
            </h2>

            <div className="relative border-l border-gray-200">
              {aboutData.slides.map((item, index) => (
                <div key={index} className="group mb-10 ml-6">
                  {/* Dot */}
                  <div className="group-hover:bg-primary absolute -left-3.5 flex h-7 w-7 items-center justify-center rounded-full bg-blue-100">
                    <span className="group-hover:bg-surface-secondary bg-primary h-3 w-3 rounded-full transition" />
                  </div>

                  {/* Content */}
                  <h3 className="text- mb-2 text-xl font-semibold transition">
                    {item.indicatorText}
                  </h3>
                  <p className="leading-relaxed text-gray-600">{item.textContent}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
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
