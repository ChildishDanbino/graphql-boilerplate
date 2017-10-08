const Router = require('koa-router');
const { makeExecutableSchema } = require('graphql-tools');
const { graphqlKoa } = require('graphql-server-koa');
const { resolvers, typeDefs } = require('./schema');


const router = new Router();
const schema = makeExecutableSchema({
	resolvers,
	typeDefs
});
const endpointURL = '/graphql';

router
	.all(endpointURL, graphqlKoa((ctx) => {
		return {
			schema,
			formatError: error => error,
			context: {
				smxPlusConnector: new SmxPlusConnector(),
				endecaConnector: new EndecaConnector(opco, accountNumber), // pass in values
				syscoLabsConnector: new SyscoLabsConnector(ctx.state.bearer),
				syscoApiConnector: new SyscoApiConnector(orderingAccessToken),
				mySyscoTruckConnector: new MySyscoTruckConnector(),
				googleMapsConnector: new GoogleMapsConnector(config.credentials.googleMapsApiKey)
			}
		};
	}));

module.exports = router;