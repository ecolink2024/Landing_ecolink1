"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

const GA_MEASUREMENT_ID =
  process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "G-5XQDC4DWKK";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export function GoogleAnalyticsPageViews() {
  const pathname = usePathname();
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (!pathname) return;

    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    window.gtag?.("config", GA_MEASUREMENT_ID, {
      page_path: pathname,
    });
  }, [pathname]);

  return null;
}
