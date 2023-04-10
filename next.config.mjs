/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['jsx', 'js', 'tsx', 'ts', 'mdx'],
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['i.scdn.co', 'cdn.sanity.io'],
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  eslint: {
    ignoreDuringBuilds: false,
  },
};

export default nextConfig;
