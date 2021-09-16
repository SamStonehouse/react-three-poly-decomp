const HtmlWebPackPlugin = require('html-webpack-plugin');
const curry = require('lodash/fp/curry');

const plugin = require('../utils/plugin');

module.exports = curry((opts, config) => {
  return plugin(
    new HtmlWebPackPlugin({
      template: opts.htmlTemplate,
      filename: 'index.html',
    }),
    config,
  );
});
