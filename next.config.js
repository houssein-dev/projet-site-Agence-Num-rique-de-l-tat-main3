/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // يحول Next.js إلى static site
  images: {
    unoptimized: true, // ضروري للـ <Image /> 
  },   
  basePath: "/projet-site-Agence-Num-rique-de-l-tat",  // مهم إذا تستخدم GitHub Pages
  assetPrefix: "/projet-site-Agence-Num-rique-de-l-tat",
};

module.exports = nextConfig;