import aboutData from "@/data/about-company.json";
import { metadataMap } from "@/lib/metadataMap";
import { Metadata } from "next";

export default function AboutPage() {
  return (
    <main className="min-h-screen px-6 py-12 text-slate-900 md:px-12 lg:px-24">
      <div className="mx-auto max-w-7xl">
        <section className="py-20">
          <h1 className="dark:text-primary-foreground mb-6 text-center text-4xl font-bold">
            Elevating Business Excellence through Innovative Solutions
          </h1>

          <p className="mx-auto mb-12 max-w-5xl text-center text-lg leading-relaxed text-gray-600">
            Wissenschaft is a distinguished software company renowned for its exceptional services
            in data science, market research software, business process optimization, cost
            optimization, and product development. With a steadfast commitment to excellence and
            innovation, Wissenschaft surpasses global standards in delivering bespoke solutions that
            empower businesses to thrive in today&apos;s dynamic landscape.
          </p>

          <div className="mt-16 grid gap-8 md:grid-cols-2">
            <div className="bg-background dark:bg-muted rounded-2xl p-8 shadow-sm transition-shadow hover:shadow-md">
              <h2 className="dark:text-primary-foreground mb-3 text-2xl font-semibold">
                Our Mission
              </h2>
              <p className="text-gray-600">
                To empower businesses through intelligent, data-driven, and cost-efficient software
                solutions that enable sustainable growth and competitive advantage.
              </p>
            </div>

            <div className="bg-background dark:bg-muted rounded-2xl p-8 shadow-sm transition-shadow hover:shadow-md">
              <h2 className="dark:text-primary-foreground mb-3 text-2xl font-semibold">
                Our Vision
              </h2>
              <p className="text-gray-600">
                To become a global leader in business innovation by blending technology, research,
                and human insight to redefine enterprise excellence.
              </p>
            </div>
          </div>
        </section>
        <section className="bg-background dark:bg-muted py-16">
          <div className="mx-auto">
            <h2 className="text-primary mb-10 text-center text-3xl font-semibold md:text-4xl">
              What Defines Wissenschaft
            </h2>

            <div className="relative border-l border-gray-200">
              {aboutData.slides.map((item, index) => (
                <div key={index} className="group mb-10 ml-6">
                  {/* Dot */}
                  <div className="absolute -left-3.5 flex h-7 w-7 items-center justify-center rounded-full bg-blue-100 group-hover:bg-blue-600">
                    <span className="group-hover:bg-background dark:bg-muted h-3 w-3 rounded-full bg-blue-600 transition" />
                  </div>

                  {/* Content */}
                  <h3 className="text-primary mb-2 text-xl font-semibold transition group-hover:text-blue-600">
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
