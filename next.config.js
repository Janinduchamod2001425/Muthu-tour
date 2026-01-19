/** @type {import('next').NextConfig} */
const nextConfig = {
  allowedDevOrigins: ["*.preview.same-app.com"],
  images: {
    unoptimized: true,
    domains: [
      "source.unsplash.com",
      "images.unsplash.com",
      "ext.same-assets.com",
      "ugc.same-assets.com",
      "loveoahu.org",
      "media.tacdn.com",
      "cdn.sanity.io",
      "www.dolphindiscoveries.com",
      "d1jyxxz9imt9yb.cloudfront.net",
      "www.newenglandinnsandresorts.com",
    ],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "source.unsplash.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "ext.same-assets.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "ugc.same-assets.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "loveoahu.org",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "media.tacdn.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.dolphindiscoveries.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "d1jyxxz9imt9yb.cloudfront.net",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.newenglandinnsandresorts.com",
        pathname: "/**",
      },
    ],
  },
  // Additional settings to disable dev overlays
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
};

module.exports = nextConfig;