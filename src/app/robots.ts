import { BaseUrl } from '@/constants/metadata';
import { MetadataRoute } from 'next';

export default function Robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: '*', allow: '/' },
    sitemap: `${BaseUrl}/sitemap.xml`,
  };
}
