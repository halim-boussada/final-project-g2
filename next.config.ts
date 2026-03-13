import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.dummyjson.com",
        port: "",
        pathname: "/product-images/**",
      },
      {
        protocol: "https",
        hostname: "dummyjson.com",
        port: "",
        pathname: "/icon/**",
      },

      // https://dummyjson.com/icon/michaelw/128
    ],
  },
};

export default nextConfig;
