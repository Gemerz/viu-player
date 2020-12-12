<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [videojs-languages](#videojs-languages)
  - [Installation](#installation)
  - [CLI Usage](#cli-usage)
    - [Specifying a Destination Directory](#specifying-a-destination-directory)
    - [Options](#options)
  - [API Usage](#api-usage)
  - [License](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# videojs-languages

[![Build Status](https://travis-ci.org/videojs/videojs-languages.svg?branch=master)](https://travis-ci.org/videojs/videojs-languages)
[![Greenkeeper badge](https://badges.greenkeeper.io/videojs/videojs-languages.svg)](https://greenkeeper.io/)
[![Slack Status](http://slack.videojs.com/badge.svg)](http://slack.videojs.com)

[![NPM](https://nodei.co/npm/videojs-languages.png?downloads=true&downloadRank=true)](https://nodei.co/npm/videojs-languages/)

A CLI program for converting [video.js JSON language files](https://github.com/videojs/video.js/blob/master/docs/guides/languages.md#creating-the-language-file) into [executable video.js language definitions](https://github.com/videojs/video.js/blob/master/docs/guides/languages.md#adding-languages-to-videojs).

## Installation

```sh
$ npm install -g videojs-languages
```

This will install the `vjslang` binary on your `$PATH`.

## CLI Usage

The `vjslang` binary takes any number of [glob-like arguments](https://www.npmjs.com/package/minimatch) for targeting `.json` files:

```sh
$ vjslang **/*.json foo/bar/*.json
```

If no glob arguments are given, for example:

```sh
$ vjslang
```

The program will fall back to `lang/*.json`.

### Specifying a Destination Directory

By default, each converted `.js` file will be output alongside its source `.json` file, but a `--dir`/`-d` option can be used to specify a directory where _all_ `.js` file(s) will end up:

```sh
$ vjslang foo/bar.json --dir baz
```

The directory will be created if it does not exist. If creation fails, `vjslang` will fall back to its default behavior.

### Options

The `--dir`/`-d` option is the most interesting/useful. For full option documentation refer to:

```sh
$ vjslang --help
```

## API Usage

There is a very simple programmatic API that can be used in your own programs. It is used like this:

```js
import convert from 'videojs-languages';

convert(['foo/bar.json', 'baz/*.json'], 'langs');
```

## License

Apache-2.0
