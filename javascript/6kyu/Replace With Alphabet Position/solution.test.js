const { assert } = require('chai');
const { alphabetPosition } = require('./solution');

const acceptTheseAsParam = ['', ' ', '-', '123', 'anything', 'null', '0'];
const refuseTheseAsParam = [null, true, () => 'return', ['first value'], {prop: 'value'}, 0];
const singleLetterTests = {
  'a': 1,
  'e': 5,
  'r': 18,
  'w': 23,
  'b': 2,
};
const ignoredCharTests = {
  '1': '',
  '-': '',
  ':': '',
  '<': ''
};
const finalTests = {
  "The sunset sets at twelve o' clock.": '20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11',
  'The narwhal bacons at midnight.': '20 8 5 14 1 18 23 8 1 12 2 1 3 15 14 19 1 20 13 9 4 14 9 7 8 20'
}

describe('Replace With Alphabet Position', () => {
  describe('alphabetPosition function', () => {
    
    it('should exists', () => {
      assert.equal(typeof alphabetPosition, 'function');
    });
    
    describe('should accept string params', () => {
      acceptTheseAsParam.map( param => {
        it('accept \'' + param + '\'', () => {
          try {
            alphabetPosition(param);
          } catch {
            assert.fail();
          }
        });
      });
    });
    
    describe('should refuse **not** string params', () => {
      refuseTheseAsParam.map( param => {
        it('refuse ' + param, () => {
          try {
            alphabetPosition(param);
            assert.fail('Should refuse all the non string params!');
          } catch ({ message }) {
            assert.equal(message, 'Param must be a string!');
          }
        });
      });
    });
    
    describe('should translate a single letter into number', () => {
      Object.keys(singleLetterTests).map( test => {
        it('translate \'' + test + '\'', () => {
          const returnValue = alphabetPosition(test);
          
          assert.equal(returnValue, singleLetterTests[test]);
        })
      });
    });

    describe('should ignore a non letter string', () => {
      Object.keys(ignoredCharTests).map( test => {
        it('translate \'' + test + '\'', () => {
          const returnValue = alphabetPosition(test);
          assert.strictEqual(returnValue, ignoredCharTests[test]);
        })
      });
    });

    describe('should solve a string', () => {
      Object.keys(finalTests).map( test => {
        it('translate \'' + test + '\'', () => {
          const returnValue = alphabetPosition(test);
          assert.strictEqual(returnValue, finalTests[test]);
        })
      });
    });

  });
});