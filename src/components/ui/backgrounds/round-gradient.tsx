import { cn } from "@/lib/utils/cn";
import React from "react";
interface RoundGradientProps {
  variant?: "first" | "second" | "third" | "fourth" | "fifth";
}

function RoundGradient({ variant = "first" }: RoundGradientProps) {
  const gradientMap = new Map();
  gradientMap.set(
    "first",
    "bg-[radial-gradient(circle_at_20%_20%,rgba(37,99,235,0.15),transparent_50%)]"
  );
  gradientMap.set(
    "second",
    "bg-[radial-gradient(circle_at_20%_20%,rgba(9,80,118,0.15),transparent_50%)]"
  );
  gradientMap.set(
    "third",
    "bg-[radial-gradient(circle_at_20%_40%,rgba(37,9,25,0.15),transparent_60%)]"
  );
  gradientMap.set(
    "fourth",
    "bg-[radial-gradient(circle_at_30%_20%,rgba(7,89,35,0.15),transparent_50%)]"
  );
  gradientMap.set(
    "fifth",
    "bg-[radial-gradient(circle_at_30%_20%,rgba(7,89,35,0.15),transparent_50%)]"
  );
  return <div className={cn("absolute inset-0 -z-10 h-full w-full", gradientMap.get(variant))} />;
}

export default RoundGradient;
