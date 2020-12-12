const findRoot = require('find-root');
const path = require('path');

/**
 * Get ignored file patterns for a directory, if any.
 *
 * @param  {string} dir
 * @return {Array|undefined}
 */
module.exports = function ignores(dir) {
  let root;

  try {
    root = findRoot(dir);
  } catch (x) {
    return {};
  }

  const pkg = require(path.join(root, 'package.json'));

  return pkg.vjsstandard || {};
};
