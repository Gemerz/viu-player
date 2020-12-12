/* eslint-disable no-console */
const path = require('path');
const colorette = require('colorette');
const fs = require('fs');

const pkgOk = require('./pkg-ok.js');
const esCheck = require('./es-check.js');
const pkgCanInstall = require('./pkg-can-install.js');

const CHECK_MARK = colorette.green('✔');
const CROSS_MARK = colorette.red('✘');
const SKIP_MARK = colorette.yellow('→');

const verify = function(options) {
  const log = (...args) => options.verbose && !options.quiet && console.log.apply(null, args);
  const error = (...args) => !options.quiet && console.error.apply(null, args);

  let exitCode = 0;

  const useResult = function(result) {
    if (result.status !== 0) {
      exitCode = 1;
      error(`${CROSS_MARK} - ${result.text}`);
    } else {
      log(`${CHECK_MARK} - ${result.text}`);
    }
  };

  return new Promise(function(resolve, reject) {
    if (!options.dir || !fs.existsSync(options.dir) || !fs.existsSync(path.join(options.dir, 'package.json'))) {
      error('You must pass/run in/with a directory that exists with a package.json');
      return resolve(1);
    }

    const promises = [
      pkgCanInstall(options.dir).then(useResult),
      pkgOk(options.dir).then(useResult)
    ];

    if (!options.skipEsCheck) {
      promises.push(esCheck(options.dir).then(useResult));
    } else {
      log(`${SKIP_MARK} - ${esCheck.text}`);
    }

    return resolve(Promise.all(promises));
  }).then(function(results) {
    return Promise.resolve(exitCode);
  }).catch(function(e) {
    error('vjsverify: An internal error occurred', e);
    return Promise.resolve(1);
  });
};

module.exports = verify;
