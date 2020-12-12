const pkgOk = require('pkg-ok');

const text = 'All package.json fields exist';

/* a small wrapper around pkg ok to make it a promise */
const runPkgOk = function(cwd) {

  return new Promise(function(resolve, reject) {
    try {
      pkgOk(cwd);
      resolve({status: 0, text});
    } catch (e) {
      resolve({status: 1, text: `${text} error:\n${e.message}`});
    }
  });
};

runPkgOk.text = text;

module.exports = runPkgOk;
