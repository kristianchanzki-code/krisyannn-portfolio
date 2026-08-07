export type Project = {
  slug: "pams" | "sinkpeso";
  name: string;
  eyebrow: string;
  tagline: string;
  description: string;
  role: string;
  status: string;
  accents: string[];
  highlights: string[];
  lessons: string[];
};

export const projects: Project[] = [
  {
    slug: "pams",
    name: "BLACKMING PAMS",
    eyebrow: "Operations system · Internal tool",
    tagline: "Every asset has a story. PAMS keeps it.",
    description:
      "A centralized system for tracking POS devices, portable printers, SIM cards, booth assignments, replacements, returns, repairs, and asset history.",
    role: "Product owner, operations domain expert, and AI-assisted builder",
    status: "Developed for internal adoption",
    accents: ["Operations", "Asset lifecycle", "Workflow design"],
    highlights: [
      "Mapped real asset-management workflows from registration through retirement.",
      "Defined business rules for assignments, replacements, returns, repairs, and accountability.",
      "Built and deployed a full-stack application using modern web infrastructure.",
      "Tested features against real operational scenarios and edge cases.",
    ],
    lessons: [
      "A useful internal tool must match the real workflow, not an idealized one.",
      "Clear status history reduces repeated follow-ups and missing context.",
      "AI can accelerate development, but operational judgment still shapes the product.",
    ],
  },
  {
    slug: "sinkpeso",
    name: "SINKPESO",
    eyebrow: "Personal finance · Offline web app",
    tagline: "Private. Offline. Yours.",
    description:
      "A peso-focused personal finance tool designed around everyday income, bills, expenses, savings, wallets, and recurring entries.",
    role: "Product designer and AI-assisted builder",
    status: "Personal product project",
    accents: ["Personal finance", "Privacy", "Philippine context"],
    highlights: [
      "Designed around Philippine pesos, familiar wallets, and practical monthly routines.",
      "Keeps financial data in local browser storage instead of requiring an online account.",
      "Combines income, bills, expenses, savings vaults, and recurring entries in one view.",
      "Explores how a personal problem can become a focused digital product.",
    ],
    lessons: [
      "Privacy can be a product feature, not only a technical detail.",
      "Local context makes a generic finance workflow feel more usable.",
      "Simple tools become valuable when they match an actual daily habit.",
    ],
  },
];

export function getProject(slug: Project["slug"]) {
  return projects.find((project) => project.slug === slug);
}
