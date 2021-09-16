const path = require('path');

const ESLintPlugin = require('eslint-webpack-plugin');
const curry = require('lodash/fp/curry');

const plugin = require('../utils/plugin');

module.exports = curry(
  (opts, config) => {
    return plugin(
      new ESLintPlugin({
        files: './**/*.{ts,tsx,js}',
        context: path.resolve('../../../..'),
      }),
      config,
    );
  },
);
