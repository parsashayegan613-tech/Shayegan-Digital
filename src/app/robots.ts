import { MetadataRoute } from 'next';
import { siteConfig } from '@/lib/site';

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/api/', // Keep Google web crawlers out of our backend API
    },
    sitemap: `${siteConfig.url}/sitemap.xml`,
  };
}
