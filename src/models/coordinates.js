const { formatAddress } = require('../helpers');

/**
 * Gets GPS Coordinates from Google Maps API
 */
async function getCoordinates(locationInfo, googleMapsConnector) {
	let longitude, latitude;
	const formattedAddress = formatAddress(locationInfo);
	const path = `/json?address=${formattedAddress}`;
	const response = await googleMapsConnector.get(path);
	if (response && response.results && response.results.length) {
		const { lat, lng } = response.results[0] && response.results[0].geometry.location;
		longitude = lat;
		latitude = lng;
	}

	return {
		longitude,
		latitude
	};
}

module.exports = {
	getCoordinates
};
