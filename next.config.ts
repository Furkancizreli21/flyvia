/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "flyvia.s3.eu-north-1.amazonaws.com",
      },
      {
        protocol: "https",
        hostname: "bucket.s3.eu-central-1.amazonaws.com",
      },
    ],
  },
};

module.exports = nextConfig;
