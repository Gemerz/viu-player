# eslint-plugin-json-light
Because eslint-plugin-json install is too heavy (phantomjs download, ~22MB) 😒

## Installation

#### ESLint
```bash
npm i eslint --save-dev
```

```bash
npm i eslint-plugin-json-light --save-dev
```

If you installed ESLint package globally - you should also install this plugin globally

## Usage

`.eslintrc.js` (or other ESLint config)
```json
{
   "plugins": [
      "json-light"
   ]
}
```
If you are using `lint-staged` don't forget about `.json` extension:

```json
{
   "lint-staged": {
      "*.{js,json}": [
         "eslint"
      ]
   }
}
```

Also you can  run ESLint on individual JSON files or through --ext flag to add JSON files to the list.
```bash
eslint . --ext .json --ext .js
eslint fixture.json
```
