import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/about-us',
        destination: '/',
        permanent: true,
      },
      {
        source: 'sign-up-here',
        destination: '/contact',
        permanent: true,
      },
      {
        source: '/industry',
        destination: '/news',
        permanent: true,
      },
      {
        source: '/home',
        destination: '/',
        permanent: true,
      },
      {
        source: '/voythosnews',
        destination: '/news',
        permanent: true,
      }
    ]
  }
};

export default nextConfig;
