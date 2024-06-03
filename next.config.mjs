import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const nextConfig = {
  output: 'export',
  assetPrefix: '/SNP-layout-react/',
  basePath: '/SNP-layout-react',

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.holnyx.github.io',
        port: '',
      },
    ],
  },

  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },

  webpack(config) {
    // SVGR configuration
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
};

export default nextConfig;

