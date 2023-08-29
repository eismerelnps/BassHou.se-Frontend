/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    typedRoutes: true,
  },
};

const images = {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "djmag.com",
        port: "",
        pathname: "/sites/**",
      },
    ],
  }


module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "djmag.com",
        port: "",
        pathname: "/**",
      },
    ],
  }
  
};
