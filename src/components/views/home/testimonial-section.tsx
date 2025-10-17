import TestimonialCard from "@/components/ui/cards/card-testimonial";
import React from "react";

const TestimonialSection: React.FC = () => {
  return (
    <main className="px-10">
      <section className="py-10 mb-10">
        <h2 className="text-5xl text-blue-400 font-medium mb-10">
          What our clients say
        </h2>

        <div className="grid grid-cols-3 gap-10 max-lg:grid-cols-1">
          <TestimonialCard
            avatar="/images/kyle.jpg"
            name="Kyle Seo"
            designation="CEO, TechCorp"
            quote="Working with Wissenschaft Inc. has been a game-changer for our company. Their innovative approach has helped us streamline processes and achieve business goals faster than ever before."
          />

          <TestimonialCard
            avatar="/images/john.jpg"
            name="John Doe"
            designation="Founder, CreativeHub"
            quote="Wissenschaft transformed our online presence. Their team was professional, creative, and responsive throughout the process. Highly recommended!"
          />

          <TestimonialCard
            avatar="/images/sarah.jpg"
            name="Sarah Lee"
            designation="Marketing Director, BrightWorks"
            quote="The collaboration was seamless and efficient. The results exceeded our expectations and boosted our brand visibility significantly."
          />
        </div>
      </section>
    </main>
  );
};

export default TestimonialSection;
