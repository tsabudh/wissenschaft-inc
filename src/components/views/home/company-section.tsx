import Image from "next/image";
import React from "react";

export default function CompanySection() {
  return (
    <main className="px-6 lg:px-20">
      <section className="py-20">
        <div className="relative mx-auto mb-40 flex w-full justify-center">
          <div className="grid grid-cols-2 [grid-template-rows:auto_1fr] gap-x-10 max-lg:!grid-cols-1 max-lg:[grid-template-rows:auto_1fr_auto]">
            <div className="col-span-1 col-start-1 col-end-2">
              <h2 className="text-5xl">Get the best product on the market</h2>
            </div>

            <div className="col-start-1 col-end-2 py-4 max-lg:col-end-2 max-lg:row-start-3 max-lg:row-end-4">
              <h2 className="text-3xl text-gray-500">
                We provide product development, custom mobile application, web application and
                generative AI solutions for clients &amp; organizations of all sizes.
              </h2>
            </div>

            <figure className="relative col-start-2 col-end-3 row-start-1 row-end-3 max-lg:col-start-1 max-lg:col-end-2 max-lg:row-start-2 max-lg:row-end-3 max-lg:mt-12">
              <div className="absolute -top-10 right-5 z-1 rounded-xl bg-sky-900">
                <div className="flex flex-col gap-2 p-6 text-3xl font-medium text-blue-200">
                  <h2>Site &amp; App</h2>
                  <h2>Gen AI</h2>
                  <h2>Product</h2>
                </div>
              </div>

              <Image
                src="/images/team_hands.jpg"
                alt="Wissenschaft Inc"
                className="z-0 rounded-xl grayscale-50"
                width={600}
                height={400}
                priority
              />
            </figure>
          </div>
        </div>
      </section>
    </main>
  );
}
