# not-prerelease

Detect if the current `npm version` call is a `prerelease` or not. That way the version
lifecycle script can do things selectively in actual releases vs prereleases, such as
update a changelog with [conventional-changelog](https://github.com/conventional-changelog/conventional-changelog)

## Installation

```
$ npm install --save-dev not-prerelease
```

Then edit your package.json to have:

```json
  "scripts": {
    "version": "not-prerelease && thing-i-dont-want-to-do-on-prerelease || is-prerelease"
  }
```

Now when you run:

```
$ npm version <major|minor|patch|prerelease>
```

Then `thing-I-dont-want-on-prerelease` won't be run during a prerelease but,
will be run done during a major, minor, or patch releases.

## Other information
This package exports two binaries both of which default to looking at the version of package.json in the current directory, but they can also be passed one argument, a version to check.

- `not-prerelease`
  - If the version in package.json or that was passed is a prerelease it will exit 1 (failure) otherwise it will exit 0.
- `is-prerelease`
  - If the version in package.json or that was passed is a prerelease it will exit 0 (success) otherwise it will exit 1.


