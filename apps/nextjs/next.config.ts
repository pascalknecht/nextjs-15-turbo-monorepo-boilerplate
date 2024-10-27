import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
    serverExternalPackages: ["@repo/db"],
};

export default nextConfig;
