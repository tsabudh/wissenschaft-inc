import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-800 px-10 py-20 text-gray-200">
      <div>
        <div className="mb-10">
          <Link href="/" className="font-lexend text-2xl font-semibold text-white uppercase">
            wissenschaft inc.
          </Link>
          <div className="border-b border-b-blue-50" />
        </div>

        <div className="mx-auto grid max-w-7xl grid-cols-4 gap-10 max-md:grid-cols-1">
          {/* Services */}
          <div>
            <h3 className="mb-4 font-semibold text-white">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/services/web-dev">Web Development</Link>
              </li>
              <li>
                <Link href="/services/mobile-app">Mobile App Development</Link>
              </li>
              <li>
                <Link href="/services/product-dev">Product Development</Link>
              </li>
              <li>
                <Link href="/services/generative-ai">Generative AI</Link>
              </li>
            </ul>
          </div>

          {/* Case Studies */}
          <div>
            <h3 className="mb-4 font-semibold text-white">Case Studies</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#">Direct Contact Medical</Link>
              </li>
              <li>
                <Link href="#">SK AX</Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="mb-4 font-semibold text-white">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/approach">How We Work</Link>
              </li>
              <li>
                <Link href="#">Resources</Link>
              </li>
              <li>
                <Link href="#">Blog</Link>
              </li>
              <li>
                <Link href="#">Careers</Link>
              </li>
              <li>
                <Link href="#">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Technologies */}
          <div>
            <h3 className="mb-4 font-semibold text-white">Technologies</h3>
            <ul className="grid grid-cols-2 space-y-2 gap-x-6 text-sm">
              <li>
                <Link href="#">Python</Link>
              </li>
              <li>
                <Link href="#">OpenAI</Link>
              </li>
              <li>
                <Link href="#">Kotlin</Link>
              </li>

              <li>
                <Link href="#">React.js</Link>
              </li>

              <li>
                <Link href="#">Angular</Link>
              </li>
              <li>
                <Link href="#">LangChain</Link>
              </li>
              <li>
                <Link href="#">Django</Link>
              </li>

              <li>
                <Link href="#">React Native</Link>
              </li>

              <li>
                <Link href="#">Solidity</Link>
              </li>
              <li>
                <Link href="#">Node.js</Link>
              </li>
              <li>
                <Link href="#">AWS</Link>
              </li>
              <li>
                <Link href="#">Vue.js</Link>
              </li>
              <li>
                <Link href="#">Node-RED</Link>
              </li>
              <li>
                <Link href="#">HTML + CSS</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
