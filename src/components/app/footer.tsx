import Link from "next/link";
import BrandLogo from "../ui/icons/brand-logo";
import LinkFooter from "../ui/link-footer";

export default function Footer() {
  return (
    <footer className="bg-blue-950 px-6 py-20 text-gray-200 lg:px-20 dark:bg-slate-800">
      <div>
        <div className="mb-10">
          <Link
            href="/"
            className="font-lexend text-secondary block max-w-xs text-2xl font-semibold uppercase"
          >
            <BrandLogo />
          </Link>
          <div className="mt-3 border-b border-b-blue-50" />
        </div>

        <div className="mx-auto grid max-w-7xl grid-cols-4 gap-10 max-md:grid-cols-1">
          {/* Services */}
          <div>
            <h3 className="text-secondary mb-4 font-semibold">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <LinkFooter href="/services/web-dev">Web Development</LinkFooter>
              </li>
              <li>
                <LinkFooter href="/services/mobile-app">Mobile App Development</LinkFooter>
              </li>
              <li>
                <LinkFooter href="/services/product-dev">Product Development</LinkFooter>
              </li>
              <li>
                <LinkFooter href="/services/generative-ai">Generative AI</LinkFooter>
              </li>
            </ul>
          </div>

          {/* Technologies */}
          <div>
            <h3 className="text-secondary mb-4 font-semibold">Technologies</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <LinkFooter href="/technologies/ai-ml">AI/ML & Generative AI</LinkFooter>
              </li>
              <li>
                <LinkFooter href="/technologies/gcp">GCP</LinkFooter>
              </li>
              <li>
                <LinkFooter href="/technologies/aws">AWS</LinkFooter>
              </li>
              <li>
                <LinkFooter href="/technologies/python">Python</LinkFooter>
              </li>
              <li>
                <LinkFooter href="/technologies/typescript">TypeScript</LinkFooter>
              </li>
              <li>
                <LinkFooter href="/technologies/rust">Rust</LinkFooter>
              </li>
              <li>
                <LinkFooter href="/technologies/data-engineering">Data Engineering</LinkFooter>
              </li>
              <li>
                <LinkFooter href="/technologies/devops">DevOps</LinkFooter>
              </li>
            </ul>
          </div>

          {/* Case Studies */}
          <div>
            <h3 className="text-secondary mb-4 font-semibold">Case Studies</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <LinkFooter href="/case-studies/skax">SK AX</LinkFooter>
              </li>
              <li>
                <LinkFooter href="/case-studies/sk-gigax">SK GigaX</LinkFooter>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-secondary mb-4 font-semibold">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <LinkFooter href="/about">About us</LinkFooter>
              </li>
              <li>
                <LinkFooter href="/approach">How We Work</LinkFooter>
              </li>
              <li>
                <LinkFooter href="/careers">Careers</LinkFooter>
              </li>
              <li>
                <LinkFooter href="#">Contact Us</LinkFooter>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
