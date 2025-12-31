import type { Metadata } from "next";

export const metadataMap: Record<string, Metadata> = {
  // ---- Services  (app/(public)/services/*)
  "/services/ai-ml": {
    title: "AI & Machine Learning Services | Wissenschaft Inc",
    description:
      "Custom AI and machine learning solutions including model development, training, and deployment.",
    openGraph: {
      title: "AI & Machine Learning Services | Wissenschaft Inc",
      description:
        "Custom AI and machine learning solutions including model development, training, and deployment.",
      url: "https://wissenschaft-inc.com/services/ai-ml",
      images: [{ url: "/images/logo.png", width: 1200, height: 630 }],
    },
    alternates: { canonical: "https://wissenschaft-inc.com/services/ai-ml" },
  },
  "/services/web-dev": {
    title: "Web Development Services | Wissenschaft Inc",
    description:
      "Custom web development services focused on performance, scalability, and modern architectures.",
    openGraph: {
      title: "Web Development Services | Wissenschaft Inc",
      description:
        "Custom web development services focused on performance, scalability, and modern architectures.",
      url: "https://wissenschaft-inc.com/services/web-dev",
      images: [{ url: "/images/logo.png", width: 1200, height: 630 }],
    },
    alternates: { canonical: "https://wissenschaft-inc.com/services/web-dev" },
  },

  "/services/mobile-app": {
    title: "Mobile App Development Services | Wissenschaft Inc",
    description:
      "End-to-end mobile app development for iOS and Android with scalable backend infrastructure.",
    openGraph: {
      title: "Mobile App Development Services | Wissenschaft Inc",
      description:
        "End-to-end mobile app development for iOS and Android with scalable backend infrastructure.",
      url: "https://wissenschaft-inc.com/services/mobile-app",
      images: [{ url: "/images/logo.png", width: 1200, height: 630 }],
    },
    alternates: { canonical: "https://wissenschaft-inc.com/services/mobile-app" },
  },

  "/services/product-dev": {
    title: "Product Development & Engineering | Wissenschaft Inc",
    description:
      "Full-cycle product development including UX, engineering, architecture, and testing.",
    openGraph: {
      title: "Product Development & Engineering | Wissenschaft Inc",
      description:
        "Full-cycle product development including UX, engineering, architecture, and testing.",
      url: "https://wissenschaft-inc.com/services/product-dev",
      images: [{ url: "/images/logo.png", width: 1200, height: 630 }],
    },
    alternates: { canonical: "https://wissenschaft-inc.com/services/product-dev" },
  },

  "/services/generative-ai": {
    title: "Generative AI Solutions & Consulting | Wissenschaft Inc",
    description: "Generative AI strategy, model development, and system integration.",
    openGraph: {
      title: "Generative AI Solutions & Consulting | Wissenschaft Inc",
      description: "Generative AI strategy, model development, and system integration.",
      url: "https://wissenschaft-inc.com/services/generative-ai",
      images: [{ url: "/images/logo.png", width: 1200, height: 630 }],
    },
    alternates: { canonical: "https://wissenschaft-inc.com/services/generative-ai" },
  },

  // ---- Technologies  (app/(public)/technologies/*)
  "/technologies/ai-ml": {
    title: "AI & Machine Learning Engineering | Wissenschaft Inc",
    description: "ML model development, MLOps, and AI system integration.",
    openGraph: {
      title: "AI & Machine Learning Engineering | Wissenschaft Inc",
      description: "ML model development, MLOps, and AI system integration.",
      url: "https://wissenschaft-inc.com/technologies/ai-ml",
      images: [{ url: "/images/logo.png", width: 1200, height: 630 }],
    },
    alternates: { canonical: "https://wissenschaft-inc.com/technologies/ai-ml" },
  },

  "/technologies/gcp": {
    title: "Google Cloud (GCP) Engineering | Wissenschaft Inc",
    description: "GCP architecture, DevOps, and cloud infrastructure engineering.",
    openGraph: {
      title: "Google Cloud (GCP) Engineering | Wissenschaft Inc",
      description: "GCP architecture, DevOps, and cloud infrastructure engineering.",
      url: "https://wissenschaft-inc.com/technologies/gcp",
      images: [{ url: "/images/logo.png", width: 1200, height: 630 }],
    },
    alternates: { canonical: "https://wissenschaft-inc.com/technologies/gcp" },
  },

  "/technologies/aws": {
    title: "AWS Cloud Solutions & Infrastructure | Wissenschaft Inc",
    description: "AWS cloud migration, architecture, and backend engineering.",
    openGraph: {
      title: "AWS Cloud Solutions & Infrastructure | Wissenschaft Inc",
      description: "AWS cloud migration, architecture, and backend engineering.",
      url: "https://wissenschaft-inc.com/technologies/aws",
      images: [{ url: "/images/logo.png", width: 1200, height: 630 }],
    },
    alternates: { canonical: "https://wissenschaft-inc.com/technologies/aws" },
  },

  "/technologies/python": {
    title: "Python Engineering & Automation | Wissenschaft Inc",
    description: "Python development for automation, data engineering, and AI.",
    openGraph: {
      title: "Python Engineering & Automation | Wissenschaft Inc",
      description: "Python development for automation, data engineering, and AI.",
      url: "https://wissenschaft-inc.com/technologies/python",
      images: [{ url: "/images/logo.png", width: 1200, height: 630 }],
    },
    alternates: { canonical: "https://wissenschaft-inc.com/technologies/python" },
  },

  "/technologies/typescript": {
    title: "TypeScript Engineering & Scalable Systems | Wissenschaft Inc",
    description: "Reliable backend and frontend engineering using TypeScript.",
    openGraph: {
      title: "TypeScript Engineering & Scalable Systems | Wissenschaft Inc",
      description: "Reliable backend and frontend engineering using TypeScript.",
      url: "https://wissenschaft-inc.com/technologies/typescript",
      images: [{ url: "/images/logo.png", width: 1200, height: 630 }],
    },
    alternates: { canonical: "https://wissenschaft-inc.com/technologies/typescript" },
  },

  "/technologies/rust": {
    title: "Rust Systems Development | Wissenschaft Inc",
    description: "High-performance, memory-safe system development.",
    openGraph: {
      title: "Rust Systems Development | Wissenschaft Inc",
      description: "High-performance, memory-safe system development.",
      url: "https://wissenschaft-inc.com/technologies/rust",
      images: [{ url: "/images/logo.png", width: 1200, height: 630 }],
    },
    alternates: { canonical: "https://wissenschaft-inc.com/technologies/rust" },
  },

  // ---- Case Studies  (app/(public)/case-studies/*)
  "/case-studies/skax": {
    title: "Case Study: SK AX | Wissenschaft Inc",
    description: "Engineering scalable, high-performance systems for SK AX.",
    openGraph: {
      title: "Case Study: SK AX | Wissenschaft Inc",
      description: "Engineering scalable, high-performance systems for SK AX.",
      url: "https://wissenschaft-inc.com/case-studies/skax",
      images: [{ url: "/images/logo.png", width: 1200, height: 630 }],
    },
    alternates: { canonical: "https://wissenschaft-inc.com/case-studies/skax" },
  },

  "/case-studies/sk-gigax": {
    title: "Case Study: SK GigaX | Wissenschaft Inc",
    description: "Delivering automation and resilient cloud infrastructure.",
    openGraph: {
      title: "Case Study: SK GigaX | Wissenschaft Inc",
      description: "Delivering automation and resilient cloud infrastructure.",
      url: "https://wissenschaft-inc.com/case-studies/sk-gigax",
      images: [{ url: "/images/logo.png", width: 1200, height: 630 }],
    },
    alternates: { canonical: "https://wissenschaft-inc.com/case-studies/sk-gigax" },
  },

  // ---- Approach (app/(public)/approach/*)
  "/approach": {
    title: "How We Work | Wissenschaft Inc",
    description: "Our engineering philosophy, workflow, and delivery process.",
    openGraph: {
      title: "How We Work | Wissenschaft Inc",
      description: "Our engineering philosophy, workflow, and delivery process.",
      url: "https://wissenschaft-inc.com/approach",
      images: [{ url: "/images/logo.png", width: 1200, height: 630 }],
    },
    alternates: { canonical: "https://wissenschaft-inc.com/approach" },
  },

  "/approach/agile": {
    title: "Our Agile Development Approach | Wissenschaft Inc",
    description: "How we apply agile principles to deliver fast, high-quality software.",
    openGraph: {
      title: "Our Agile Development Approach | Wissenschaft Inc",
      description: "How we apply agile principles to deliver fast, high-quality software.",
      url: "https://wissenschaft-inc.com/approach/agile",
      images: [{ url: "/images/logo.png", width: 1200, height: 630 }],
    },
    alternates: { canonical: "https://wissenschaft-inc.com/approach/agile" },
  },

  "/approach/discovery": {
    title: "Product Discovery & Technical Research | Wissenschaft Inc",
    description: "Our discovery methodology for risk reduction and better product decisions.",
    openGraph: {
      title: "Product Discovery & Technical Research | Wissenschaft Inc",
      description: "Our discovery methodology for risk reduction and better product decisions.",
      url: "https://wissenschaft-inc.com/approach/discovery",
      images: [{ url: "/images/logo.png", width: 1200, height: 630 }],
    },
    alternates: { canonical: "https://wissenschaft-inc.com/approach/discovery" },
  },

  // ---- Careers (app/(public)/careers/page.tsx)
  "/careers": {
    title: "Careers at Wissenschaft Inc | Join Our Team",
    description: "Explore open positions and career opportunities at Wissenschaft Inc.",
    openGraph: {
      title: "Careers at Wissenschaft Inc | Join Our Team",
      description: "Explore open positions and career opportunities at Wissenschaft Inc.",
      url: "https://wissenschaft-inc.com/careers",
      images: [{ url: "/images/logo.png", width: 1200, height: 630 }],
    },
    alternates: { canonical: "https://wissenschaft-inc.com/careers" },
  },

  // ---- Contact (app/(public)/contact/page.tsx)
  "/contact": {
    title: "Contact Wissenschaft Inc | Get in Touch",
    description: "Contact our team for projects, partnerships, or inquiries.",
    openGraph: {
      title: "Contact Wissenschaft Inc | Get in Touch",
      description: "Contact our team for projects, partnerships, or inquiries.",
      url: "https://wissenschaft-inc.com/contact",
      images: [{ url: "/images/logo.png", width: 1200, height: 630 }],
    },
    alternates: { canonical: "https://wissenschaft-inc.com/contact" },
  },
};
