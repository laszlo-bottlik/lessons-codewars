// https://www.codewars.com/kata/546f922b54af40e1e90001da/train/javascript

const englishABC = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

const alphabetPosition = text => {
  
  if (typeof text != 'string') {
    throw new Error('Param must be a string!');
  }
  
  return text
    .split('')
    .map(letter => englishABC.indexOf(letter.toLocaleLowerCase()) + 1 || '')
    .filter(letter => letter)
    .join(' ');
};

module.exports = { alphabetPosition };