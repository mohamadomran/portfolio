/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['jsx', 'js', 'tsx', 'ts', 'mdx'],
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['i.scdn.co', 'cdn.sanity.io'],
  },
  async rewrites() {
    if (process.env.NODE_ENV === 'production') {
      return [
        {
          source: '/api/:path',
          destination: 'https://mohamadomran.dev/:path/',
        },
      ];
    } else {
      return [];
    }
  },
};

export default nextConfig;
