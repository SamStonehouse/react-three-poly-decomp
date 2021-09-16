const compose = require('lodash/fp/compose');

const mode = require('./components/mode');
const scripts = require('./components/scripts');
const html = require('./components/html');
const webpackDevServer = require('./components/webpack-dev-server');
const forkTsChecker = require('./components/fork-ts-checker');
const styles = require('./components/styles');
const statsPlugin = require('./components/stats-plugin');
const lint = require('./components/lint');
const clean = require('./components/clean');
const fonts = require('./components/fonts');
const hot = require('./components/hot');
const images = require('./components/images');
const target = require('./components/target');
const stats = require('./components/stats');
const performance = require('./components/performance');

const components = [
  clean,
  mode,
  forkTsChecker,
  webpackDevServer,
  scripts,
  html,
  styles,
  statsPlugin,
  lint,
  fonts,
  hot,
  images,
  target,
  stats,
  performance,
];

module.exports = (opts) => (config) => compose(components.map(comp => (comp(opts))))(config);
