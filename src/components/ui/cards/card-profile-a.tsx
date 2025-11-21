"use client";
import Image from "next/image";
import { useState } from "react";

interface CardProfileAProps {
  name: string;
  position: string;
  bio: string;
  image?: string; // optional
}

export default function CardProfileA({ name, position, bio, image }: CardProfileAProps) {
  const [imgError, setImgError] = useState(false);

  // Compute initials from name
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();

  // Random pastel color for initials background
  const bgColors = [
    "bg-red-300",
    "bg-green-300",
    "bg-blue-300",
    "bg-yellow-300",
    "bg-purple-300",
    "bg-pink-300",
    "bg-indigo-300",
    "bg-teal-300",
  ];
  const color = bgColors[name.length % bgColors.length];

  return (
    <div className="bg-background flex flex-col items-center rounded-2xl p-6 text-center shadow-md transition hover:shadow-lg dark:bg-gray-800">
      {/* Circular Image or Initials */}
      <div className="relative mb-4 flex h-32 w-32 items-center justify-center overflow-hidden rounded-full">
        {image && !imgError ? (
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover"
            onError={() => setImgError(true)}
          />
        ) : (
          <div
            className={`flex h-full w-full items-center justify-center text-4xl font-bold text-white ${color}`}
          >
            {initials}
          </div>
        )}
      </div>

      {/* Name */}
      <h3 className="mb-1 text-xl font-semibold text-gray-800 dark:text-gray-300">{name}</h3>

      {/* Position */}
      <p className="mb-3 font-medium text-indigo-600">{position}</p>

      {/* Bio */}
      <p className="text-sm leading-relaxed text-gray-600">{bio}</p>
    </div>
  );
}
