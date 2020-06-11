var debug   = process.env.NODE_ENV !== "production";
var webpack = require('webpack');
var path    = require('path');

module.exports = {
  context: path.join(__dirname, "src"),
  entry: "./js/client.js",
  module: {
    rules: [
      {
        test: /\.(yml|yaml)$/,
        use: [
          {
            loader: require.resolve('json-loader'),
          },
          {
            loader: require.resolve('yaml-loader')
            // loader: require.resolve(
            //   '../dist/src/obniz/libs/webpackReplace/yaml-schema-loader'
            // ),
          },
        ],
      },
      {
        test: /\.(css)$/,
        use: 'raw-loader',
      },
    ]
  },
  output: {
    path: __dirname + "/src/",
    filename: "client.min.js"
  },
  plugins: debug ? [] : [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
  ]
};
