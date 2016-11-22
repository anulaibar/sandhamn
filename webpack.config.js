module.exports = {
  entry: {
    javascript: __dirname + '/src/index.js',
    html: __dirname + '/public/index.html'
  },
  output: {
    path: __dirname + '/public',        // Production bundle destination directory
    filename: 'bundle.js',              // Destination file name
    publicPath: '/'
  },
  devServer: {
    historyApiFallback: true,            // Makes page reload work
    proxy: {
      '/api/*': {
        target: 'http://localhost:3000',
        secure: false
      }
    }
  },
  module: {
    loaders: [
      {
        test: /\.js$/,                  // Process js files
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015'], // Use jsx and es6 transpilers
          plugins: ["transform-object-assign"]
        }
      },
      {
        test: /\.html$/,
        loader: 'file?name=[name].[ext]'
      }
    ]
  }
}
