/** @type {import('next').NextConfig} */

const withLess = require('next-with-less')

const nextConfig = withLess({
  // reactStrictMode: true,
  transpilePackages: ['@arco-design/web-react'],

  lessLoaderOptions: {
    lessOptions: {
      modifyVars: {
        // "arcoblue-6": "#f85959",
      },
    },
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
})

module.exports = nextConfig
