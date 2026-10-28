import type { NextConfig } from 'next';

function hostnameFromUrl(value: string | undefined): string | null {
  if (!value) return null;

  try {
    return new URL(value).hostname;
  } catch {
    return null;
  }
}

const remoteImageHostnames = Array.from(
  new Set(
    [
      'smmgen-backend.fexpink.com',
      'api.trendevo.com',
      'trendevo-api.fexpink.com',
      hostnameFromUrl(process.env.NEXT_PUBLIC_API_URL),
    ].filter((host): host is string => Boolean(host)),
  ),
);

const nextConfig: NextConfig = {
  images: {
    qualities: [75, 100],
    deviceSizes: [640, 750, 828, 1080, 1200, 1240, 1920, 2048, 3840],
    remotePatterns: remoteImageHostnames.map((hostname) => ({
      protocol: 'https',
      hostname,
      pathname: '/**',
    })),
  },
};

export default nextConfig;
