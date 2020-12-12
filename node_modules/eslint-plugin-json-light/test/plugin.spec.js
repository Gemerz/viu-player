const { expect } = require('chai');

const plugin = require('./../lib/index');

const fixtures = {
  valid: [
    {
      code: `
{
    "a": "value",
    "b": 2
}
      `,
      options: [],
    },
    {
      code: `
{}
      `,
      options: [],
    },
  ],
  invalid: [
    {
      code:
`{
  "a": "value",
  "b": "value",
}`,
      options: [],
      errors: [
        {
          message: "Invalid JSON: expected 'STRING' got }",
          line: 3,
          column: 14,
        },
      ],
    },
    {
      code:
`

`,
      options: [],
      errors: [
        {
          message: "Invalid JSON: expected 'STRING', 'NUMBER', 'NULL', 'TRUE', 'FALSE', '{', '[' got EOF",
          line: 1,
          column: 0,
        },
      ],
    },
    {
      code: '{',
      errors: [
        {
          message: "Invalid JSON: expected 'STRING', '}' got EOF",
          line: 1,
          column: 0,
        },
      ],
    },
    // parser must return a plain object
    {
      code: `
/*"SOME_VALID_JSON"*/
      `,
      options: [],
      errors: [
        {
          message: "Invalid JSON: expected 'STRING', 'NUMBER', 'NULL', 'TRUE', 'FALSE', '{', '[' got INVALID",
          line: 1,
          column: 0,
        },
      ],
    },
  ],
};

describe('Plugin', () => {
  describe('valid JSON', () => {
    fixtures.valid.forEach((obj) => {
      it('should pass', () => {
        const preprocesssResult = plugin.processors['.json'].preprocess(obj.code, 'some/path/to/json');
        expect(preprocesssResult).to.be.an('array');
        const result = plugin.processors['.json'].postprocess('foo', 'some/path/to/json');
        expect(result).to.be.eql([]);
      });
    });
  });
  describe('invalid JSON', () => {
    fixtures.invalid.forEach((obj) => {
      it('should fail', () => {
        plugin.processors['.json'].preprocess(obj.code, 'some/path/to/json');
        const result = plugin.processors['.json'].postprocess('foo', 'some/path/to/json');
        expect(result[0].message).to.be.equal(obj.errors[0].message);
        expect(result[0].line).to.be.equal(obj.errors[0].line);
        expect(result[0].column).to.be.equal(obj.errors[0].column);
      });
    });
  });
});
