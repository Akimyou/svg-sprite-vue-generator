const SpriteLoaderPlugin = require('svg-sprite-loader/plugin')

// vue.config.js
module.exports = {
  outputDir: 'docs',
  assetsDir: 'static',
  pages: {
    index: 'demo/main.js',
  },
  configureWebpack: {
    plugins: [
      // NOTE: for extract mode, un support https://github.com/JetBrains/svg-sprite-loader#plain-sprite
      new SpriteLoaderPlugin()
    ]
  },
  chainWebpack: config => {
    // default file-loader
    config.module.rule('svg')
      .exclude.add(/\.sprite\.(svg)(\?.*)?$/).end()

    // add svg-sprite-loader
    config.module.rule('svg-sprite')
      .test(/\.sprite\.(svg)(\?.*)?$/)
      .use('babel-loader').loader('babel-loader').end()
      .use('svg-sprite-loader').loader('svg-sprite-loader').tap(() => {
        return {
          runtimeGenerator: require.resolve('./lib/svg-sprite-vue-generator'),
          runtimeOptions: {
            extractCompTagImg: false,
          },
          extract: false,
          publicPath: '/static/'
        }
      }).end()
      .use('svgo-loader').loader('svgo-loader')
  }
}
