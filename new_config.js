module.exports = {
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader', options: { importLoaders: 2, sourceMap: true }
          },
          {
            loader: 'postcss-loader', options: { sourceMap: 'inline' }
          },
          {
            loader: 'sass-loader',
            options: {
              includePaths: [ 'path1', 'path2' ],
              sourceMap: true
            }
          }
        ]
      }
    ]
  }
}
