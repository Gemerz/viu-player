# videojs-generator-verify

[![Build Status](https://travis-ci.org/videojs/videojs-generator-verify.svg?branch=master)](https://travis-ci.org/videojs/videojs-generator-verify)
[![Greenkeeper badge](https://badges.greenkeeper.io/videojs/videojs-generator-verify.svg)](https://greenkeeper.io/)
[![Slack Status](http://slack.videojs.com/badge.svg)](http://slack.videojs.com)

[![NPM](https://nodei.co/npm/videojs-generator-verify.png?downloads=true&downloadRank=true)](https://nodei.co/npm/videojs-generator-verify/)

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

Install `videojs-generator-verify` and `in-publish` via npm

```sh
$ npm install --save-dev videojs-generator-verify in-publish
```

Then add a script to your `package.json` as follows:

```json
{
  "scripts": {
    "prepublish": "not-in-install && npm run build && vjsverify || in-install"
  }
}
```

## Usage

### Command line
This package provides two binaries `videojs-generator-verify` and `vjsverify`. `vjsverify` is just an alias to `videojs-generator-verify`.

The cli has the following options:

```sh

  Usage: vjsverify [--verbose|--quiet|--skip-es-check]

  A tool to verify that a generator-videojs-plugin project is ready for publish.

  -v, --version       Print the version of videojs-generator-verify.
  -V, --verbose       Print all results, even successful ones.
  -q, --quiet         Don't print anything.
  -d, --dir [dir]     Run in this project directory, defaults to cwd.
  --skip-es-check     Do not run es check on dist, for projects with no dist.

```

### API
It is also possible to require this package, and run the `verify` function manually. It takes several options in as an object and returns
a promise that is resolved to 0 on success and 1 on failure.

#### Options
Options are passed in an object by key/value.

Example

```js
const vjsverify = require('videojs-generator-verify');
const opitons = {verbose: true};

vjsverify(options).then(function(exitCode) {
  process.exit(exitCode);
}).catch(function(e) {
  console.error('Uh oh, internally vjsverify error', e);

  process.exit(1);
});
```

##### `verbose`

> Type: `boolean`
> Default: `false`

Print all results, even for success. By default only errors are printed.

##### `quiet`

> Type: `boolean`
> Default: `false`

Do not print anything.

##### `dir`

> Type: `string`
> Default: `process.cwd()`

Run vjsverify in a specific directory. Note that this directory must exist and contain a package.json.

##### `skipEsCheck`

> Type: `boolean`
> Default: `false`

Skip es checking dist. Useful when the project you are working with has no dist files and source files are covered by tests.

## What is tested
This package tests three things:

1. Do all the files referenced in `package.json` point to a file that exists
2. Will the package be installable from npm after publish
3. Are the dist files all using es5 syntax, unless `--skip-es-check` is passed.

## License

Apache-2.0. Copyright (c) Brightcove, Inc.
