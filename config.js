const PORT = process.env.PORT || 3003;
const PROXY_PORT = process.env.PROXY_PORT;

const configuration = {
	port: PORT,
	builtAt: new Date().toLocaleString(),
	rootUrls: {
		googleMapsRootUrl: 'https://maps.googleapis.com/maps/api/geocode',
	},
	requestDefaults: {
		json: true,
		resolveWithFullResponse: true,
		proxy: PROXY_PORT && `http://localhost:${PROXY_PORT}`,
		strictSSL: !PROXY_PORT,
		timeout: 30 * 1000,
		headers: {
			'user-agent': 'mm-sysco-graph'
		}
	},
	loggingDefaults: {
		longRunningLimit: 10000
	},
	credentials: {
		googleMapsApiKey: 'AIzaSyCgrcH90yuFv0CobJ0cmCmEon1p6FWRLOw'
	}
};

module.exports = configuration;
