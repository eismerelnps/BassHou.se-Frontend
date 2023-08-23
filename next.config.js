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
const typescript= {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  }


module.exports = {
  //nextConfig,
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
