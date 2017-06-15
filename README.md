# There is a bug with merged Webpack **2** module rules merging for loaders.
webpack-merge: 4.1.0
webpack2
node 6.10.3

It reorders the items in the rule definition, thus breaking the rule.

Please run `npm install` and `node index.js`. To see what I mean.
Notice how `'style_loader'` gets moved to be the second item in the merged rule instead of being the first one.

The output is below:

```
base config { module:
   { rules:
      [ { test: /\.scss$/,
          use:
           [ 'style-loader',
             { loader: 'css-loader',
               options: { importLoaders: 2, sourceMap: true } },
             { loader: 'postcss-loader', options: { sourceMap: 'inline' } },
             { loader: 'sass-loader', options: { sourceMap: true } } ] } ] },
  resolve: { extensions: [ '.js', '.jsx' ] } }
**************
new config { module:
   { rules:
      [ { test: /\.scss$/,
          use:
           [ 'style-loader',
             { loader: 'css-loader',
               options: { importLoaders: 2, sourceMap: true } },
             { loader: 'postcss-loader', options: { sourceMap: 'inline' } },
             { loader: 'sass-loader',
               options: { includePaths: [ 'path1', 'path2' ], sourceMap: true } } ] } ] } }
**************
merged config { module:
   { rules:
      [ { test: /\.scss$/,
          use:
           [ { loader: 'sass-loader',
               options: { sourceMap: true, includePaths: [ 'path1', 'path2' ] } },
             'style-loader',
             { loader: 'css-loader',
               options: { importLoaders: 2, sourceMap: true } },
             { loader: 'postcss-loader', options: { sourceMap: 'inline' } } ] } ] },
  resolve: { extensions: [ '.js', '.jsx' ] } }
```