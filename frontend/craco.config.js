const path = require('path');

module.exports = {
  webpack: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    },
    configure: (webpackConfig) => {
      webpackConfig.resolve.fallback = {
        ...(webpackConfig.resolve.fallback || {}),
        fs: false,
        path: false,
        os: false,
        stream: false,
        crypto: false,
        buffer: false,
      };
      return webpackConfig;
    }
  }
};
