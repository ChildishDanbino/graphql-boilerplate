const { formatAddress } = require('../helpers');

/**
 * Gets GPS Coordinates from Google Maps API
 */
async function getCoordinates(locationInfo, googleMapsConnector) {
	const formattedAddress = formatAddress(locationInfo);
	console.log(formattedAddress);
	const path = `/json?address=${formattedAddress}`;
	const response = await googleMapsConnector.get(path);
	console.log(response);


	return response;
}

module.exports = {
	getCoordinates
};
