var DefaultConfig = require('./default.config.js');

module.exports = {
  entry: DefaultConfig.Entries,
  output: {
    path: DefaultConfig.Dist,
    publicPath: '/',
    filename: DefaultConfig.BundleName + '.js'
  },
  module: {
    loaders: DefaultConfig.Loaders
  }
};
