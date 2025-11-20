import "@/styles/globals.css";
import Navbar from "@/components/app/navbar";
import Footer from "@/components/app/footer";
import GTMHead from "@/components/gtm/GTMHead";
import GTMNoScript from "@/components/gtm/GTMNoScript";
import GTMPageView from "@/components/gtm/GTMPageView";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <GTMHead />
      </head>
      <body className="min-h-screen bg-gray-50">
        <GTMNoScript />
        <GTMPageView />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
