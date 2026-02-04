/** @type {import('next').NextConfig} */
const nextConfig = {
  // Optimize package imports to reduce bundle size
  // These packages have barrel files that can slow down builds and increase bundle size
  // See: https://vercel.com/blog/how-we-optimized-package-imports-in-next-js
  experimental: {
    optimizePackageImports: [
      'react-hot-toast',
      'react-hook-form',
      '@hookform/resolvers',
      'zod',
    ],
  },
};

export default nextConfig;
