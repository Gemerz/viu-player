#!/usr/bin/env node

/* eslint-disable no-console */

const path = require('path');
const spawnSync = require('child_process').spawnSync;
const crypto = require('crypto');
const TEMP_DIR = require('os').tmpdir();
const PKG_DIR = process.cwd();
const randomString = crypto.randomBytes(20).toString('hex');
const WORKING_DIR = path.join(TEMP_DIR, randomString);
const shell = require('shelljs');

// create the working dir
shell.mkdir(WORKING_DIR);

const cleanup = () => shell.rm('-rf', WORKING_DIR);

process.on('SIGINT', cleanup);
process.on('SIGQUIT', cleanup);
process.on('exit', cleanup);

// get a list of all files to copy, minus node_modules
const files = shell.ls('-A', PKG_DIR)
  .filter((f) => !(/node_modules/).test(f))
  .map((f) => path.join(process.cwd(), f));

// copy all files to working_dir
shell.cp('-R', files, WORKING_DIR);

// try the install
const result = spawnSync('npm', ['i', '--production'], {cwd: WORKING_DIR});

if (result.status !== 0) {
  const error = result.stderr.toString().trim();

  console.error(`pkg-can-install: error during install:\n\n${error}\n`);
}

// cleanup
shell.rm('-rf', WORKING_DIR);

process.exit(result.status);
