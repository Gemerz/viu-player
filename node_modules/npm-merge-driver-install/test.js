import test from 'ava';
import childProcess from 'child_process';
import path from 'path';
import shell from 'shelljs';
import uuid from 'uuid';

const BASE_DIR = path.join(__dirname);
const TEMP_DIR = shell.tempdir();

const getTempDir = function() {
  return path.join(TEMP_DIR, uuid.v4());
};

const isInstalled = function(dir) {
  const gitConfigPath = path.join(dir, '.git', 'config');

  if (!shell.test('-f', gitConfigPath)) {
    return false;
  }

  const str = shell.cat(gitConfigPath);

  if (!(/npm-merge-driver/i).test(str)) {
    return false;
  }

  return true;
};

const promiseSpawn = function(bin, args, options = {}) {
  return new Promise((resolve, reject) => {
    options = Object.assign({shell: true, stdio: 'pipe'}, options);

    const child = childProcess.spawn(bin, args, options);

    let stdout = '';
    let stderr = '';
    let out = '';

    if (child.stdout) {
      child.stdout.on('data', function(chunk) {
        const str = chunk.toString();

        out += str;
        stdout += str;
      });
    }

    if (child.stderr) {
      child.stderr.on('data', function(chunk) {
        const str = chunk.toString();

        out += str;
        stderr += str;
      });
    }
    const kill = () => child.kill();

    process.on('SIGINT', kill);
    process.on('SIGQUIT', kill);
    process.on('exit', kill);

    child.on('close', (exitCode) => {
      if (!options.ignoreExitCode && exitCode !== 0) {
        return reject(`command ${bin} ${args.join(' ')} failed with code ${exitCode}\n` + out);
      }
      return resolve({exitCode, stderr, stdout});
    });
  });
};

test.before((t) => {
  t.context = {
    template: getTempDir()
  };

  shell.mkdir(t.context.template);

  // create the package.json
  return promiseSpawn('npm', ['init', '-y'], {cwd: t.context.template}).then(function() {
    // create the .git dir
    return promiseSpawn('git', ['init'], {cwd: t.context.template});
  });

});

test.beforeEach((t) => {
  t.context.dir = getTempDir();
  shell.cp('-R', t.context.template, t.context.dir);

  t.context.link = function(env = {}) {
    return promiseSpawn('npm', ['install', BASE_DIR], {
      cwd: t.context.dir,
      env: Object.assign({PATH: process.env.PATH}, env)
    });
  };

});

test.afterEach.always((t) => {
  shell.rm('-rf', t.context.dir);
});

test.after.always((t) => {
  shell.rm('-rf', t.context.template);
});

test('does not install without .git', (t) => {
  shell.rm('-rf', path.join(t.context.dir, '.git'));

  return t.context.link().then(function(result) {
    t.false(isInstalled(t.context.dir));
  });
});

test('does not install if in ci', (t) => {
  return t.context.link({TRAVIS: 'some-value'}).then(function(result) {
    t.false(isInstalled(t.context.dir));
  });
});

test('does not install if NPM_MERGE_DRIVER_SKIP_INSTALL=true', (t) => {
  return t.context.link({NPM_MERGE_DRIVER_SKIP_INSTALL: 'some-value'}).then(function(result) {
    t.false(isInstalled(t.context.dir));
  });
});

test('installs with .git', (t) => {
  return t.context.link().then(function(result) {
    t.true(isInstalled(t.context.dir));
  });
});

test('installs in ci if NPM_MERGE_DRIVER_IGNORE_CI=true', (t) => {
  return t.context.link({TRAVIS: 'some-value', NPM_MERGE_DRIVER_IGNORE_CI: 'some-value'}).then(function(result) {
    t.true(isInstalled(t.context.dir));
  });
});

test('installs in cwd if run as binary', (t) => {
  return promiseSpawn(path.join(BASE_DIR, 'index.js'), [], {cwd: t.context.dir, env: {PATH: process.env.PATH}}).then(function(result) {
    t.true(isInstalled(t.context.dir));
  });
});

test('Can install after npm install with binary', (t) => {
  return t.context.link({NPM_MERGE_DRIVER_SKIP_INSTALL: 'some-value'}).then(function(result) {
    t.false(isInstalled(t.context.dir));
    return promiseSpawn('npm-merge-driver-install', [], {cwd: t.context.dir, env: {PATH: process.env.PATH}});
  }).then(function(retult) {
    t.true(isInstalled(t.context.dir));
  });
});
