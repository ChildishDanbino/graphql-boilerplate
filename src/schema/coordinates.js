const { coordinates } = require('../models');

const typeDefs = `
  # Longitude and Latitude Coordinates
  type Coordinates {
    longitude: String!
    latitude: String!
  }
`;

const query = `
  # Gets Coorindates given an Address
  getCoordinates(
    adddressLine1: String!
    city: String!
    state: String!
  ): Coordinates
`;

const resolvers = {
	Query: {
		coordinates(_root, locationInfo , { googleMapsConnector }) {
			return coordinates.getCoorindates(locationInfo, googleMapsConnector);
		}
	}
};

module.exports = {
	typeDefs,
	query,
	resolvers
};
