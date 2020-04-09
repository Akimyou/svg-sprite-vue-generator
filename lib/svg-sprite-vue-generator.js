const path = require('path')

const pascalCase = require('pascal-case')
const { stringifySymbol } = require('svg-sprite-loader/lib/utils')
const { generateSpritePlaceholder } = require('svg-sprite-loader/lib/utils')

module.exports = function runtimeGenerator({ symbol, loaderContext, config }) {
  // loaderContext._compiler.options.output.publicPath from webpack
  // config.publicPath from svg-sprite-loader
  const publicPath = path.join(loaderContext._compiler.options.output.publicPath, config.publicPath)
  const spritePlaceholder = generateSpritePlaceholder(symbol.request.file)
  const { spriteModule, symbolModule, extract } = config
  const { extractCompTagImg } = config.runtimeOptions || {}
  const isExtractUrl = loaderContext.resourceQuery.endsWith('URL')
  const compName = `${pascalCase(symbol.id)}Icon`

  // template for inline component
  // need babel-loader
  const inlineComp = `
    import SpriteSymbol from '${symbolModule}'
    import sprite from '${spriteModule}'

    const symbol = new SpriteSymbol(${stringifySymbol(symbol)})
    sprite.add(symbol)

    export default {
      name: '${compName}',
      data() {
        return {
          id: '${symbol.id}',
        }
      },
      render(h) {
        return h('svg', {}, [
          h('use', { attrs: { 'xlink:href': '#' + this.id } })
        ])
      },
    }
  `
  // template for extract component use svg
  const extractCompSvg = `
    module.exports = {
      name: '${compName}',
      data: function() {
        return {
          id: '${symbol.id}',
          src: '${publicPath + spritePlaceholder}'
        };
      },
      render: function(h) {
        return h('svg', {}, [
          h('use', { attrs: { 'xlink:href': this.src } })
        ]);
      },
    };
    `
  // template for extract component use img
  const extractCompImg = `
    module.exports = {
      name: '${compName}',
      data: function() {
        return {
          id: '${symbol.id}',
          src: '${publicPath + spritePlaceholder}'
        };
      },
      render: function(h) {
        return h('img', { attrs: { 'src': this.src } });
      },
    };
    `
  // template for extract pure url
  const extractUrl =  `
    module.exports = '${`${path.join(publicPath, config.spriteFilename)}#${symbol.id}-usage`}'
  `

  if (extract) {
    if (isExtractUrl) {
      return extractUrl
    }
    return extractCompTagImg ? extractCompImg : extractCompSvg
  }
  return inlineComp
}
