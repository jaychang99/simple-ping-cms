/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [process.env.CLIENT_BASE_URL]
  },
}

module.exports = nextConfig
