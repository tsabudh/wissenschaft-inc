"use client";

import clsx from "clsx";
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
    <div className="group bg-surface-secondary flex cursor-default flex-col gap-6 overflow-hidden rounded-md p-6 shadow-sm transition-all duration-100 hover:-translate-y-1 hover:shadow-md">
      <h3 className="text-3xl font-semibold">{title}</h3>
      <div className="flex gap-6">
        {/* Icon Area */}
        <div className="bg-tertiary flex items-center justify-center">
          <Image src={imageUrl} height={200} width={200} alt={title} className="cover" />
        </div>

        {/* Text Area */}
        <div className="text-text-tertiary relative flex-1 text-xl">
          <p className="mt-2">{description}</p>
          <a
            href={href}
            className={clsx(
              "hover:text-primary relative mt-4 inline-flex items-center gap-2 transition-all duration-150 before:absolute",
              "before:bottom-0 before:left-0 before:w-full before:origin-right before:scale-x-0 before:border-b-2 before:border-blue-400 before:transition-transform",
              "before:duration-300 hover:gap-3 hover:before:origin-left hover:before:scale-x-100"
            )}
          >
            <span>Learn more</span>
            <span>→</span>
          </a>
        </div>
      </div>
    </div>
  );
}
