/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      // Add any remote image domains you might use
      // {
      //   protocol: 'https',
      //   hostname: 'example.com',
      // },
    ],
  },
  experimental: {
    // Enable useful experimental features
    optimizeCss: true,
    scrollRestoration: true,
  },
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "sharp$": false,
      "onnxruntime-node$": false,
    };
    return config;
  },
};

export default nextConfig;