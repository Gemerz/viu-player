# postcss-progress

Print the current files being processed, time taken, and when a file is written during postcss.

## Installation

```
$ npm install --save-dev postcss-progress
```

Then require that plugin in your code and use it:

```js
var progress = require('postcss-progress');

...
plugins: [
  progress.start()
  // insert other plugins here
  progress.stop()
];
..

```

Now when you run postcss you will get the following output, but it will also be colored.

```
src/index.css → dist/foo.css...
created dist/foo.css in 216ms
```
