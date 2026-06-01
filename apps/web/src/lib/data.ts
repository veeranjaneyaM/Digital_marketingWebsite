export const siteConfig = {
  brand: "ELIVATX",
  parentBrand: "INCUXAI",
  url: "https://elivatx.com",
  description:
    "ELIVATX is the premium digital marketing consultancy by INCUXAI, helping ambitious companies grow through modern strategy, elegant brand systems, and measurable digital performance.",
  apiUrl: process.env.NEXT_PUBLIC_API_URL || "http://localhost:8080/api"
};

export const navItems = [
  { title: "Home", href: "/" },
  { title: "About", href: "/about" },
  { title: "Services", href: "/services" },
  { title: "Case Studies", href: "/portfolio" },
  { title: "Blog", href: "/blog" },
  { title: "Contact", href: "/contact" },
  { title: "Consultation", href: "/consultation" }
];

export const heroMetrics = [
  { label: "Qualified leads generated", value: 12400, suffix: "+" },
  { label: "Average ROAS improvement", value: 368, suffix: "%" },
  { label: "Campaign launches executed", value: 94, suffix: "" }
];

export const heroSignals = [
  "Expertise",
  "Agility",
  "Precision",
  "Trust"
];

export const heroHighlights = [
  {
    title: "Growth architecture",
    detail: "Search, paid, brand, and reporting connected into one operating system."
  },
  {
    title: "Creative intelligence",
    detail: "Modern storytelling built to increase trust, recall, and conversion quality."
  },
  {
    title: "Consulting rigor",
    detail: "Senior-level direction for founders, marketing teams, and scale-stage brands."
  }
];

export const trustStats = [
  { value: "48h", label: "strategic response rhythm" },
  { value: "6", label: "core growth disciplines" },
  { value: "90m", label: "consultation deep-dive session" }
];

export const sectors = [
  "Healthcare",
  "NGOs",
  "Consumer brands",
  "SaaS",
  "Education",
  "Founders and creators"
];

export const clientSignals = [
  "Search growth systems",
  "Performance media",
  "Editorial strategy",
  "Brand positioning",
  "Analytics dashboards",
  "Conversion consulting"
];

export const services = [
  {
    title: "SEO & Website Visibility",
    description:
      "Technical SEO, content strategy, authority building, and search experience improvements designed to turn discoverability into durable demand.",
    accent: "from-electric/25 via-[#142c5a] to-transparent",
    deliverables: ["Technical audits", "Intent-driven content maps", "Search performance dashboards"]
  },
  {
    title: "Social Media Marketing",
    description:
      "Editorial systems, campaign storytelling, and platform-native execution that make brands feel relevant, disciplined, and memorable.",
    accent: "from-violet/20 via-[#171d42] to-transparent",
    deliverables: ["Content pillars", "Campaign calendars", "Creative direction systems"]
  },
  {
    title: "Performance Marketing",
    description:
      "Paid acquisition programs with sharper audience strategy, cleaner testing loops, and clearer attribution across the funnel.",
    accent: "from-cyan/18 via-[#122c33] to-transparent",
    deliverables: ["Media buying", "Funnel experimentation", "ROAS and CAC reporting"]
  },
  {
    title: "Branding & Identity",
    description:
      "Positioning, messaging, visual cohesion, and launch narratives for companies that need a more premium market perception.",
    accent: "from-white/10 via-[#1a1f34] to-transparent",
    deliverables: ["Positioning strategy", "Messaging systems", "Visual brand alignment"]
  },
  {
    title: "NGO Promotion",
    description:
      "Cause-led growth campaigns that help missions travel further with stronger donor confidence, advocacy, and community action.",
    accent: "from-[#2d3f7d] via-[#11182d] to-transparent",
    deliverables: ["Awareness campaigns", "Donor journey design", "Impact storytelling"]
  },
  {
    title: "Website Growth Consulting",
    description:
      "High-signal consulting for conversion flow, user trust, analytics clarity, and growth prioritization across digital touchpoints.",
    accent: "from-[#294b8b] via-[#10182b] to-transparent",
    deliverables: ["UX growth audits", "Conversion roadmaps", "Experiment planning"]
  }
];

export const caseStudies = [
  {
    slug: "aurora-health",
    client: "Aurora Health",
    category: "Performance + SEO",
    challenge: "Plateaued acquisition, inconsistent attribution, and an under-trusted web experience.",
    outcome:
      "A rebuilt paid-search and conversion system created a more premium buyer journey and restored measurable growth confidence.",
    metrics: ["+241% organic sessions", "+188% demo bookings", "-32% CAC"],
    before: "Fragmented traffic and weak conversion continuity.",
    after: "Unified search capture, stronger landing logic, and cleaner reporting."
  },
  {
    slug: "nova-ngo",
    client: "Nova Earth Foundation",
    category: "NGO Promotion",
    challenge: "A strong mission with low campaign resonance and inconsistent supporter retention.",
    outcome:
      "Narrative-led campaign architecture turned awareness into repeat engagement and stronger donor loyalty.",
    metrics: ["4.8x campaign reach", "+172% recurring donors", "+63% volunteer signups"],
    before: "High intent, low momentum across digital channels.",
    after: "More emotionally clear storytelling with measurable supporter action."
  },
  {
    slug: "quantum-commerce",
    client: "Quantum Commerce",
    category: "Branding + Growth",
    challenge: "Traffic quality looked healthy, but the brand experience felt transactional rather than premium.",
    outcome:
      "A full-funnel repositioning aligned the storefront, email journey, and creative system around trust and higher-value conversion.",
    metrics: ["+91% AOV", "+126% returning users", "+214% revenue from email"],
    before: "Attention without enough trust or differentiation.",
    after: "Sharper market perception and materially stronger customer value."
  }
];

export const testimonials = [
  {
    name: "Ananya Rao",
    role: "CMO, Aurora Health",
    quote:
      "ELIVATX made our marketing feel structured, premium, and easier to trust internally. The reporting alone changed how we make decisions."
  },
  {
    name: "Vikram Shah",
    role: "Founder, Quantum Commerce",
    quote:
      "They did not just improve performance. They improved how the business presents itself to the market, which lifted conversion quality across the board."
  },
  {
    name: "Mira Das",
    role: "Program Director, Nova Earth Foundation",
    quote:
      "Their team translated our mission into a digital campaign system that felt human, measured, and genuinely persuasive."
  }
];

export const blogPosts = [
  {
    slug: "cinematic-growth-systems",
    title: "Why Cinematic Growth Systems Outperform Static Funnels",
    excerpt:
      "The strongest digital experiences move people through trust, context, and timing rather than isolated conversion tricks.",
    date: "May 20, 2026"
  },
  {
    slug: "ai-brand-positioning",
    title: "AI-Enhanced Brand Positioning Without Losing Human Signal",
    excerpt:
      "Modern AI should sharpen brand clarity and decision speed, not flatten the emotional value of a company.",
    date: "May 14, 2026"
  },
  {
    slug: "ngo-digital-campaigns",
    title: "Digital Campaign Architecture for NGOs That Need Action, Not Just Reach",
    excerpt:
      "Mission-led organizations need a growth system that respects emotion, proof, and donor confidence in equal measure.",
    date: "May 8, 2026"
  }
];

export const aboutSpecs = [
  { label: "Positioning", value: "Sharper offers, stronger premium perception, and clearer category distinction." },
  { label: "Execution", value: "SEO, paid media, social systems, and conversion strategy managed as one ecosystem." },
  { label: "Reporting", value: "Decision-grade dashboards that show movement, leverage, and next priorities clearly." }
];

export const serviceSpecs = [
  { label: "SEO", value: "Technical fixes, content authority, and commercial-intent search capture." },
  { label: "Performance", value: "Paid media systems with testing cadence, attribution discipline, and CRO loops." },
  { label: "Branding", value: "Positioning, messaging, and perception design for premium market presence." },
  { label: "Consulting", value: "Executive guidance for websites, funnels, launches, and growth decision-making." }
];

export const portfolioSpecs = [
  { label: "Audit", value: "Traffic quality, acquisition efficiency, and conversion friction mapped precisely." },
  { label: "Rebuild", value: "Creative direction, funnel logic, and dashboard instrumentation redesigned." },
  { label: "Lift", value: "Stronger trust, cleaner signal quality, and measurable revenue momentum." }
];

export const contactSpecs = [
  { label: "Response Window", value: "Initial reply within 24 business hours." },
  { label: "Best For", value: "Growth strategy, performance marketing, SEO, and premium brand repositioning." },
  { label: "Engagement Model", value: "Consulting, monthly retainers, and focused launch or audit sprints." }
];

export const consultationSpecs = [
  { label: "Session Format", value: "90-minute strategic consultation with a senior ELIVATX lead." },
  { label: "What You Bring", value: "Goals, channel mix, timelines, blockers, and current performance context." },
  { label: "What You Get", value: "A focused action map for growth, messaging, and conversion priorities." }
];
