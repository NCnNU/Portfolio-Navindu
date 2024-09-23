/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "images.unsplash.com", // Existing domain
      "assets.aceternity.com",
      "i.pinimg.com",
      "d3t3ozftmdmh3i.cloudfront.net",
      "static.vecteezy.com",
      "t4.ftcdn.net",
      "img.freepik.com",
      "th.bing.com",

      // Add this new domain
    ],
  },
};

export default nextConfig;
