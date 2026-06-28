/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.pdf$/,
      use: 'file-loader',
    });
    return config;
  },
};

export default nextConfig;
  
