/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    MONGODB_URI: process.env.MONGODB_URI,
  },
  experimental: {
    serverActions: {
      allowedOrigins: ["quotify-app.vercel.app", "localhost:3000"],
    },
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "quotify.b-cdn.net",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
