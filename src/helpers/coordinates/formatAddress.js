/**
 * @param addressInfo
 * { 
 *   adddressLine1: '123 My Test Lane',
 *   city: 'San Francisco',
 *   state: 'CA'
 * }
 */
function formatAddress(addressInfo) {
	// sample "123+My+Test+Lane,+San+Francisco,+CA"
	return Object.values(addressInfo)
		.filter(value => value)
		.map(value => value.trim().replace(/ /g, '+'))
		.reduce((acc, curr, index) => {
			return index === 0 ? `${curr}` : `${acc},+${curr}`;
		}, '');
}

module.exports = formatAddress;
