const curry = require('lodash/fp/curry');

const { CleanWebpackPlugin } = require('clean-webpack-plugin'); // installed via npm

const plugin = require('../utils/plugin');

module.exports = curry(
  (opts, config) => {
    return plugin(
      new CleanWebpackPlugin(),
      config,
    );
  },
);
