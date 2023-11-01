/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['media.graphassets.com', 'https://photos.google.com/'],
  },
}

module.exports = nextConfig
