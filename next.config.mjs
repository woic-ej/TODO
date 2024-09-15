/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
  async rewrites() {
    console.log("NEXT_PROXY_URL:", process.env.NEXT_PROXY_URL); // 환경 변수 확인
    return [
      {
        source: "/api/:path*",
        destination: `${process.env.NEXT_PROXY_URL}/:path*`,
      },
    ];
  },
};

export default nextConfig;
