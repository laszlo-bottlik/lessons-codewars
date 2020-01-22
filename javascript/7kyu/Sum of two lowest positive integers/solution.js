// https://www.codewars.com/kata/558fc85d8fd1938afb000014/train/javascript

const isInteger = number => ! Number.isInteger(number);

const sumTwoSmallestNumbers = numbers => {

  if (! Array.isArray(numbers)) {
    throw new Error('Param must be an array!');
  }

  if (numbers.length < 2 || numbers.some(isInteger)) {
    throw new Error('Param must be an array of integers with minimum length of 2!');
  }

  const ascendendNumber = numbers.sort((a, b) => a-b);

  return ascendendNumber.shift() + ascendendNumber.shift();
};

module.exports = { sumTwoSmallestNumbers };