const curry = require('lodash/fp/curry');

module.exports = curry(
  (options, config) => ({
    ...config,
    stats: {
      assets: false,
      children: false,
      chunks: false,
      chunkModules: false,
      colors: true,
      entrypoints: false,
      hash: false,
      modules: true,
      timings: false,
      version: false,
    },
  }),
);
