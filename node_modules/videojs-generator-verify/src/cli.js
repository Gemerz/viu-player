#! /usr/bin/env node
/* eslint-disable no-console */

const verify = require('./index.js');
const pkg = require('../package.json');

const options = {
  verbose: false,
  quiet: false,
  skipEsCheck: false,
  dir: process.cwd()
};

const printHelp = function() {
  console.log();
  console.log('  Usage: vjsverify [--verbose|--quiet|--skip-es-check]');
  console.log();
  console.log(`  ${pkg.description}`);
  console.log();
  console.log('  -v, --version       Print the version of videojs-generator-verify.');
  console.log('  -V, --verbose       Print all results, even successful ones.');
  console.log('  -q, --quiet         Don\'t print anything.');
  console.log('  -d, --dir [dir]     Run in this project directory, defaults to cwd.');
  console.log('  --skip-es-check     Do not run es check on dist, for projects with no dist.');
  console.log();
};

// only takes one argument
for (let i = 0; i < process.argv.length; i++) {
  if ((/^-h|--help$/).test(process.argv[i])) {
    printHelp();
    process.exit();
  } else if ((/^-v|--version$/).test(process.argv[i])) {
    console.log(pkg.version);
    process.exit();
  } else if ((/^-V|--verbose$/).test(process.argv[i])) {
    options.verbose = true;
  } else if ((/^-q|--quiet$/).test(process.argv[i])) {
    options.quiet = true;
  } else if ((/^--skip-es-check$/).test(process.argv[i])) {
    options.skipEsCheck = true;
  } else if ((/^-d|--dir$/).test(process.argv[i])) {
    i++;
    options.dir = process.argv[i];
  }
}

verify(options).then(function(exitCode) {
  process.exit(exitCode);
});
