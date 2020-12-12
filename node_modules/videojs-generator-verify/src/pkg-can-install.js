const promiseSpawn = require('./promise-spawn');

const text = 'Package can be installed after publish';

const runPkgCanInstall = function(cwd) {
  const pkgCanInstall = require.resolve('pkg-can-install');

  return promiseSpawn(pkgCanInstall, [], {cwd}).then(function(result) {
    if (result.status === 0) {
      return Promise.resolve({status: 0, text});
    }
    return Promise.resolve({status: 1, text: `${text} error:\n${result.stderr.trim()}`});
  });
};

runPkgCanInstall.text = text;

module.exports = runPkgCanInstall;
