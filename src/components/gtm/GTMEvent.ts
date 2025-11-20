"use client"; 

import { __UNSAFE } from "@/types/utils.types";

export const gtmEvent = (eventData: { event: string; [key: string]: __UNSAFE }) => {
  if (typeof window !== "undefined") {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push(eventData);
  }
};