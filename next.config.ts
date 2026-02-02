import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  // Optimize for mobile
  compress: true,
  poweredByHeader: false,
};

export default nextConfig;
