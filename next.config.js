/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/Login",
        destination: "/src/Login",
      },
    ];
  },
};

module.exports = nextConfig;
