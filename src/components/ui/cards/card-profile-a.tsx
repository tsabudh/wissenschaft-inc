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
    <div className="bg-white rounded-2xl shadow-md hover:shadow-lg transition p-6 flex flex-col items-center text-center">
      {/* Circular Image */}
      <div className="w-32 h-32 relative rounded-full overflow-hidden mb-4">
        <Image src={image} alt={name} fill className="object-cover" />
      </div>

      {/* Name */}
      <h3 className="text-xl font-semibold text-gray-800 mb-1">{name}</h3>

      {/* Position */}
      <p className="text-indigo-600 font-medium mb-3">{position}</p>

      {/* Bio */}
      <p className="text-gray-600 text-sm leading-relaxed">{bio}</p>
    </div>
  );
}
