const { expect } = require('chai');
const { Linter } = require('eslint');
const plugin = require('./../lib/index');


describe('Integration', () => {
  let linter;

  before(() => {
    linter = new Linter();
  });

  it('should show success for valid json', () => {
    const messages = linter.verify('{}', {}, {
      preprocess: plugin.processors['.json'].preprocess,
      postprocess: plugin.processors['.json'].postprocess,
    });
    expect(messages).to.eql([]);
  });

  it('should show failure for invalid json', () => {
    const messages = linter.verify('{,}', {}, {
      preprocess: plugin.processors['.json'].preprocess,
      postprocess: plugin.processors['.json'].postprocess,
    });
    expect(messages).to.eql(
      [
        {
          ruleId: 'valid-json',
          severity: 2,
          message: 'Invalid JSON: expected \'STRING\', \'}\' got ,',
          line: 1,
          column: 0,
          source: undefined,
        },
      ],
    );
  });
});
