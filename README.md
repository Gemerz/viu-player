# viu-player


## [online demo](http://blog.gemer.xyz/viu-player/)  
## Table of Contents

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->


- [Installation](#installation)
- [Usage](#usage)
  - [`<script>` Tag](#script-tag)
  - [Browserify/CommonJS](#browserifycommonjs)
  - [RequireJS/AMD](#requirejsamd)
  - [字幕面板](#%E5%AD%97%E5%B9%95%E9%9D%A2%E6%9D%BF)
  - [下一集播放器事件](#%E4%B8%8B%E4%B8%80%E9%9B%86%E6%92%AD%E6%94%BE%E5%99%A8%E4%BA%8B%E4%BB%B6)
  - [双字幕开关通事件](#%E5%8F%8C%E5%AD%97%E5%B9%95%E5%BC%80%E5%85%B3%E9%80%9A%E4%BA%8B%E4%BB%B6)
  - [获取进条度是否可以快进快退](#%E8%8E%B7%E5%8F%96%E8%BF%9B%E6%9D%A1%E5%BA%A6%E6%98%AF%E5%90%A6%E5%8F%AF%E4%BB%A5%E5%BF%AB%E8%BF%9B%E5%BF%AB%E9%80%80)
  - [主动触发信息按键](#%E4%B8%BB%E5%8A%A8%E8%A7%A6%E5%8F%91%E4%BF%A1%E6%81%AF%E6%8C%89%E9%94%AE)
  - [语言选择格式](#%E8%AF%AD%E8%A8%80%E9%80%89%E6%8B%A9%E6%A0%BC%E5%BC%8F)
  - [css格式状态](#css%E6%A0%BC%E5%BC%8F%E7%8A%B6%E6%80%81)
  - [加载超时机制](#%E5%8A%A0%E8%BD%BD%E8%B6%85%E6%97%B6%E6%9C%BA%E5%88%B6)
  - [info 传入字段](#info-%E4%BC%A0%E5%85%A5%E5%AD%97%E6%AE%B5)
  - [advance 高级配置 传入字段](#advance-%E9%AB%98%E7%BA%A7%E9%85%8D%E7%BD%AE-%E4%BC%A0%E5%85%A5%E5%AD%97%E6%AE%B5)
  - [](#)
- [License](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Installation

```sh
npm install --save viu-player
```

## Usage

To include viu-player on your website or web application, use any of the following methods.

### `<script>` Tag

This is the simplest case. Get the script in whatever way you prefer and include the plugin _after_ you include [video.js][videojs], so that the `videojs` global is available.

```html
<script src="//path/to/video.min.js"></script>
<script src="//path/to/viu-player.min.js"></script>
<script>
  var player = videojs("my-video");

  player.ViuPlayer();
</script>
```

### Browserify/CommonJS

When using with Browserify, install viu-player via npm and `require` the plugin as you would any other module.

```js
var videojs = require("video.js");

// The actual plugin function is exported by this module, but it is also
// attached to the `Player.prototype`; so, there is no need to assign it
// to a variable.
require("viu-player");

var player = videojs("my-video");

player.ViuPlayer();
```

### RequireJS/AMD

When using with RequireJS (or another AMD library), get the script in whatever way you prefer and `require` the plugin as you normally would:

```js
require(["video.js", "viu-player"], function(videojs) {
  var player = videojs("my-video");

  player.ViuPlayer();
});
```

### 字幕面板

```js

player.on("subtitleChange", function(event,langId) {
  //data :string etc: 1,2,3 langId
});
player.on("subtitleClick", function(event,langData) {
  //data :string langData
});

player.ViuPlayer().loadNewLangListOptions(langData);
```

### 下一集播放器事件

```js
 //主动方法
player.ViuPlayer()toggleNextChip();

player.on("nextChip", function() {
  //
});
```

### 双字幕开关通事件

```js
   //隐藏方法
   player.ViuPlayer().hideTopSubtitle();   
   // 打开方法
   player.ViuPlayer().showTopSubtitle();
   player.on("toggleTopSubtitle", function(event, switcher) {
      console.log("收到双字幕开关", switcher);
  })
```

### 获取进条度是否可以快进快退
```js
   player.ViuPlayer().checkVideoProcessed();

```

### 主动触发信息按键
```js
   player.ViuPlayer().toggleInfo();

```

### 语言选择格式

```json
languages: [
    {
      id: 'CN',
      name: '简体中文',
      isDefault: 0
    },
    {
      id: 'EN',
      name: 'ENGLISH',
      isDefault: 1
    },
    {
      id: 'JP',
      name: '日文',
      isDefault: 0
    }
  ],
```

### css格式状态
 ```css
 .lang-active{
   // 语言选择状态
 }
 .status-active{
  // 六图标状态
 }

 ```

 ### 加载超时机制
```js
   examplePlayer.on("loadTimeout", function() {
      console.log("loading超60秒");
    });

  options.videoBufferTimeout  // 定义网络慢超时时间

```


 ### info 传入字段
```js
    info: {
    chipName: '',
    episode: '',
    chipCaptions: '',
    chipDesc: '',
    chipTotal: 0,
    isMovie: 0,
    chipActiveTotal: 0,
    userLevel: '',
    pUrl: '',
    showPremium: true,
  }
```

 ### advance 高级配置 传入字段
```js
  advance: {
    resolutionList: ['s1080p', 's720p', 's480p', 's240p'],
    defaultResolution: 's720p',
    cdnList: ['url', 'url2', 'url3'],
    defaultCdn: 'url2'
  }
```
 ### 
```js
   examplePlayer.on("viuAdvance", function(event,data) {
      console.log("viuAdvance",data);  
      // ex: selectId: s1080p
    });

   examplePlayer.on("weakNetwork", function(event,data) {
     // 网络提示
      //
    });
```
## License

MIT. Copyright (c) gemer cheung &lt;gemercheung@gmail.com&gt;

[videojs]: http://videojs.com/
