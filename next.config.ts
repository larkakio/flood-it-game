import type { NextConfig } from "next";
import path from "node:path";

const wagmiConnectorsEsm = path.join(
  process.cwd(),
  "node_modules/@wagmi/connectors/dist/esm"
);

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  compress: true,
  poweredByHeader: false,
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      // Avoid `wagmi/connectors` barrel (porto, MetaMask, …) breaking Next/webpack.
      "@flood-wagmi/baseAccount": path.join(wagmiConnectorsEsm, "baseAccount.js"),
      "@flood-wagmi/walletConnect": path.join(wagmiConnectorsEsm, "walletConnect.js"),
    };
    config.resolve.fallback = {
      ...config.resolve.fallback,
      encoding: false,
    };
    return config;
  },
};

export default nextConfig;
