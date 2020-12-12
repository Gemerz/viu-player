# @videojs/generator-helpers

[![Build Status](https://travis-ci.org/videojs/generator-helpers.svg?branch=master)](https://travis-ci.org/videojs/generator-helpers)
[![Greenkeeper badge](https://badges.greenkeeper.io/videojs/generator-helpers.svg)](https://greenkeeper.io/)

A package to keep all of our generator helpers packages, so everything can be updated more easily.

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->


- [Installation](#installation)
- [What does it provide/do](#what-does-it-providedo)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Installation
To install run

```
npm i --save-dev @videojs/generator-helpers
```

## What does it provide/do

* `conventional-changelog-cli`: provides a binary called `conventional-changelog` that we use to automate our changelog updates during release
* `conventional-changelog-videojs`: won't be used directly, a `conventional-changelog` preset [see the docs for that](https://github.com/videojs/conventional-changelog-videojs/blob/master/convention.md)
* `doctoc`: provides a `doctoc` binary that will a table of contents to any markdown file. Should be used with `--notitle` to avoid a title
* `lint-staged`: provides a `lint-staged` binary that looks at `package.json` for instructions. See [the docs](https://github.com/okonet/lint-staged) or what we use in [the generator](https://github.com/videojs/generator-videojs-plugin/blob/master/generators/app/package-json.js#L190)
* `not-prerelease` provides a `not-prerelease` and `is-prerelease` binary that look at the `package.json` in the current working directory and exit with a success or failure depending on the binary and if the current version is a prerelease or not.
* `npm-merge-driver-install` installs `npm-merge-driver` which makes merging `package-lock.json` changes mostly automatic.
* `npm-run-all` Allows us to use npm as a task runner and more easily run tasks in parallel/sequence. See [the docs for more info](https://github.com/mysticatea/npm-run-all)
* `shx` A cross platform and lightweight binary that supports running shell commands across operating system. See the [docs for what it can do](https://github.com/shelljs/shx#readme)
* `husky` provides git hooks so that certain commands can be run when git commands are run. [See the docs](https://github.com/typicode/husky#readme)
