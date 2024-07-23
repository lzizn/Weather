/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEXT_PUBLIC_OPENWEATHER_KEY: process.env.NEXT_PUBLIC_OPENWEATHER_KEY,
    NEXT_PUBLIC_GEOCODING_KEY: process.env.NEXT_PUBLIC_GEOCODING_KEY,
  },
};

export default nextConfig;

