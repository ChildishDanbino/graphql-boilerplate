const DataLoader = require('dataloader');
const rp = require('request-promise');

const config = require('../../config');

const resultCache = {};

class GoogleMapsConnector {
	constructor(mapsApiKey) {
		const defaults = Object.assign({}, config.requestDefaults);
		this.loader = new DataLoader(this.fetch.bind(this));
		this.request = rp.defaults(defaults);
		this.mapsApiKey = mapsApiKey;
	}

	fetch(urls) {
		return Promise.all(urls.map(url =>
			// Could check here for cached responses within resultCache
			new Promise((resolve, reject) => {
				rp(Object.assign({}, config.requestDefaults, {
					uri: url,
					headers: {
						key: this.mapsApiKey,
						'user-agent': 'mm-sysco-graph'
					}
				})).then(({ body }) => {
					resultCache[url] = {
						result: body
					};
					resolve(body);
				}).catch((err) => {
					reject(err);
				});
			})
		));
	}

	get(path) {
		const mapsPath = `${config.googleMapsRootUrl}${path}&key=${this.mapsApiKey}`;
		return this.loader.load(mapsPath);
	}
}

module.exports = GoogleMapsConnector;
