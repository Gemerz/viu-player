/* eslint-disable no-console */
const path = require('path');
const postcss = require('postcss');
const tc = require('colorette');
const getNow = () => Date.now();

const getRelative = (p) => path.relative(process.cwd(), p);

/**
 * A function to set the startTime of postcss so that
 * we can print the time taken in the output.
 */
const start = postcss.plugin('postcss-progress-start', function(opts) {
  return function(root, results) {
    const relativeFrom = getRelative(results.opts.from);
    const relativeTo = getRelative(results.opts.to);

    console.log();
    console.log(tc.cyan(`${tc.bold(relativeFrom)} → ${tc.bold(relativeTo)}...`));
    results.startTime = getNow();
  };
});

/**
 * by default there is no way to print that file was written
 * this does that.
 */
const stop = postcss.plugin('postcss-progress-stop', function(opts) {
  opts = opts || {};

  return function(root, results) {
    const relativeTo = getRelative(results.opts.to);
    const timeTaken = getNow() - results.startTime;

    console.log(tc.green(`created ${tc.bold(relativeTo)} in ${tc.bold(`${timeTaken}ms`)}`));
    console.log();
  };
});

module.exports = {
  start,
  stop
};
