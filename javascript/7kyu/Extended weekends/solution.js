//https://www.codewars.com/kata/5be7f613f59e0355ee00000f

const months = [
	'Jan',
	'Feb',
	'Mar',
	'Apr',
	'May',
	'June',
	'Jul',
	'Aug',
	'Sept',
	'Oct',
	'Nov',
	'Dec'
]

const isTheMonthHas31Days = (year, month) => new Date(year, ++month, 0).getDate() === 31;

const isFridayTheFirstDay = (year, month) => new Date(year, month, 1).getDay() === 5;

const extendedWeekend = (startYear, endYear) => {
	let firstExtendedWeekend,
			lastExtendedWeekend,
			sum = 0;

	// startYear must be integer
	if (!Number.isInteger(startYear)) {
		throw new Error('The param of "startYear" is invalid!')
	}

	// endYear must be integer
	if (!Number.isInteger(endYear)) {
		throw new Error('The param of "endYear" is invalid!')
	}

	for(let year = startYear; year <= endYear; year++) {
		for(let month = 0; month <12; month++) {
			if (isTheMonthHas31Days(year, month) && isFridayTheFirstDay(year, month)) {
				firstExtendedWeekend = firstExtendedWeekend || months[month];
				lastExtendedWeekend = months[month];
				sum++;
			}
		}
	}

	return [firstExtendedWeekend, lastExtendedWeekend, sum]
}

module.exports = {
	extendedWeekend,
	isTheMonthHas31Days,
	isFridayTheFirstDay
}