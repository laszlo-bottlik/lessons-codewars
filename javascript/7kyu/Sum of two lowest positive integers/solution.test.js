const { assert } = require('chai');
const { sumTwoSmallestNumbers } = require('./solution');

const acceptTheseParams = [
  [1, 3],
  [1, 2, 3]
];
const refuseTheseParams = [
  null,
  true,
  undefined,
  12,
  12.3,
  'something',
  () => {},
  {}
];
const refuseInvalidParams = [
  [1, 2, null],
  [1, 2, true],
  [1, 2, undefined],
  [1, 2, 12.1],
  [1, 2, 'something'],
  [1, 2, () => {}],
  [1, 2, []]
];

describe('Sum of two lowest positive integers', () => {
  describe('sumTwoSmallestNumbers function', () => {

    it('should exist', () => {
      assert.equal(typeof sumTwoSmallestNumbers, 'function');
    });

    describe('should accept these parameters', () => {
      acceptTheseParams.map(param => {
        it(`accept ${param}`, () => {
          let err = '';

          try {
            sumTwoSmallestNumbers(param);
          } catch ({ message }) {
            err = message;
          }

          assert.equal(err, '');
        });
      });
    });

    describe('should refuse these parameters', () => {
      refuseTheseParams.map(param => {
        it(`refuse ${param}`, () => {
          let err = '';
          
          try {
            sumTwoSmallestNumbers(param);
          } catch ({ message }) {
            err = message;
          }
          
          assert.equal(err, 'Param must be an array!');
        })
      })
    });

    describe('should refuse invalid parameters', () => {
      refuseInvalidParams.map(param => {
        it(`refuse ${param}`, () => {
          let err = '';

          try {
            sumTwoSmallestNumbers(param);
          } catch ({ message }) {
            err = message;
          }

          assert.equal(err, 'Param must be an array of integers with minimum length of 2!');
        });
      });
    });

    it('should add together the two lowest numbers', () => {
      assert.equal(sumTwoSmallestNumbers([5, 8, 12, 19, 22]), 13 , "Sum should be 13");
      assert.equal(sumTwoSmallestNumbers([15, 28, 4, 2, 43]), 6 , "Sum should be 6");
      assert.equal(sumTwoSmallestNumbers([3, 87, 45, 12, 7]), 10 , "Sum should be 10");
      assert.equal(sumTwoSmallestNumbers([23, 71, 33, 82, 1]), 24 , "Sum should be 24");
      assert.equal(sumTwoSmallestNumbers([52, 76, 14, 12, 4]), 16 , "Sum should be 16");
      assert.equal(sumTwoSmallestNumbers([-1, 1, 2, 3]), 0 , "Sum should be 16");
    });

  });
})