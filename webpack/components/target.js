const curry = require('lodash/fp/curry');

module.exports = curry(
  (options, config) => ({
    ...config,
    target: options.target,
  }),
);
