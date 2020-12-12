# karma-static-server

Use karma as a static server as well as a test runner!

## Installation

```
$ npm install --save-dev karma-static-server
```

Then edit your karma.conf.js so that `staticServer` is in middleware:

```js
  "middleware": ["staticServer"],
```

You will also want to change the karma `urlRoot` so that karma does not take over the root path, IE: `/`.

```js
  "urlRoot": "/test/",
```

Now karma will run test on `/test`.

You may also need to include it in plugins, if you are manually specifying them. By default karma will include all packages that match
`karma-*`.

```js
  "plugins": ["karma-*"],
  // or
  "plugins": [
    ...
    "karma-static-server"
    ...
  ],
```

Now when you run karma you will also get a static server for the `basePath` you have set in your karma config. To configure that see below.

## Options
Most options are passed directly to [`serve-static`](https://www.npmjs.com/package/serve-static), other than those listed.

### root

> Type: `string`
> Default: karma basePath

Where to serve files out of

### log

> Type: `boolean`
> Default: false during singleRun, false otherwise

Use the karma log to log static responses, and log that we are seving static files.

