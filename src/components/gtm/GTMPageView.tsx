"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

export default function GTMPageView() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const url = pathname + (searchParams?.toString() ? `?${searchParams}` : "");

    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "page_view",
      page: url,
    });
  }, [pathname, searchParams]);

  return null;
}
