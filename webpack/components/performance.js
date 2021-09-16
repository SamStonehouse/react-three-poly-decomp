const curry = require('lodash/fp/curry');

module.exports = curry(
  (options, config) => ({
    ...config,
    performance: {
      assetFilter: function assetFilter(assetFilename) {
        return !/^\.\.\/.*$/.test(assetFilename);
      }
    },
  }),
);
