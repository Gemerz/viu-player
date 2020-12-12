# videojs-generate-karma-config

[![Build Status](https://travis-ci.org/videojs/videojs-generate-karma-config.svg?branch=master)](https://travis-ci.org/videojs/videojs-generate-karma-config)
[![Greenkeeper badge](https://badges.greenkeeper.io/videojs/videojs-generate-karma-config.svg)](https://greenkeeper.io/)
[![Slack Status](http://slack.videojs.com/badge.svg)](http://slack.videojs.com)

[![NPM](https://nodei.co/npm/videojs-generate-karma-config.png?downloads=true&downloadRank=true)](https://nodei.co/npm/videojs-generate-karma-config/)

Currently our karma configs are the same for most plugins, but when the default config changes a bit, every repository has
to be updated since it is a static file. This package will provide the standard config as a module, so that updates can be
deployed much easier.

Lead Maintainer: Brandon Casey [@brandonocasey](https://github.com/brandonocasey)

Maintenance Status: Stable


<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**

- [Installation](#installation)
- [Options](#options)
  - [`files`](#files)
  - [`browsers`](#browsers)
  - [`preferHeadless`](#preferheadless)
  - [`detectBrowsers`](#detectbrowsers)
  - [`serverBrowsers`](#serverbrowsers)
  - [`customLaunchers`](#customlaunchers)
  - [`teamcityLaunchers`](#teamcitylaunchers)
  - [`travisLaunchers`](#travislaunchers)
  - [`browserstackLaunchers`](#browserstacklaunchers)
  - [`coverage`](#coverage)
- [Code Coverage](#code-coverage)
  - [codecov.io](#codecovio)
  - [View the html report](#view-the-html-report)
  - [View the report after testing](#view-the-report-after-testing)
- [Overriding Configuration Options](#overriding-configuration-options)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Installation

```
$ npm install --save-dev karma videojs-generate-karma-config
```

Then in your karma config do

```js
const generateKarmaConfig = require('videojs-generate-karma-config');

module.exports = function(config) {
  const options = {};

  config = generateKarmaConfig(config, options);
};
```

## Options
By default all options are passed as the second argument to generateKarmaConfig.

### `files`

> Type: `Function`
> Default: `none`
> NOTE: Be very careful with this option, this will effect ci runs as well.

A function that should take one argument, the array of files that are included, and return an array of files that should be included. This is used to manually overide the files that are included ina test run

Default files that will be passed to you function
```js
[
  'node_modules/video.js/dist/video-js.css',
  'dist/*.css',
  'node_modules/sinon/pkg/sinon.js',
  'node_modules/video.js/dist/video.js',
  'test/dist/bundle.js'
]
```

Example with files function:

```js
module.exports = function(config) {
  const options = {
    files(defaultFiles) {
      return defaultFiles.concat([
        'some-other-file.js'
      ]);
    }
  };

  config = generateKarmaConfig(config, options);
};
```

### `browsers`

> Type: `Function`
> Default: `none`

> NOTE: Be very careful with this option, this will effect ci runs as well.

A function that should take one argument, the array of browsers that are about to run, and return an array of browsers that should run. This is used to manually overide the browsers that should run.

Example with detected browsers:

```js
module.exports = function(config) {
  const options = {
    browsers(aboutToRun) {
      // never test on Safari
      return aboutToRun.filter(function(launcherName) {
        return launcherName !== 'Safari';
      });
    }
  };

  config = generateKarmaConfig(config, options);
};
```

### `preferHeadless`

> Type: `Boolean`
> Default: `true`

If we should prefer running headless browsers. This will change the defaults for `travisLaunchers` and `serverBrowsers` as well as automatic browser detection. Make sure to handle this in [`browsers`](###browsers)

### `detectBrowsers`

> Type: `Boolean`
> Default: `true`

> Note: If you set this to false, you will probably want to provide browsers using the [`browsers`](###browsers) option.

If we should detect browsers to run automatically. This will only be done when:
1. We are not running ci browsers (teamcity, browserstack, or travis)
2. We are not running in `serverMode` (`--no-single-run` passed to karma cli)

### `serverBrowsers`

> Type: `Function`
> Default: `none`

A function that should return an array of browsers that should run when in static server mode (--single-run=false). It should take one argument: The default serverBrowsers array which is `['ChromeHeadless']` if [`preferHeadless`](###preferHeadless) is true and `['Chrome']` otherwise.

Example:

```js
module.exports = function(config) {
  const options = {
    serverBrowsers(defaults) {
      serverBrowsers.push('myTestLauncher');

      return serverBrowsers;
    }
  };

  config = generateKarmaConfig(config, options);
};
```

### `customLaunchers`

> Type: `Function`
> Default: `none`

A function that should return an object of karma custom launchers. It should take one argument: The default custom launchers object which is: `{}`;

Example:

```js
module.exports = function(config) {
  const options = {
    customLaunchers(defaults) {
      return Object.assign(defaults, {
        myTestLauncher: {
          base: 'ChromeHeadless'
        }
      };
    }
  };

  config = generateKarmaConfig(config, options);
};
```

### `teamcityLaunchers`

> Type: `Function`
> Default: `none`

> NOTE: All browsers contained from this object will be run on teamcity, unless BROWSER_STACK_USERNAME is in the enviornment!

A function that should return an object of karma custom launchers, that should be run on teamcity. It should take one argument: The default custom launchers object which is: `{}`;

Example:

```js
module.exports = function(config) {
  const options = {
    teamcityLaunchers(defaults) {
      // add another browser to teamcity testing
      return Object.assign(defaults, {
        myTestLauncher: {
          base: 'ChromeHeadless'
        }
      };
    }
  };

  config = generateKarmaConfig(config, options);
};
```

### `travisLaunchers`

> Type: `Function`
> Default: `none`

> NOTE: All browsers contained from this object will be run on travis, unless BROWSER_STACK_USERNAME is in the enviornment!

A function that should return an object containing karma custom launchers, that should all be run on travis. It should take one argument: The default travis launchers object which is:

> Note: the base will change to non-headless browsers if [`preferHeadless`](###preferHeadless) is set to false.
```js
{
  travisFirefox: {
    base: 'FirefoxHeadless'
  },
  travisChrome: {
    base: 'ChromeHeadless',
    flags: ['--no-sandbox']
  }

}
```

Example:

```js
module.exports = function(config) {
  const options = {
    travisLaunchers(defaults) {
      // add another browser to travis testing
      return Object.assign(defaults, {
        myTestLauncher: {
          base: 'ChromeHeadless'
        }
      };
    }
  };

  config = generateKarmaConfig(config, options);
};
```

### `browserstackLaunchers`

> Type: `Function`
> Default: `none`

> NOTE: all browsers contained in this list will be run if there is an enviornment variable called BROWSER_STACK_USERNAME present!

A function that should return an object containing karma custom launchers, that should all be run on browserstack. It should take one argument: The default browserstack launchers object which is:
```js
{
  bsChrome: {
    base: 'BrowserStack',
    browser: 'chrome',
    os: 'Windows',
    os_version: '10'
  },

  bsFirefox: {
    base: 'BrowserStack',
    browser: 'firefox',
    os: 'Windows',
    os_version: '10'
  },

  bsSafariSierra: {
    base: 'BrowserStack',
    browser: 'safari',
    os: 'OS X',
    os_version: 'Sierra'
  },

  bsEdgeWin10: {
    base: 'BrowserStack',
    browser: 'edge',
    os: 'Windows',
    os_version: '10'
  },

  bsIE11Win10: {
    base: 'BrowserStack',
    browser: 'ie',
    browser_version: '11',
    os: 'Windows',
    os_version: '10'
  },

  bsIE11Win7: {
    base: 'BrowserStack',
    browser: 'ie',
    browser_version: '11',
    os: 'Windows',
    os_version: '7'
  }
}
```

```js
module.exports = function(config) {
  const options = {
    BrowserstackLaunchers(defaults) {
      // only test on Edge windows 10
      return {
        bsEdgeWin10: defaults.bsEdgeWin10;
      };
    }
  };

  config = generateKarmaConfig(config, options);
};
```

### `coverage`

> Type: `Function`
> Default: `true`

If we should report test coverage or not, by default we do.

Example with coverage turned off

```js
module.exports = function(config) {
  const options = {
    coverage: false
  };

  config = generateKarmaConfig(config, options);
};
```

For more information on [browserstack launchers see the docs](https://github.com/karma-runner/karma-browserstack-launcher).

## Code Coverage
lcov, json, and html coverage reports will be generated in `test/dist/coverage` after a test run. Unless coverage is set to false.

### codecov.io
1. install codecov globally in your ci of choice
2. run `codecov -f test/dist/coverage/lcov.info` on your ci after testing

### View the html report
> NOTE: When running as a static server the "serverBrowsers" will have to finish running before you see this. See [serverBrowsers](###serverBrowsers)
1. Run your unit tests
2. open `test/dist/coverage/index.html`

### View the report after testing
* simply run `cat test/dist/coverage/text.txt` or if you want a cross platform way use `shx`. `shx cat test/dist/coverage/text.txt`

## Overriding Configuration Options

Any Karma settings that have not been exposed as an option can be overriden after calling `generateKarmaConfig`.

Example:

```js
module.exports = function(config) {
  const options = {};

  config = generateKarmaConfig(config, options);

  // The reporters setting is not exposed as an option currently
  config.reporters = ['spec'];
};
```
