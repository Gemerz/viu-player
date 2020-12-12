const jsonlint = require('jsonlint');

const ParseError = require('./utils/ParseError');

const files = {};


const validJSON = (source) => {
  const errors = [];
  try {
    jsonlint.parser.yy.parseError = (msg, hash) => {
      throw new ParseError(msg, hash);
    };
    jsonlint.parse(source);
  } catch (e) {
    errors.push({
      ruleId: 'valid-json',
      severity: 2,
      message: `Invalid JSON: expected ${e.hash.expected.join(', ')} got ${e.hash.token}`,
      line: e.hash.loc.first_line,
      column: e.hash.loc.first_column,
    });
  }
  return errors;
};

module.exports = {
  processors: {
    '.json': {
      preprocess: (source, filePath) => {
        files[filePath] = source;
        return [source];
      },
      postprocess: (foo, filePath) => {
        const errors = validJSON(files[filePath]);
        delete files[filePath];

        return errors.map(e => Object.assign(e, {
          source: filePath,
        }));
      },
    },
  },
  configs: {
    recommended: {
      plugins: [
        'json-light',
      ],
    },
  },
};
