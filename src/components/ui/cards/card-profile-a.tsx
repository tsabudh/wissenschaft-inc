"use client";
import Image from "next/image";

interface CardProfileAProps {
  name: string;
  position: string;
  bio: string;
  image: string;
}

export default function CardProfileA({ name, position, bio, image }: CardProfileAProps) {
  return (
    <div className="bg-background flex flex-col items-center rounded-2xl p-6 text-center shadow-md transition hover:shadow-lg">
      {/* Circular Image */}
      <div className="relative mb-4 h-32 w-32 overflow-hidden rounded-full">
        <Image src={image} alt={name} fill className="object-cover" />
      </div>

      {/* Name */}
      <h3 className="mb-1 text-xl font-semibold text-gray-800">{name}</h3>

      {/* Position */}
      <p className="mb-3 font-medium text-indigo-600">{position}</p>

      {/* Bio */}
      <p className="text-sm leading-relaxed text-gray-600">{bio}</p>
    </div>
  );
}
