var path = require('path');

module.exports = {
  Port: 3000,
  BundleName: 'bundle',
  Dist: path.join(__dirname, '..', 'dist'),
  Entries: [
    path.join(__dirname, '..', 'src', 'application.js')
  ],
  Loaders: [
    {
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loaders: ["babel-loader"]
    }
  ]
};
