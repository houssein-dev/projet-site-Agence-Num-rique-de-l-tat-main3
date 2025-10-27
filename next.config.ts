// next.config.js
const nextConfig = {
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true }, // ⚠️ temporaire seulement
};
module.exports = nextConfig;