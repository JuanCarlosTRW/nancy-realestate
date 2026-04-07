import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://nancy-realestate.vercel.app";
  return ["", "/buy", "/sell", "/listings", "/about", "/contact"].map((p) => ({
    url: `${base}${p}`,
    lastModified: new Date(),
  }));
}
