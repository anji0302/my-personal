/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    loader: 'akamai',
    path: ''
  },
  basePath: '/my-personal',
  assetPrefix: '/my-personal'
};

module.exports = nextConfig;
