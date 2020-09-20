const { assert } = require('chai');
const { 
	extendedWeekend,
	isTheMonthHas31Days,
	isFridayTheFirstDay
} = require('./solution');

describe('Extended weekends', () => {
	describe('isTheMonthHas31Days should', () => {
		it('calculate the number of days of the selected month', () => {
			const returnValue = isTheMonthHas31Days(2020, 0)
			assert.isTrue(returnValue)
		})
	});
	describe('isFridayTheFirstDay', () => {
		it('check the first day is Friday or not', () => {
			const returnValue = isFridayTheFirstDay(2019,1)
			assert.isTrue(returnValue)
		})
	})
	describe('extendedWeekend should', () => {
		it('exists', () => {
			assert.exists(extendedWeekend);
		})
		it('accept `startYear` as integer value only', () => {
			const fn = () => extendedWeekend(null, null)
			assert.throws(fn, 'The param of "startYear" is invalid!');
		})
		it('accept `endYear` as integer value only', () => {
			const fn = () => extendedWeekend(2013, null)
			assert.throws(fn, 'The param of "endYear" is invalid!');
		})
		it('return an array', () => {
			const returnValue = extendedWeekend(2013, 2016);
			assert.isArray(returnValue)
		})
		it('calculate the right value', () => {
			const [firstMonth, lastMonth, sum] = extendedWeekend(2019, 2020);

			assert.equal(firstMonth, 'Mar');
			assert.equal(lastMonth, 'May');
			assert.equal(sum, 2);
		})
	});
});