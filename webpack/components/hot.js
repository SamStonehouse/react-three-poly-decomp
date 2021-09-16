const HotModuleReplacementPlugin = require("webpack").HotModuleReplacementPlugin
const curry = require('lodash/fp/curry');

const plugin = require('../utils/plugin');

module.exports = curry(
  (opts, config) => {
    return plugin(
        new HotModuleReplacementPlugin(),
      config,
    );
  },
);
