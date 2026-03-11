/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'peerceptiv.com' },
      { protocol: 'http', hostname: '18.191.212.205' },
    ],
  },
};

export default nextConfig;
