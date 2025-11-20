import { __UNSAFE } from "@/types/utils.types";

declare global {
  interface Window {
    dataLayer: __UNSAFE[];
  }
}

export {};
