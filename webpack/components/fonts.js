const curry = require('lodash/fp/curry');

const rule = require('../utils/rule');

module.exports = curry(
  (options, config) => {
    return rule(
      {
        test: /\.(woff|woff2|eot|ttf)$/,
        type: 'asset/resource',
        generator: {
          filename: 'assets/fonts/[hash][ext][query]'
        }
      },
      config,
    );
  },
);
