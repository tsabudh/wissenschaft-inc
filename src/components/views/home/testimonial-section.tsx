import TestimonialCard from "@/components/ui/cards/card-testimonial";
import React from "react";

const TestimonialSection: React.FC = () => {
  return (
    <main className="px-6 lg:px-20">
      <section className="mb-10 py-10">
        <h2 className="mb-10 text-5xl font-medium text-blue-400  dark:text-blue-800">What our clients say</h2>

        <div className="grid grid-cols-3 gap-10 max-lg:grid-cols-1">
          <TestimonialCard
            avatar="/images/avatar_male.jpg"
            name="Kyle Seo"
            designation="Business Development Officer, SK"
            quote="Working with Wissenschaft Inc. has been a game-changer for our company. Their innovative approach has helped us streamline processes and achieve business goals faster than ever before."
          />

          <TestimonialCard
            avatar="/images/avatar_female.jpg"
            name="Emily Johnson"
            designation="CEO, Direct Contact Medical"
            quote="Wissenschaft Inc. has provided us with unparalleled service and support. Their expertise and dedication have been critical to our success. I highly recommend their services to any company looking to enhance their technological capabilities."
          />
        </div>
      </section>
    </main>
  );
};

export default TestimonialSection;
