import Link from "next/link";
import { ReactNode } from "react";

interface LinkFooterProps {
  href: string;
  children: ReactNode;
}

function LinkFooter({ href, children }: LinkFooterProps) {
  return (
    <Link href={href} className="hover:text-blue-300">
      {children}
    </Link>
  );
}

export default LinkFooter;
