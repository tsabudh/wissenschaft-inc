"use client";

import Image from "next/image";
import React from "react";

interface CardBProps {
  title: string;
  description: string;
  href: string;
  imageUrl: string;
}

export default function CardB({ title, description, href, imageUrl }: CardBProps) {
  return (
    <div className="group flex cursor-default overflow-hidden rounded-md bg-slate-100 shadow-sm transition-all duration-100 hover:-translate-y-1 hover:shadow-md dark:bg-slate-700">
      {/* Icon Area */}
      <div className="flex items-center justify-center bg-slate-300 text-slate-500 dark:bg-slate-600 dark:text-gray-400 p-3">
        <Image src={imageUrl} height={200} width={200} alt={title} className="cover"/>
      </div>

      {/* Text Area */}
      <div className="relative flex-1 p-6 text-xl">
        <h3 className="text-3xl font-semibold text-slate-600 group-hover:text-slate-600 dark:text-gray-400">
          {title}
        </h3>
        <p className="mt-2 text-gray-400 dark:text-gray-500">{description}</p>
        <a
          href={href}
          className="relative mt-4 inline-flex items-center gap-2 text-gray-400 transition-all duration-150 before:absolute before:bottom-0 before:left-0 before:w-full before:origin-right before:scale-x-0 before:border-b-2 before:border-blue-400 before:transition-transform before:duration-300 hover:gap-3 hover:text-blue-400 hover:before:origin-left hover:before:scale-x-100 dark:text-gray-500"
        >
          <span>Learn More</span>
          <span>→</span>
        </a>
      </div>
    </div>
  );
}
