const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

const curry = require('lodash/fp/curry');

const plugin = require('../utils/plugin');

module.exports = curry((opts, config) => {
  return plugin(
    new ForkTsCheckerWebpackPlugin({
      typescript: {
        configFile: opts.tsconfigPath,
        typescript: {
          diagnosticOptions: {
            semantic: true,
            syntactic: true,
          },
        },
      },
    }),
    config,
  );
});
