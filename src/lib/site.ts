export const siteConfig = {
  name: "Shayegan Digital",
  url: "https://www.shayegandigital.ca",
  domain: "www.shayegandigital.ca",
  image: "https://www.shayegandigital.ca/opengraph-image",
  email: "admin@shayegandigital.ca",
  phone: "+17809091213",
  calendlyUrl: "https://calendly.com/admin-shayegandigital/30min",
  availability: "Currently accepting a limited number of new projects",
  address: {
    locality: "Edmonton",
    region: "AB",
    country: "CA",
  },
} as const;

export const faqItems = [
  {
    question: "How fast can a new website launch?",
    answer:
      "Most launch sites take about one week, growth sites take one to two weeks, and larger systems usually take two to three weeks after strategy and content are aligned.",
  },
  {
    question: "Do you use templates or page builders?",
    answer:
      "No. Every project is custom-designed and built with clean code so the site can stay fast, flexible, and easier to scale.",
  },
  {
    question: "What happens after the site goes live?",
    answer:
      "Every project includes launch support, analytics setup, and guidance on next steps. Ongoing growth support is available for updates, monitoring, and optimization.",
  },
] as const;
