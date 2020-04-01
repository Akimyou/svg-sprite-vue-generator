# svg-sprite-vue-generator

Vue component runtime generator for svg-sprite-loader.

## Install

```sh
npm install svg-sprite-vue-generator -D
```

## Usage

### Inline mode

All svg icon will be inline to part of the component.

Inline mode is default mode from `svg-sprite-loader`. It called `spriteModule`.

- https://github.com/JetBrains/svg-sprite-loader#spritemodule-autoconfigured

```js
import FacebookSprite from './assets/facebook.sprite.svg'
import TwitterSprite from './assets/twitter.sprite.svg'
import wikipedia from './assets/wikipedia.svg'

// FacebookSprite will be a valid vue component, use it as an vue component

console.log(FacebookSprite)
// render as: <svg><use xlink:href="#facebook.sprite"></use></svg>

console.log(TwitterSprite)
// render as: <svg><use xlink:href="#twitter.sprite"></use></svg>

// wikipedia still be an normal asset url, use it as normal image asset url in html img tag or css background-image

console.log(wikipedia)
// log as: /static/img/wikipedia.77b80eb8.svg
```

#### Config

May be need to install related loaders, such as:

- babel-loader
- svg-sprite-loader
- svgo-loader

```js
// vue.config.js
module.exports = {
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
          runtimeGenerator: require.resolve('svg-sprite-vue-generator'),
        }
      }).end()
      .use('svgo-loader').loader('svgo-loader')
  }
}
```

### Extract mode

All svg file will be group to an independent svg file.

- https://github.com/JetBrains/svg-sprite-loader#extract-default-false-autoconfigured

```js
import FacebookSprite from './assets/facebook.sprite.svg'
import TwitterSprite from './assets/twitter.sprite.svg'
import TwitterSpriteURL from './assets/twitter.sprite.svg?URL'
import wikipedia from './assets/wikipedia.svg'

// FacebookSprite will be a valid vue component, use it as an vue component
// It will be render as an normal img or svg tag with src to an an independent svg file(include all svg sprite)

console.log(FacebookSprite)
// render as: <svg><use xlink:href="/static/sprite.svg#facebook.sprite-usage"></use></svg>
// render as img: <img src="/static/sprite.svg#twitter.sprite--url-usage">

console.log(TwitterSprite)
// render as: <svg><use xlink:href="/static/sprite.svg#twitter.sprite-usage"></use></svg>

// TwitterSpriteURL will be an normal url, use it as normal image asset in html img tag or css background-image
console.log(TwitterSpriteURL)
// log as: /static/sprite.svg#twitter.sprite--url-usage

// wikipedia still be an normal asset, use it as normal image asset in html img tag or css background-image

console.log(wikipedia)
// log as: /static/img/wikipedia.77b80eb8.svg
```

#### Config

May be need to install related loaders, such as:

- svg-sprite-loader
- svgo-loader

```js
// vue.config.js
const SpriteLoaderPlugin = require('svg-sprite-loader/plugin')

module.exports = {
  assetsDir: 'static',
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
      .use('svg-sprite-loader').loader('svg-sprite-loader').tap(() => {
        return {
          runtimeGenerator: require.resolve('svg-sprite-vue-generator'),
          runtimeOptions: {
            // default render svg tag, set it true to render img tag
            extractCompTagImg: false,
          },
          extract: true,
          publicPath: '/static/'
        }
      }).end()
      .use('svgo-loader').loader('svgo-loader')
  }
}
```


### Note

- Can not use inline and extract mode toggler
- May be you can use just extract mode for all svg file

## Demo

```sh
npm run demo:serve
```
