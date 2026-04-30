export const caseStudies = [
  {
    slug: "village-ida-pharmacy",
    title: "Village IDA Pharmacy",
    eyebrow: "Healthcare Case Study",
    category: "Healthcare",
    industry: "Independent pharmacy",
    location: "Edmonton, AB",
    liveUrl: "https://www.villageidapharmacy.com/",
    image: "/portfolio-village-ida.jpg",
    imageAlt: "Village IDA Pharmacy homepage screenshot",
    metaTitle: "Village IDA Pharmacy Case Study | Shayegan Digital",
    metaDescription:
      "A local Edmonton pharmacy website case study covering prescription refill pathways, appointment booking, patient trust, and local SEO foundations.",
    summary:
      "A conversion-focused pharmacy website built to help local patients refill prescriptions, book appointments, and understand services without friction.",
    problem:
      "The pharmacy needed a stronger digital front door: clear service navigation, easier patient actions, and a more credible online presence for local search.",
    solution:
      "We structured the site around patient intent, made the refill and appointment pathways prominent, and gave the brand a polished local healthcare experience that works cleanly on mobile.",
    outcome:
      "The finished site gives patients faster routes to the actions they care about while giving the business a stronger local SEO and trust foundation.",
    scope: "Pharmacy platform",
    services: ["UX strategy", "Custom web design", "Conversion copy", "Local SEO foundation"],
    deliverables: [
      "Prescription refill pathway",
      "Appointment booking CTA system",
      "Service and resource structure",
      "Mobile-first pharmacy experience",
    ],
    highlights: [
      {
        label: "Primary goal",
        value: "Reduce patient friction",
        detail: "Key actions were pulled forward so visitors can move from intent to action quickly.",
      },
      {
        label: "UX focus",
        value: "Trust and clarity",
        detail: "The page structure makes the pharmacy feel local, credible, and easier to contact.",
      },
      {
        label: "SEO role",
        value: "Local foundation",
        detail: "Content and structure support Edmonton pharmacy searches without overloading the page.",
      },
    ],
  },
  {
    slug: "invitvo",
    title: "Invitvo",
    eyebrow: "Pharmaceutical Case Study",
    category: "Pharmaceutical",
    industry: "Research compounds",
    location: "Canada",
    liveUrl: "https://www.invitvo.com/",
    image: "/portfolio-invitvo.jpg",
    imageAlt: "Invitvo Pharmaceuticals homepage screenshot",
    metaTitle: "Invitvo Case Study | Shayegan Digital",
    metaDescription:
      "A pharmaceutical website case study for Invitvo covering research compound catalog structure, quote-request pathways, and technical buyer trust.",
    summary:
      "A research-focused pharmaceutical website designed to present technical compound information clearly and move qualified visitors toward quote requests.",
    problem:
      "Invitvo needed a more credible web presence for technical buyers who evaluate compounds, documentation, and supplier legitimacy before reaching out.",
    solution:
      "We shaped the experience around product discovery, quote intent, and scientific credibility, keeping the interface clean enough for research-driven visitors.",
    outcome:
      "The finished site positions Invitvo as a more credible research supplier and gives visitors a clearer path from product interest to quote request.",
    scope: "Research commerce",
    services: ["Information architecture", "Custom web design", "Quote-flow UX", "Technical content structure"],
    deliverables: [
      "Research compound catalog",
      "Quote request pathway",
      "Technical buyer messaging",
      "Mobile-responsive company site",
    ],
    highlights: [
      {
        label: "Primary goal",
        value: "Support quote intent",
        detail: "Visitors can understand the offer and move toward a request without unnecessary steps.",
      },
      {
        label: "UX focus",
        value: "Scientific credibility",
        detail: "The visual system uses a cleaner, more technical presentation for research buyers.",
      },
      {
        label: "Business role",
        value: "Better buyer confidence",
        detail: "The site gives the company a more legitimate digital presence for inbound evaluation.",
      },
    ],
  },
] as const;

export type CaseStudy = (typeof caseStudies)[number];

export function getCaseStudy(slug: string) {
  return caseStudies.find((study) => study.slug === slug);
}
