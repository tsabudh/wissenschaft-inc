import Navbar from "@/components/app/navbar";
import type { ReactNode } from "react";

export default async function StaticLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="flex flex-col h-screen ">
      <div
        id="app-body"
        className="w-full overflow-x-hidden overflow-y-auto pt-[70px] lg:px-0 lg:pb-0"
        style={{ height: "calc(100vh - var(--navbar-height, 0px))" }}
      >
        {children}
      </div>
    </div>
  );
}
