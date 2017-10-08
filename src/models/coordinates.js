
/**
 * Gets GPS Coordinates from Google Maps API
 */
async function getCoorindates(locationInfo, googleMapsConnector) {
	//const formattedAddress = // TODO Write Helper
	const path = `/json?address=${''}`;
	const response = await googleMapsConnector.get(path);


	return response.customers;
}

module.exports = {
	getCoorindates
};
