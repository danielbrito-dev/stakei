import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ["@stakei/db", "@stakei/shared", "@stakei/ui"],
};

export default nextConfig;
