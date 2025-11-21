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
    <div className="_card_2 group flex cursor-default overflow-hidden rounded-md bg-slate-100 dark:bg-slate-300 shadow-sm transition-all duration-100 hover:-translate-y-1 hover:shadow-md">
      <div className="relative flex-1 p-6 text-xl">
        {/* Avatar + Name */}
        <div className="mb-4 flex items-center gap-4">
          {avatar && (
            <Image
              src={avatar}
              alt={name}
              className="h-12 w-12 rounded-full border border-slate-200 object-cover"
              width={200}
              height={200}
            />
          )}
          <div>
            <h3 className="text-2xl font-semibold text-slate-600 group-hover:text-slate-600">
              {name}
            </h3>
            <span className="text-sm text-gray-400">{designation}</span>
          </div>
        </div>

        {/* Quote */}
        <p className="mt-2 leading-relaxed text-gray-500 italic">“{quote}”</p>
      </div>
    </div>
  );
};

export default TestimonialCard;
