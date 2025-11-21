import "@/styles/globals.css";
import Navbar from "@/components/app/navbar";
import Footer from "@/components/app/footer";
import GTMHead from "@/components/gtm/GTMHead";
import GTMNoScript from "@/components/gtm/GTMNoScript";
import GTMPageView from "@/components/gtm/GTMPageView";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Wissenschaft Inc — Custom Software Solutions",
    template: "%s | Wissenschaft Inc",
  },
  description:
    "Wissenschaft Inc — technical research and product engineering. We build scalable systems, ML solutions, and custom software.",
  applicationName: "Wissenschaft Inc",
  openGraph: {
    title: "Wissenschaft Inc",
    description: "Custom Software Solutions",
    url: "https://wissenschaft-inc.com",
    siteName: "Wissenschaft Inc",
    images: ["/og-default.png"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Wissenschaft Inc",
    description: "Custom Software Solutions",
    images: ["/og-default.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  metadataBase: new URL("https://wissenschaft-inc.com"),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <GTMHead />
      </head>
      <body className="min-h-screen bg-background">
        <GTMNoScript />
        <GTMPageView />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
