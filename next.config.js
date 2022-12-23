/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    // remotePatterns: [
    //   {
    //     protocol: 'http',
    //     hostname: 'localhost',
    //     port: '3002',
    //     pathname: '/public/images/**',
    //   },
    // ],
    domains: ['localhost:3002'],
  },
}

module.exports = nextConfig
