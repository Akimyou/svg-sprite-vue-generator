(function(t){function e(e){for(var s,a,o=e[0],c=e[1],l=e[2],p=0,d=[];p<o.length;p++)a=o[p],Object.prototype.hasOwnProperty.call(i,a)&&i[a]&&d.push(i[a][0]),i[a]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);u&&u(e);while(d.length)d.shift()();return n.push.apply(n,l||[]),r()}function r(){for(var t,e=0;e<n.length;e++){for(var r=n[e],s=!0,o=1;o<r.length;o++){var c=r[o];0!==i[c]&&(s=!1)}s&&(n.splice(e--,1),t=a(a.s=r[0]))}return t}var s={},i={index:0},n=[];function a(e){if(s[e])return s[e].exports;var r=s[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,a),r.l=!0,r.exports}a.m=t,a.c=s,a.d=function(t,e,r){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(a.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)a.d(r,s,function(e){return t[e]}.bind(null,s));return r},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/svg-sprite-vue-generator/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var u=c;n.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("a1ec")},"644f":function(t,e){t.exports="/svg-sprite-vue-generator/static/sprite.svg#cat-04.sprite--url-usage"},8534:function(t,e){t.exports={name:"Cat_01SpriteIcon",data:function(){return{id:"cat-01.sprite",src:"/svg-sprite-vue-generator/static/sprite.svg#cat-01.sprite-usage",loading:!0,loadingClass:"svg-sprite-loading",otherClass:"",attrs:{}}},render:function(t){return t("svg",{ref:"cat-01.sprite",attrs:{id:this.id,...this.attrs},class:[this.loading&&this.loadingClass,this.otherClass]},[t("use",{attrs:{"xlink:href":this.src}})])},mounted:function(){var t=this,e=this.$refs[this.id];t.loading=!0,e.complete?t.loading=!1:e.onload=function(){t.loading=!1}}}},a1ec:function(t,e,r){"use strict";r.r(e);r("cadf"),r("551c"),r("f751"),r("097d");var s=r("2b0e"),i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("h1",[t._v("Svg Sprite Vue Generator")]),r("h2",[t._v("Vue component runtime generator for svg-sprite-loader.")]),t._m(0),r("h2",[t._v("#1 Sprite Component")]),r("div",{staticClass:"group"},[r("Cat01Sprite",{staticClass:"icon"}),r("Cat02Sprite",{staticClass:"icon"}),r("Cat03Sprite",{staticClass:"icon"}),r("Cat04Sprite",{staticClass:"icon"})],1),r("h2",[t._v("#2 Normal Asset")]),t._m(1),r("h2",[t._v("#3 Extract Sprite Url")]),r("div",{staticClass:"group",staticStyle:{"flex-direction":"column"}},[r("pre",[t._v(t._s(t.Cat04SpriteURL))])]),r("h2",[t._v("#4 Note")]),t._m(2),t._m(3),t._m(4)])},n=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"group"},[r("a",{attrs:{href:"https://github.com/akimyou/svg-sprite-vue-generator"}},[t._v("Github")]),r("a",{attrs:{href:"https://www.npmjs.com/package/svg-sprite-vue-generator"}},[t._v("Npm")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"group"},[s("img",{staticClass:"icon",attrs:{src:r("fc86"),alt:""}})])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"group",staticStyle:{"flex-direction":"column"}},[r("ul",[r("li",{staticClass:"note"},[t._v('This demo page run in "extract mode"')]),r("li",{staticClass:"note"},[t._v('The "Extract Sprite Url" only in "extract mode" can be an valid url')]),r("li",{staticClass:"note"},[t._v('Please run this demo in local then change "vue.config.js" to test more options')])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("h2",[t._v("Made by "),r("a",{attrs:{href:"https://github.com/akimyou"}},[t._v("Akimyou")]),t._v(" with ❤️")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"group-icon"},[r("div",[t._v("Icons made by "),r("a",{attrs:{href:"https://www.flaticon.com/authors/freepik",title:"Freepik"}},[t._v("Freepik")]),t._v(" from "),r("a",{attrs:{href:"https://www.flaticon.com/",title:"Flaticon"}},[t._v("www.flaticon.com")])]),r("div",[t._v("Icons made by "),r("a",{attrs:{href:"https://www.flaticon.com/authors/becris",title:"Becris"}},[t._v("Becris")]),t._v(" from "),r("a",{attrs:{href:"https://www.flaticon.com/",title:"Flaticon"}},[t._v("www.flaticon.com")])])])}],a=r("8534"),o=r.n(a),c=r("d82b"),l=r.n(c),u=r("bd24"),p=r.n(u),d=r("ec47"),f=r.n(d),h=r("644f"),g=r.n(h),v=(r("fc86"),{data:function(){return{Cat04SpriteURL:g.a}},components:{Cat01Sprite:o.a,Cat02Sprite:l.a,Cat03Sprite:p.a,Cat04Sprite:f.a},name:"app"}),m=v,_=(r("d7fb"),r("2877")),C=Object(_["a"])(m,i,n,!1,null,null,null),b=C.exports;s["a"].config.productionTip=!1,new s["a"]({render:function(t){return t(b)}}).$mount("#app")},bd24:function(t,e){t.exports={name:"Cat_03SpriteIcon",data:function(){return{id:"cat-03.sprite",src:"/svg-sprite-vue-generator/static/sprite.svg#cat-03.sprite-usage",loading:!0,loadingClass:"svg-sprite-loading",otherClass:"",attrs:{}}},render:function(t){return t("svg",{ref:"cat-03.sprite",attrs:{id:this.id,...this.attrs},class:[this.loading&&this.loadingClass,this.otherClass]},[t("use",{attrs:{"xlink:href":this.src}})])},mounted:function(){var t=this,e=this.$refs[this.id];t.loading=!0,e.complete?t.loading=!1:e.onload=function(){t.loading=!1}}}},d7fb:function(t,e,r){"use strict";var s=r("fd12"),i=r.n(s);i.a},d82b:function(t,e){t.exports={name:"Cat_02SpriteIcon",data:function(){return{id:"cat-02.sprite",src:"/svg-sprite-vue-generator/static/sprite.svg#cat-02.sprite-usage",loading:!0,loadingClass:"svg-sprite-loading",otherClass:"",attrs:{}}},render:function(t){return t("svg",{ref:"cat-02.sprite",attrs:{id:this.id,...this.attrs},class:[this.loading&&this.loadingClass,this.otherClass]},[t("use",{attrs:{"xlink:href":this.src}})])},mounted:function(){var t=this,e=this.$refs[this.id];t.loading=!0,e.complete?t.loading=!1:e.onload=function(){t.loading=!1}}}},ec47:function(t,e){t.exports={name:"Cat_04SpriteIcon",data:function(){return{id:"cat-04.sprite",src:"/svg-sprite-vue-generator/static/sprite.svg#cat-04.sprite--url-usage",loading:!0,loadingClass:"svg-sprite-loading",otherClass:"",attrs:{}}},render:function(t){return t("svg",{ref:"cat-04.sprite",attrs:{id:this.id,...this.attrs},class:[this.loading&&this.loadingClass,this.otherClass]},[t("use",{attrs:{"xlink:href":this.src}})])},mounted:function(){var t=this,e=this.$refs[this.id];t.loading=!0,e.complete?t.loading=!1:e.onload=function(){t.loading=!1}}}},fc86:function(t,e,r){t.exports=r.p+"static/img/pet-01.9b754aeb.svg"},fd12:function(t,e,r){}});
//# sourceMappingURL=index.f96b69cf.js.map