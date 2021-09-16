const curry = require('lodash/fp/curry');

module.exports = curry((opts, config) => {
  return {
    ...config,
    mode: opts.production ? 'production' : 'development',
  };
});
