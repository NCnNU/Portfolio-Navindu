/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "images.unsplash.com",  // Existing domain
      "assets.aceternity.com" 
      // Add this new domain
    ],
  },
};

export default nextConfig;
