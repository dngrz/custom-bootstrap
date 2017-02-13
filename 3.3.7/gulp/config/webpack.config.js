var paths = require('../util/paths');

module.exports = {
  node: {
    __filename: true
  },
  entry: {
    app: './app/react/components/index.jsx'
  },
  output: {
    path: paths.js.dest,
    filename: '[name].js'
  },
  resolve: {
    modulesDirectories: [
      'node_modules',
      'app/react'
    ]
  },
  module: {
    loaders: [
      {test: /\.js$|\.jsx$/, exclude: /node_modules/, loader: "babel-loader?optional=runtime&cacheDirectory"}
    ]
  }
};
