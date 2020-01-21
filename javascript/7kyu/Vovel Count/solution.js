// https://www.codewars.com/kata/54ff3102c1bad923760001f3/solutions/javascript

const getCount = str => {
  const vovels = ['a', 'e', 'i', 'o', 'u'];

  if (typeof str != 'string') {
    throw new Error('Param must be a string!');
  }

  return str
    .split('')
    .reduce((accumulator, currentValue) => vovels.includes(currentValue) ? accumulator + 1: accumulator, 0);
};

module.exports = { getCount };