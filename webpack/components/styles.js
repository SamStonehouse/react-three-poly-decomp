const compose = require('lodash/fp/compose');
const curry = require('lodash/fp/curry');

const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const rule = require('../utils/rule');
const plugin = require('../utils/plugin');

module.exports = curry(
  (opts, _config) => {
    return compose(
      (config) => {
        return rule(
          {
            test: /\.(sa|sc|c)ss$/,
            use: [
              {
                loader: MiniCssExtractPlugin.loader,
                options: { publicPath: '../' },
              },
              {
                loader: 'css-loader',
                options: {
                  sourceMap: true,
                  importLoaders: 1,
                  modules: {
                    localIdentName: opts.production ? '[hash:base64]' : '[name]-[hash:base64]', // Add name to dev to help a little with component identification in dev tools
                    exportLocalsConvention: 'dashes',
                  },
                }
              },
              { loader: 'resolve-url-loader' },
              {
                loader: 'sass-loader',
                options: {
                  sourceMap: true,
                }
              },
            ]
          },
          config,
        );
      },
      (config) => {
        return plugin(
          new MiniCssExtractPlugin({
            filename: 'assets/styles.css',
          }),
          config,
        );
      },
    )(_config);
  }
);
