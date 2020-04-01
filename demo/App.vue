<template>
  <div id="app">
    <h1>Svg Sprite Vue Generator</h1>
    <h2>Vue component runtime generator for svg-sprite-loader.</h2>
    <h2>#1 Sprite Component</h2>
    <div class="group">
      <Cat01Sprite class="icon" />
      <Cat02Sprite class="icon" />
      <Cat03Sprite class="icon" />
      <Cat04Sprite class="icon" />
    </div>
    <h2>#2 Normal Asset</h2>
    <div class="group">
      <img class="icon" src="./assets/pet-01.svg" alt="">
    </div>
    <h2>#3 Extract Sprite Url</h2>
    <div class="group" style="flex-direction: column;">
      <pre>{{ Cat04SpriteURL }}</pre>
    </div>
    <h2>#4 Note</h2>
    <div class="group" style="flex-direction: column;">
      <ul>
        <li class="note">This demo page run in "inline mode"</li>
        <li class="note">The "Extract Sprite Url" only in "extract mode" can be an valid url</li>
        <li class="note">Please run this demo in local then change "vue.config.js" to test more options</li>
      </ul>
    </div>
    <h2>Made by <a href="https://github.com/akimyou" target="_blank">Akimyou</a> with ❤️</h2>
    <div class="group">
      <a href="https://github.com/akimyou/svg-sprite-vue-generator">Github</a>
      <a href="https://www.npmjs.com/package/svg-sprite-vue-generator">Npm</a>
    </div>
    <div class="group-icon">
      <div>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a
        href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
      <div>Icons made by <a href="https://www.flaticon.com/authors/becris" title="Becris">Becris</a> from <a
        href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
    </div>
  </div>
</template>

<script>
import Cat01Sprite from './assets/cat-01.sprite.svg'
import Cat02Sprite from './assets/cat-02.sprite.svg'
import Cat03Sprite from './assets/cat-03.sprite.svg'
import Cat04Sprite from './assets/cat-04.sprite.svg'
import Cat04SpriteURL from './assets/cat-04.sprite.svg?URL'
import Pet01 from './assets/pet-01.svg'


export default {
  data() {
    return {
      Cat04SpriteURL
    }
  },
  components: {
    Cat01Sprite,
    Cat02Sprite,
    Cat03Sprite,
    Cat04Sprite
  },
  name: 'app'
}
</script>

<style lang="css">
body {
  margin: 0;
}
#app {
  margin-left: 30px;
  margin-right: 30px;
  margin-bottom: 30px;
}
h1, h2 {
  text-align: center;
}
.group {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}
.group pre {
  background-color: #efefef;
  border-radius: 5px;
  padding: 15px;
  white-space: normal;
}
.group .note {
  color: #999;
}
.group .icon {
  max-width: 200px;
  max-height: 200px;
  margin-bottom: 30px;
}
.group a {
  margin-right: 20px;
}
.group-icon {
  margin-top: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
