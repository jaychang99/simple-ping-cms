/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [process.env.CLIENT_BASE_URL],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: process.env.CLIENT_BASE_URL,
        port: '443',
      },
    ],
  },
}

module.exports = nextConfig
