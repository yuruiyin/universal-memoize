module.exports = {
  entry: {
    bundle: __dirname + '/src/memoize.js'
  },
  output: {
    path: __dirname + '/dist',
    filename: '[name].js'
  }
};