import type { Metadata } from "next";
import { metadataMap } from "../metadataMap";

export function getPageMetadata(pathname: string): Metadata {
  return (
    metadataMap[pathname] || {
      title: "Wissenschaft Inc",
      description: "Wissenschaft Inc — Engineering Excellence",
    }
  );
}
