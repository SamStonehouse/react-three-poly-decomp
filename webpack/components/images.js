const curry = require('lodash/fp/curry');

const rule = require('../utils/rule');

module.exports = curry(
  (options, config) => {
    return rule(
      {
        test: /\.(jpg|jpeg|png)$/,
        type: 'asset/resource',
        generator: {
          filename: 'assets/images/[hash][ext][query]'
        }
      },
      config,
    );
  },
);
