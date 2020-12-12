# videojs-generate-postcss-config

[![Build Status](https://travis-ci.org/videojs/videojs-generate-postcss-config.svg?branch=master)](https://travis-ci.org/videojs/videojs-generate-postcss-config)
[![Greenkeeper badge](https://badges.greenkeeper.io/videojs/videojs-generate-postcss-config.svg)](https://greenkeeper.io/)
[![Slack Status](http://slack.videojs.com/badge.svg)](http://slack.videojs.com)

[![NPM](https://nodei.co/npm/videojs-generate-postcss-config.png?downloads=true&downloadRank=true)](https://nodei.co/npm/videojs-generate-postcss-config/)

Currently our postcss configs are the same for most plugins, but when the default config changes a bit, every repository has
to be updated since it is a static file. This package will provide the standard config as a module, so that updates can be
deployed much easier.

Lead Maintainer: Brandon Casey [@brandonocasey](https://github.com/brandonocasey)

Maintenance Status: Stable


<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**

- [Installation](#installation)
- [Options](#options)
  - [`browserslist`](#browserslist)
  - [`banner`](#banner)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Installation

```
$ npm install --save-dev postcss-cli videojs-generate-postcss-config
```

Then in your postcss config do

```js
const generatePostcssConfig = require('videojs-generate-postcss-config');

module.exports = function(context) {
  const options = {};

  return generatePostcssConfig(context, options);
};
```

## Options
options that are passed as an object to the `generatePostcssConfig` function.

### `browserslist`

> Type: `string|Array`
> Default: ['defaults', 'ie 11']

What browser syntax should be supported in the browser/test dist files. Can also be specified in the package.json as a top level `browserslist` key/value. See the [browserslist repo](https://github.com/browserslist/browserslist) for more information.

### `banner`

> Type: `string`
> Default: `/*! @name ${pkg.name} @version ${pkg.version} @license ${pkg.license} */`

The banner that should be inserted to the top of all bundles. You probably should not change this from the default!
