// https://www.codewars.com/kata/54b42f9314d9229fd6000d9c/train/javascript

const duplicateEncode = word => {

  if (typeof word !== 'string') {
    throw new Error('Param must be a string!');
  }

  const letters = word.toLowerCase().split('');

  return letters.reduce((accumulator, currentValue) => accumulator += letters.filter(letter => letter == currentValue).length > 1 ? ')' : '(', '');
};

module.exports = { duplicateEncode };