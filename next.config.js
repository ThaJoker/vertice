/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Force consistent path handling
  experimental: {
    serverComponentsExternalPackages: [],
  },
  webpack: (config) => {
    if (process.env.NODE_ENV === 'production') {
      config.resolve.plugins = config.resolve.plugins || [];
      // Enforce exact path matching — this is the key fix!
      config.resolve.symlinks = false;
    }
    return config;
  }
};

module.exports = nextConfig;