"use client";

import React from "react";

type TestimonialCardProps = {
  avatar?: string;        
  name: string;           
  designation: string;   
  quote: string;         
};

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  avatar,
  name,
  designation,
  quote,
}) => {
  return (
    <div className="_card_2 group flex bg-slate-100 rounded-2xl overflow-hidden cursor-default shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-100">
      <div className="p-6 flex-1 relative text-xl">
        {/* Avatar + Name */}
        <div className="flex items-center gap-4 mb-4">
          {avatar && (
            <img
              src={avatar}
              alt={name}
              className="w-12 h-12 rounded-full object-cover border border-slate-200"
            />
          )}
          <div>
            <h3 className="text-slate-600 font-semibold text-2xl group-hover:text-slate-600">
              {name}
            </h3>
            <span className="text-gray-400 text-sm">{designation}</span>
          </div>
        </div>

        {/* Quote */}
        <p className="text-gray-500 mt-2 italic leading-relaxed">“{quote}”</p>
      </div>
    </div>
  );
};

export default TestimonialCard;
