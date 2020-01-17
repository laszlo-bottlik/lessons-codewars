const { assert } = require('chai');
const { SeriesSum } = require('./solution');
const acceptableNumbers = [0, 1, 2, 19, 155];
const notAcceptableNumber = [-1, 0.1];
const invalidParams = ['', null, false, { test: 'nothing' }, ['value'], () => 'function'];

describe('Sum of the first nth term of Series', () => {
  describe('SeriesSum should', () => {
    
    it('exists', () => {
      assert.equal(typeof SeriesSum, 'function');
    });

    describe('accept only natural numbers', () => {
      acceptableNumbers.map(n => {
        it('accept \'' + n + '\'', () => {
          try {
            SeriesSum(n);
          } catch {
            assert.fail('Should not throw error!');
          }
        });
      });
    });
    
    describe('refuse invalid params and not natural numbers', () => {
      [...invalidParams, ...notAcceptableNumber].map(n => {
        it('refuse \'' + n + '\'', () => {
          try {
            SeriesSum(n);
          } catch ({ message }) {
            assert.equal(message, 'Should refuse not natural numbers!');
          }
        });
      });
    });
    
    it('return zero keeping two decimals', () => {
      const number = 0;
      const returnValue = SeriesSum(number);

      assert.equal(returnValue, '0.00');``
    });

    it('accomplish the final tests', () => {
      assert.equal(SeriesSum(1), "1.00")
      assert.equal(SeriesSum(2), "1.25")
      assert.equal(SeriesSum(3), "1.39")
      assert.equal(SeriesSum(4), "1.49")
    });

  });
});