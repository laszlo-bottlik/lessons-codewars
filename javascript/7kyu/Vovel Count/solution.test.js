const { assert } = require('chai');
const { getCount } = require('./solution');

const acceptTheseParams = ['', ' ', '12', 'a', 'abc'];
const refuseTheseParams = [null, true, 0, undefined, () => {}, [], {}];
const finalTests = {
  'a': 1,
  'abc': 1,
  'abc eef': 3,
  'a e i u o': 5,
  'something': 3
}

describe('Vovel Count', () => {
  describe('getCount function', () => {
    
    it('should exists', () => {
      assert.equal(typeof getCount, 'function');
    });

    describe('should refuse these parameters', () => {
      refuseTheseParams.map( param => {
        it(`refuse ${param}`, () => {
          let err = '';

          try {
            getCount(param);
          } catch ({ message }) {
            err = message;
          }

          assert.equal(err, 'Param must be a string!');
        })
      });
    });

    describe('should accept these parameters', () => {
      acceptTheseParams.map( param => {
        it(`accept ${param}`, () => {
          let err = '';

          try {
            getCount(param);
          } catch ({ message }) {
            err = message;
          }

          assert.isEmpty(err);
        });
      });
    });
    
    describe('should accomplish the final tests', () => {
      Object.keys(finalTests).map(test => {
        it(`test ${test}`, () => {
          const returnValue = getCount(test);

          assert.equal(returnValue, finalTests[test])
        });
      });
    });

  });
});