const path = require('path');

module.exports = function override(config) {
  const loaders = config.resolve;

  loaders.fallback = {
    fs: false,
    tls: false,
    net: false,
    http: false,
    https: false,
    zlib: false,
    path: false,
    stream: false,
    util: false,
    url: false,
    crypto: false,
  };

  loaders.alias = {
    '@src': path.resolve(__dirname, 'src'),
  };

  return config;
};
