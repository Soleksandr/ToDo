import path from 'path';

const distDir = path.join(__dirname, 'static');

export default {
  devtool: 'cheap-eval-source-map',
  entry: './src/index',
  output: {
    path: `${distDir}/dist`,
    filename: 'bundle.js',
    publicPath: '/',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      loaders: ['babel-loader'],
      exclude: /node_modules/,
    }],
  },
};
