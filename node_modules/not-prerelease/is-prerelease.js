#!/usr/bin/env node
const semver = require('semver');
let version;

if (process.argv[2]) {
  version = process.argv[2].trim();
} else {
  const fs = require('fs');
  const path = require('path');
  const pkgPath = path.join(process.cwd(), 'package.json');

  if (fs.existsSync(pkgPath)) {
    version = require(pkgPath).version;
  }
}

if (semver.prerelease(version)) {
  process.exit(0);
}

process.exit(1);
