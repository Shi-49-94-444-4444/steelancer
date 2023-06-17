/** @type {import('next').NextConfig} */
const nextConfig = {
  // async redirects() {
  //   return [
  //     {
  //       source: "/detail_freelancer/:id",
  //       destination: "/detail_freelancer/[id]",
  //       permanent: true,
  //     },
  //   ];
  // },
  output: 'export',
  experimental: {
    appDir: true,
  },
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
