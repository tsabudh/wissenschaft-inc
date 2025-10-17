import aboutData from "@/data/about-company.json";

export default function AboutPage() {
  const slides = aboutData.slides;

  return (
    <main className="min-h-screen bg-gray-50 text-gray-800">
      <section className="mx-auto max-w-5xl px-6 py-20">
        <h1 className="mb-6 text-center text-4xl font-bold">
          Elevating Business Excellence through Innovative Solutions
        </h1>

        <p className="mx-auto mb-12 max-w-3xl text-center text-lg leading-relaxed text-gray-600">
          Wissenschaft is a distinguished software company renowned for its exceptional services in
          data science, market research software, business process optimization, cost optimization,
          and product development. With a steadfast commitment to excellence and innovation,
          Wissenschaft surpasses global standards in delivering bespoke solutions that empower
          businesses to thrive in today&apos;s dynamic landscape.
        </p>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          <div className="rounded-2xl bg-white p-8 shadow-sm transition-shadow hover:shadow-md">
            <h2 className="mb-3 text-2xl font-semibold">Our Mission</h2>
            <p className="text-gray-600">
              To empower businesses through intelligent, data-driven, and cost-efficient software
              solutions that enable sustainable growth and competitive advantage.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-8 shadow-sm transition-shadow hover:shadow-md">
            <h2 className="mb-3 text-2xl font-semibold">Our Vision</h2>
            <p className="text-gray-600">
              To become a global leader in business innovation by blending technology, research, and
              human insight to redefine enterprise excellence.
            </p>
          </div>
        </div>
      </section>
      <section className="bg-white py-16">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="mb-10 text-center text-3xl font-semibold text-gray-800 md:text-4xl">
            What Defines Wissenschaft
          </h2>

          <div className="relative border-l border-gray-200">
            {aboutData.slides.map((item, index) => (
              <div key={index} className="group mb-10 ml-6">
                {/* Dot */}
                <div className="absolute -left-3.5 flex h-7 w-7 items-center justify-center rounded-full bg-blue-100 group-hover:bg-blue-600">
                  <span className="h-3 w-3 rounded-full bg-blue-600 transition group-hover:bg-white" />
                </div>

                {/* Content */}
                <h3 className="mb-2 text-xl font-semibold text-gray-800 transition group-hover:text-blue-600">
                  {item.indicatorText}
                </h3>
                <p className="leading-relaxed text-gray-600">{item.textContent}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
