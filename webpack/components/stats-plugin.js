const { StatsWriterPlugin } = require("webpack-stats-plugin")
const curry = require('lodash/fp/curry');

const plugin = require('../utils/plugin');

module.exports = curry(
  (opts, config) => {
    return plugin(
        new StatsWriterPlugin({
            filename: "../stats.json", // Default
            stats: "verbose",
        }),
      config,
    );
  },
);
