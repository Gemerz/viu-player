# karma-safari-applescript-launcher

[![Build Status](https://travis-ci.org/brandonocasey/karma-safari-applescript-launcher.svg?branch=master)](https://travis-ci.org/brandonocasey/karma-safari-applescript-launcher)
[![Greenkeeper badge](https://badges.greenkeeper.io/brandonocasey/karma-safari-applescript-launcher.svg)](https://greenkeeper.io/)
[![Slack Status](http://slack.videojs.com/badge.svg)](http://slack.videojs.com)

[![NPM](https://nodei.co/npm/karma-safari-applescript-launcher.png?downloads=true&downloadRank=true)](https://nodei.co/npm/karma-safari-applescript-launcher/)

A tool to verify that a generator-videojs-plugin project is ready for publish.

Maintenance Status: Stable

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->


- [Installation](#installation)
- [Usage](#usage)
  - [Command line](#command-line)
  - [API](#api)
    - [Options](#options)
      - [`verbose`](#verbose)
      - [`quiet`](#quiet)
      - [`dir`](#dir)
      - [`skipEsCheck`](#skipescheck)
- [What is tested](#what-is-tested)
- [License](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Installation

Install `karma-safari-applescript-launcher`

```sh
$ npm install --save-dev karma-safari-applescript-launcher
```

## Usage

By default this plugin will be added to the plugins array for your karma config as it starts with `karma-`. If you mess with the plugins array in your karma config you may have to include in manually:

```js
  // include just this launcher
  plugins: ['karma-safari-applescript-launcher']

  // or include a custom plugin and all karma-* plugins
  plugins: ['my-custom-one', 'karma-*']
```

Then you can add `Safari` and `SafariTechPreview` to your browsers array in your karma config:

```js
  browsers: ['Safari', 'SafariTechPreview']
```

You may also want to consider using [karma-detect-browsers](https://www.npmjs.com/package/karma-detect-browsers) as that will automatically add these browsers when they are detected.

## How it works
Everything in this module is done via the [run-applescript](https://www.npmjs.com/package/run-applescript) module. Which runs applescript to control Safari and Safari Technology Preview on Mac OSX.

### How it "starts"
When karma asks us to open the testing url we check if Safari or Safari Technology Preview is open. If it is we know not to close in when karma is finished. Then we open the url that karma asked us to open.

### How it "finishes"
When karma tells to browser to "close" we close all Safari/Safari Technology Preview tabs that match the url that we were asked to open. Then we check if Safari/Safari Technology Preview was open before we started testing. If it was open, we do nothing. If it was not open we close Safari/Safari Technology Preview.

## License

Apache-2.0. Copyright (c) Brightcove, Inc.
