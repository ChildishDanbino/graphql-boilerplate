const Router = require('koa-router');
const { makeExecutableSchema } = require('graphql-tools');
const { graphqlKoa } = require('graphql-server-koa');
const { resolvers, typeDefs } = require('./schema');

import { credentials } from '../config';
import { GoogleMapsConnector } from './connectors';

const router = new Router();
const schema = makeExecutableSchema({
	resolvers,
	typeDefs
});
const endpointURL = '/graphql';

router.all(endpointURL, graphqlKoa((ctx) => {
		return {
			schema,
			formatError: error => error,
			context: {
				googleMapsConnector: new GoogleMapsConnector(credentials.googleMapsApiKey)
			}
		};
	}));

module.exports = router;