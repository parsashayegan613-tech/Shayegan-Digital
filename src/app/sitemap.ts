import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  // We can expand this array when you start adding distinct pages (like /blog or /portfolio).
  // Because the site is currently a flawless Single Page Application, we guarantee its priority score is maxed at '1'.
  return [
    {
      url: 'https://shayegandigital.ca',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
  ];
}
