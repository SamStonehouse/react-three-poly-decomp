const curry = require('lodash/fp/curry');

module.exports = curry((opts, config) => {
  
  return {
    ...config,
    ...(opts.production ? null : { devtool: 'inline-cheap-module-source-map' }),
    devServer: {
      contentBase: opts.webRoot,
      publicPath: opts.assetDir,
      compress: true,
      port: opts.port,
      host: '0.0.0.0',
      hot: true,
    },
  };
});
