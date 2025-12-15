"use client";

import Image from "next/image";
import React from "react";

type TestimonialCardProps = {
  avatar?: string;
  name: string;
  designation: string;
  quote: string;
};

const TestimonialCard: React.FC<TestimonialCardProps> = ({ avatar, name, designation, quote }) => {
  return (
    <div className="_card_2 group bg-surface-secondary flex cursor-default overflow-hidden rounded-md shadow-sm transition-all duration-100 hover:-translate-y-1 hover:shadow-md">
      <div className="relative flex-1 p-6 text-xl">
        {/* Avatar + Name */}
        <div className="mb-4 flex items-center gap-4">
          {avatar && (
            <Image
              src={avatar}
              alt={name}
              className="border-primary h-12 w-12 rounded-full border-2 object-cover"
              width={200}
              height={200}
            />
          )}
          <div>
            <h3 className="text-text-secondary text-2xl font-semibold">{name}</h3>
            <span className="text-sm text-gray-400">{designation}</span>
          </div>
        </div>

        {/* Quote */}
        <p className="group-hover:text-text-primary text-text-tertiary mt-2 leading-relaxed italic">
          “{quote}”
        </p>
      </div>
    </div>
  );
};

export default TestimonialCard;
