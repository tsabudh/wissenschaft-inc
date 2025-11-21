"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Read theme on client only
  useEffect(() => {
    const saved = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

    const theme = saved || (prefersDark ? "dark" : "light");
    const dark = theme === "dark";

    setIsDark(dark);
    document.documentElement.classList.toggle("dark", dark);
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    const next = !isDark;
    setIsDark(next);

    if (next) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  // Avoid rendering wrong icon before hydration
  if (!mounted) return null;

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className="
        inline-flex items-center gap-2 rounded-full border
        border-zinc-300 dark:border-zinc-700
        bg-white/80 dark:bg-zinc-900/80
        px-3 py-1 text-xs font-medium
        shadow-sm hover:shadow-md
        transition-all duration-200
        hover:-translate-y-0.5 cursor-pointer
      "
    >
      {/* Icon pill */}
      <span
        className="
          relative flex h-5 w-10 items-center rounded-full
          bg-zinc-200 dark:bg-zinc-700
          transition-colors duration-200
        "
      >
        <span
          className={`
            absolute h-4 w-4 rounded-full bg-white dark:bg-zinc-900
            shadow-sm transform transition-transform duration-200
            ${isDark ? "translate-x-5" : "translate-x-1"}
          `}
        />
      </span>

      {/* Label */}
      <span className="flex items-center gap-1 text-zinc-700 dark:text-zinc-200">
        {isDark ? "Dark" : "Light"}
        <span className="text-base">
          {isDark ? "🌙" : "☀️"}
        </span>
      </span>
    </button>
  );
}
