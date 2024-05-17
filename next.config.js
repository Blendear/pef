/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async redirects() {
    return [
      {
        source: "/",
        destination: "/todo-landing-page-to-rename",
        permanent: true,
      },
    ];
  },

  images: {
    domains: ["https://todo-template-app-name.app/", "https://localhost:3000"],
    //   website of this project, so that images are loaded on the live website too
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

module.exports = nextConfig;
