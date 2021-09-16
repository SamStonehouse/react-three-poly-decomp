const rule = (_rule, config = {}) => {
  const rules = (config.module && config.module.rules) ? config.module.rules : [];
  return {
    ...config,
    module: {
      ...config.module || {},
      rules: [
        ...rules || [],
        _rule,
      ],
    },
  };
};

module.exports = rule;
