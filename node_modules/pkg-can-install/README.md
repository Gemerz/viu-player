# pkg-can-install

[![Build Status](https://travis-ci.org/brandonocasey/pkg-can-install.svg?branch=master)](https://travis-ci.org/brandonocasey/pkg-can-install)
[![Greenkeeper badge](https://badges.greenkeeper.io/brandonocasey/pkg-can-install.svg)](https://greenkeeper.io/)

[![NPM](https://nodei.co/npm/pkg-can-install.png?downloads=true&downloadRank=true)](https://nodei.co/npm/pkg-can-install/)

Tests if the package in the current working directory can be installed after it is published, that way you won't have to publish another version with a fix.

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [Installation](#installation)
- [How it works](#how-it-works)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Installation

```
$ npm install --save-dev pkg-can-install
```

Then edit your package.json to have:

```json
  "scripts": {
    "prepublishOnly": "pkg-can-install"
  }
```

Then `pkg-can-install` will be run right before a publish.

## How it works
1. We get a temporary directory
2. We recursively copy the current package minus `node_modules` to that directory
3. We run `npm install --production` and verify that it works
