import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-800 text-gray-200 px-10 py-20">
      <div>
        <div className="mb-10">
          <Link href="/" className="uppercase font-lexend font-semibold text-white text-2xl">
            wissenschaft inc.
          </Link>
          <div className="border-b border-b-blue-50" />
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-4 max-md:grid-cols-1 gap-10">
          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="#">Web Development</Link></li>
              <li><Link href="#">Mobile</Link></li>
              <li><Link href="#">Web Design, Product Design, UX, Illustration</Link></li>
              <li><Link href="#">Fintech</Link></li>
              <li><Link href="#">Machine Learning &amp; AI</Link></li>
              <li><Link href="#">Blockchain</Link></li>
              <li><Link href="#">Testing</Link></li>
              <li><Link href="#">DevOps</Link></li>
              <li><Link href="#">MLOps</Link></li>
            </ul>
          </div>

          {/* Case Studies */}
          <div>
            <h3 className="text-white font-semibold mb-4">Case Studies</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="#">The Forbes Dashboard</Link></li>
              <li><Link href="#">Altruisto</Link></li>
              <li><Link href="#">Smogdog</Link></li>
              <li><Link href="#">Arroe</Link></li>
              <li><Link href="#">Swile</Link></li>
              <li><Link href="#">Moon Mortgage</Link></li>
              <li><Link href="#">Aleph Zero</Link></li>
              <li><Link href="#">Datacapt</Link></li>
              <li><Link href="#">Qenta</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="#">How We Work</Link></li>
              <li><Link href="#">Banking Of The Future</Link></li>
              <li><Link href="#">Resources</Link></li>
              <li><Link href="#">Blog</Link></li>
              <li><Link href="#">Careers</Link></li>
              <li><Link href="#">Contact Us</Link></li>
              <li><Link href="#">PARP</Link></li>
            </ul>
          </div>

          {/* Technologies */}
          <div>
            <h3 className="text-white font-semibold mb-4">Technologies</h3>
            <ul className="grid grid-cols-2 gap-x-6 text-sm space-y-2">
              <li><Link href="#">Python</Link></li>
              <li><Link href="#">OpenAI</Link></li>
              <li><Link href="#">Kotlin</Link></li>
              <li><Link href="#">AIConsole</Link></li>
              <li><Link href="#">Swift</Link></li>
              <li><Link href="#">ElevenLabs</Link></li>
              <li><Link href="#">React.js</Link></li>
              <li><Link href="#">SeaChat</Link></li>
              <li><Link href="#">Angular</Link></li>
              <li><Link href="#">LangChain</Link></li>
              <li><Link href="#">Django</Link></li>
              <li><Link href="#">Synthesia</Link></li>
              <li><Link href="#">React Native</Link></li>
              <li><Link href="#">HeyGen</Link></li>
              <li><Link href="#">Flutter</Link></li>
              <li><Link href="#">Solidity</Link></li>
              <li><Link href="#">Node.js</Link></li>
              <li><Link href="#">AWS</Link></li>
              <li><Link href="#">Vue.js</Link></li>
              <li><Link href="#">Node-RED</Link></li>
              <li><Link href="#">HTML + CSS</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
