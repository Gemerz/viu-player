import test from 'ava';
import promiseSpawn from '../src/promise-spawn';
import path from 'path';
import shell from 'shelljs';
import uuid from 'uuid';

const BASE_DIR = path.join(__dirname, '..');
const TEMP_DIR = shell.tempdir();
const FIXTURE_DIR = path.join(__dirname, 'fixture');

const getTempDir = function() {
  return path.join(TEMP_DIR, uuid.v4());
};

test.before((t) => {
  const pkg = JSON.parse(shell.cat((path.join(BASE_DIR, 'package.json'))));

  shell.mkdir('-p', path.join(FIXTURE_DIR, 'node_modules', '.bin'));
  shell.ln('-sf', BASE_DIR, path.join(FIXTURE_DIR, 'node_modules', pkg.name));

  Object.keys(pkg.bin).forEach(function(binName) {
    const binPath = pkg.bin[binName];

    shell.ln(
      '-sf',
      path.join(BASE_DIR, binPath),
      path.join(FIXTURE_DIR, 'node_modules', '.bin', binName)
    );
  });
});

test.beforeEach((t) => {
  t.context.dir = getTempDir();
  shell.cp('-R', FIXTURE_DIR, t.context.dir);
});

test.afterEach.always((t) => {
  shell.rm('-rf', t.context.dir);
});

test.after.always((t) => {
  shell.rm('-rf', path.join(FIXTURE_DIR, 'node_modules'));
});

test('can succeed', (t) => {
  return promiseSpawn('vjsverify', [], {cwd: t.context.dir}).then(function(result) {
    t.is(result.status, 0, 'returns success');
    t.is(result.out.trim().length, 0, 'no output on success');
  });
});

test('can use videojs-generator-verify', (t) => {
  return promiseSpawn('videojs-generator-verify', [], {cwd: t.context.dir}).then(function(result) {
    t.is(result.status, 0, 'returns success');
    t.is(result.out.trim().length, 0, 'no output on success');
  });
});

test('can succeed with --verbose', (t) => {
  return promiseSpawn('vjsverify', ['--verbose'], {cwd: t.context.dir}).then(function(result) {
    t.is(result.status, 0, 'returns success');
    t.true(result.out.trim().length > 0, 'output on success with --verbose');
  });
});

test('can succeed with --dir', (t) => {
  return promiseSpawn('vjsverify', ['--dir', t.context.dir], {cwd: t.context.dir}).then(function(result) {
    t.is(result.status, 0, 'returns success');
    t.is(result.out.trim().length, 0, 'no output on success');
  });
});

test('succeeds if dists have wrong syntax but --skip-es-check is passed', (t) => {
  // copy es6 source to dist
  shell.cp('-f', path.join(t.context.dir, 'es6.js'), path.join(t.context.dir, 'dist', 'videojs-test.js'));

  return promiseSpawn('vjsverify', ['--skip-es-check'], {cwd: t.context.dir}).then(function(result) {
    t.is(result.status, 0, 'returns success');
    t.is(result.out.trim().length, 0, 'no output on success');
  });
});

test('fails if pkg.json fields point to missing files', (t) => {
  const pkgPath = path.join(t.context.dir, 'package.json');

  shell.cat(pkgPath)
    .sed(/.js/, '.foo')
    .to(pkgPath);

  return promiseSpawn('vjsverify', [], {cwd: t.context.dir}).then(function(result) {
    t.is(result.status, 1, 'returns failure');
    t.true(result.out.trim().length > 0, 'output on failure');
  });
});

test('fails if there are no dists', (t) => {

  shell.rm('-rf', path.join(t.context.dir, 'dist'));

  return promiseSpawn('vjsverify', [], {cwd: t.context.dir}).then(function(result) {
    t.is(result.status, 1, 'returns failure');
    t.true(result.out.trim().length > 0, 'output on failure');
  });
});

test('fails if any dists have wrong syntax', (t) => {
  // copy es6 source to dist
  shell.cp('-f', path.join(t.context.dir, 'es6.js'), path.join(t.context.dir, 'dist', 'videojs-test.js'));

  return promiseSpawn('vjsverify', [], {cwd: t.context.dir}).then(function(result) {
    t.is(result.status, 1, 'returns failure');
    t.true(result.out.trim().length > 0, 'output on failure');
  });
});

test('fails if any langs have wrong syntax', (t) => {
  // copy es6 source to dist
  shell.cp('-f', path.join(t.context.dir, 'es6.js'), path.join(t.context.dir, 'dist', 'lang', 'videojs-test.js'));

  return promiseSpawn('vjsverify', [], {cwd: t.context.dir}).then(function(result) {
    t.is(result.status, 1, 'returns failure');
    t.true(result.out.trim().length > 0, 'output on failure');
  });
});

test('fails if it cannot be installed in production', (t) => {
  const pkgPath = path.join(t.context.dir, 'package.json');
  const pkg = JSON.parse(shell.cat(pkgPath));

  pkg.scripts.postinstall = 'foo-bar-command-does-not-exist';

  // write new package
  shell.ShellString(JSON.stringify(pkg, null, 2)).to(pkgPath);

  return promiseSpawn('vjsverify', [], {cwd: t.context.dir}).then(function(result) {
    t.is(result.status, 1, 'returns failure');
    t.true(result.out.trim().length > 0, 'output on failure');
  });
});

test('failure with --quiet has no output', (t) => {
  const pkgPath = path.join(t.context.dir, 'package.json');
  const pkg = JSON.parse(shell.cat(pkgPath));

  pkg.scripts.postinstall = 'foo-bar-command-does-not-exist';

  // write new package
  shell.ShellString(JSON.stringify(pkg, null, 2)).to(pkgPath);

  return promiseSpawn('vjsverify', ['--quiet'], {cwd: t.context.dir}).then(function(result) {
    t.is(result.status, 1, 'returns failure');
    t.is(result.out.trim().length, 0, 'no output with --quiet');
  });
});
