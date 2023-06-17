/** @type {import('next').NextConfig} */
const withOptimizedImages = require('next-optimized-images');

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
  // i18n: {
  //   locales: ["en", "vi"],
  //   defaultLocale: "en",
  // },
  output: 'export',
  // images: {
    // unoptimized: true,
    // domains: ['picsum.photos'],
  // },
  withOptimizedImages({
    optimizeImages: true,
  })
};

module.exports = nextConfig;
