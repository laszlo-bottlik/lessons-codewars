// https://www.codewars.com/kata/555eded1ad94b00403000071/train/javascript

const SeriesSum = amount => {

  if (! Number.isInteger(amount)) {
    throw new Error('Should refuse not natural numbers!');
  }

  let returnValue = amount ? 1 : 0;

  for (let x = 1; x < amount; x++) {
    returnValue += 1 / (4 + 3 * (x - 1));
  }

  return returnValue.toFixed(2);
}

module.exports = {
  SeriesSum
};
