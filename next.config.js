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
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        port: "",
        pathname: "/de3tluzbk/**",
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
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        port: "",
        pathname: "/**", 
      }
    ],
  }
  
};
