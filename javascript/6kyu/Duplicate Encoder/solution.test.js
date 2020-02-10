const { assert } = require('chai');
const { duplicateEncode } = require('./solution');

const acceptTheseParams = ['', ' ', '-', 'abc'];
const refuseTheseParams = [
  null,
  true,
  undefined,
  12,
  12.3,
  () => {},
  {}
];
const examples = [
  ['abc', '((('],
  ['test message', '))))(()))(()'],
  ['din', '((('],
  ['recede', '()()()'],
  ['Success', ')())())']
]

describe('Duplicate Encoder', () => {
  describe('duplicateEncode function', () => {

    it('should exist', () => {
      assert.equal(typeof duplicateEncode, 'function');
    });

    describe('should refuse these params', () => {
      refuseTheseParams.map(param => {
        it(`refuse ${param}`, () => {
          let err = '';

          try {
            duplicateEncode(param);
          } catch ({ message }) {
            err = message;
          }

          assert.equal(err, 'Param must be a string!')
        });
      })
    });

    describe('should accept these params', () => {
      acceptTheseParams.map(param => {
        it(`accept ${param}`, () => {
          let err = '';

          try {
            duplicateEncode(param);
          } catch ({ message }) {
            err = message;
          }

          assert.equal(err, '');
        });
      });
    });

    describe('must return a string', () => {
      examples.map(([example]) => {
        it(`param ${example}`, () => {
          assert.equal(typeof duplicateEncode(example), 'string');
        });
      });
    });

    describe('solve the examples', () => {
      examples.map(([example, result]) => {
        it(`example ${example}`, () => {
          assert.equal(duplicateEncode(example), result);
        });
      });
    });
  })
});