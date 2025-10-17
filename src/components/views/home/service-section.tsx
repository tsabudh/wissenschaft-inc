import React from "react";
import IconBrand from "@/components/ui/icons/brand";
import ServiceCard from "@/components/ui/cards/card-a";

export default function ServiceSection() {
  return (
    <main className="px-10">
      <section className="py-20">
        {/* ...intro section */}

        <h2 className="mb-10 text-5xl font-medium text-blue-400">What we do</h2>
        <div className="grid grid-cols-2 gap-10 max-lg:grid-cols-1">
          <ServiceCard
            title="Brand & Identity Design"
            description="We craft unique brand identities that communicate your values and make your business stand out with lasting impact."
            href="#"
            icon={<IconBrand />}
          />
          <ServiceCard
            title="Custom Software Development"
            description="Tailored software solutions designed to fit your business needs, ensuring scalability, reliability, and seamless performance."
            href="#"
            icon={<IconBrand />}
          />
          <ServiceCard
            title="Mobile App Development"
            description="We build intuitive, high-performing mobile apps that engage users and deliver smooth experiences across iOS and Android."
            href="#"
            icon={<IconBrand />}
          />
          <ServiceCard
            title="Website & Web App"
            description="Modern, responsive websites and web apps built to be fast, secure, and user-friendly, helping you grow your online presence."
            href="#"
            icon={<IconBrand />}
          />
        </div>
        <div className="mt-20 flex justify-center">
          <a
            href="#"
            className="rounded-lg bg-blue-400 px-6 py-3 text-xl font-medium text-white transition-colors duration-300 hover:bg-blue-500"
          >
            View All Services
          </a>
        </div>
      </section>
    </main>
  );
}
