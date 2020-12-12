const flatten = require('flatten');
const fs = require('fs');
const globby = require('globby');
const mkdirp = require('mkdirp');
const path = require('path');

/**
 * Determines if a value is a non-empty string.
 *
 * @private
 * @param  {Mixed} v
 * @return {boolean}
 */
const nonEmptyStr = v =>
  typeof v === 'string' && (/\S/).test(v);

/**
 * Normalize a patterns string/array into an array of non-empty strings,
 * defaulting to ["lang/*.json"].
 *
 * @private
 * @param  {Array|string} patterns
 * @return {Array}
 */
const normalizePatterns = patterns => {

  // Normalize valid, non-empty string arguments into an array.
  if (nonEmptyStr(patterns)) {
    return [patterns];
  }

  // Default to the "lang" dir in the cwd in the case of invalid or an
  // effectively empty patterns array.
  if (!Array.isArray(patterns) || !patterns.some(nonEmptyStr)) {
    return ['lang/*.json'];
  }

  return patterns.filter(nonEmptyStr);
};

/**
 * Normalize a directory by verifying that it exists - or returning null.
 *
 * @private
 * @param  {string} [dir]
 * @return {string|undefined}
 */
const normalizeDir = dir => {
  if (nonEmptyStr(dir)) {
    try {

      // mkdirp will do nothing if the directory exists or it will create
      // it if it does not. The only reason it should fail is if the
      // Node process can't write to the path for whatever reason. In that
      // case, we catch and treat the dir as invalid.
      mkdirp.sync(dir);
      return dir;
    } catch (x) {
      return;
    }
  }
  return;
};

/**
 * Takes an array of source .json files and an optional destination
 * directory and returns an array of destination .js files.
 *
 * @private
 * @param  {string} src
 * @param  {string|null} dir
 * @return {string}
 *         The path to the destination .js file.
 */
const destination = (src, dir) => {
  const d = dir || path.dirname(src);
  const bn = path.basename(src);

  // We can assume the basename ends in ".json", so we only need to pop
  // off the "on" to get the proper extension.
  return path.join(d, bn.substr(0, bn.length - 2));
};

/**
 * Takes an array of patterns and returns an array of matching .json
 * filenames.
 *
 * @private
 * @param  {Array} patterns
 * @return {Array}
 */
const findSources = patterns =>
  flatten(globby.sync(patterns).filter(f => path.extname(f) === '.json'));

/**
 * Process an array of source .json files into an optional dir, output
 * as .js files.
 *
 * @private
 * @param  {Array} srces
 * @param  {string|null} dir
 * @return {Array}
 */
const processSources = (srces, dir) =>
  srces.map(src => {
    const dest = destination(src, dir);

    // Here, we parse and then re-stringify the file contents to ensure
    // they are valid JSON.
    const json = JSON.parse(fs.readFileSync(src, 'utf8'));
    const lang = path.basename(src, '.json');
    const data = JSON.stringify(json, null, '  ');

    fs.writeFileSync(dest, `videojs.addLanguage('${lang}', ${data});`);

    return dest;
  });

module.exports = {
  nonEmptyStr,
  normalizePatterns,
  normalizeDir,
  destination,
  findSources,
  processSources
};
