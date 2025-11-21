// app/not-found.tsx
"use client";

import { useRouter } from "next/navigation";

export default function NotFoundPage() {
  const router = useRouter();

  return (
    <div className="text-foreground flex min-h-screen flex-col items-center justify-center bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 px-4">
      <h1 className="animate-bounce text-9xl font-extrabold">404</h1>
      <h2 className="mt-4 text-3xl font-semibold md:text-4xl">Oops! Page not found</h2>
      <p className="text-foreground/80 mt-2 max-w-md text-center text-lg md:text-xl">
        The page you&apos;re looking for doesn&apos;t exist. It might have been removed or you typed
        the URL wrong.
      </p>
      <button
        onClick={() => router.push("/")}
        className="bg-background mt-6 cursor-pointer rounded-lg px-6 py-3 font-semibold text-purple-600 shadow-lg transition-all hover:scale-105 hover:bg-purple-50"
      >
        Go Back Home
      </button>
    </div>
  );
}
