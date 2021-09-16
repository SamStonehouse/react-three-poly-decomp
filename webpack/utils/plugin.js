const plugin = (_plugin, config) => {
  return {
    ...config,
    plugins: [
      ...config.plugins || [],
      _plugin,
    ],
  };
};

module.exports = plugin;