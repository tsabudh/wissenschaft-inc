import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * Utility function to merge TailwindCSS classes conditionally.
 * - clsx → handles conditional class names (`isActive && "bg-blue-500"`)
 * - tailwind-merge → resolves Tailwind conflicts (`px-2` overrides `px-4`)
 */
export function cn(...inputs: any[]) {
  return twMerge(clsx(inputs))
}
