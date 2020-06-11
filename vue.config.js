module.exports = {

  configureWebpack: {
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
            },
          ],
        },
      ]
    }
  }
}
