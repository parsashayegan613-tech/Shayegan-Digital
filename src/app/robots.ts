import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/api/', // Keep Google web crawlers out of our backend API
    },
    sitemap: 'https://shayegandigital.ca/sitemap.xml',
  };
}
