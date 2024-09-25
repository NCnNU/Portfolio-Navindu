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
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
