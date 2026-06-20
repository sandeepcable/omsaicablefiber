import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://omsaicablefiber.vercel.app",
      lastModified: new Date(),
    },
  ];
}