import nextMDX from '@next/mdx'
import rehypePrism from '@mapbox/rehype-prism'

/** @type {import('next').NextConfig} */
const nextConfig = {
    pageExtensions: ['jsx', 'js', 'tsx', 'ts', 'mdx'],
    reactStrictMode: true,
    swcMinify: true,
    experimental: {
        mdxRs: true
    },
    images: {
        domains: ['i.scdn.co','cdn.sanity.io']
    },
    async rewrites() {
        if (process.env.NODE_ENV === 'production') {
            return [
                {
                    source: '/api/:path',
                    destination: 'https://mohamadomran.dev/:path/',
                }
            ]
        } else {
            return []
        }
    },
}

const withMDX = nextMDX({
    extension: /\.mdx?$/,
    options: {
        remarkPlugins: [],
        rehypePlugins: [rehypePrism],
    }
})

export default withMDX(nextConfig)
