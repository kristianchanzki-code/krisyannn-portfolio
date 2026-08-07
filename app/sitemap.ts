import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
  return ["", "/about", "/resume", "/contact", "/projects/pams", "/projects/sinkpeso"].map((path) => ({ url: `${baseUrl}${path}`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: path === "" ? 1 : 0.8 }));
}
