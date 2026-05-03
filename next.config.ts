import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*.vercel.app',
        pathname: '/**',
      },
    ],
    unoptimized: true,
  },
  experimental: {
    globalNotFound: true,
  },
};

export default nextConfig;
