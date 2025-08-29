import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'my-web-portfolio-swart-seven.vercel.app',
      },
    ],
  },
};

export default nextConfig;
