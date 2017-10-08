const deepmerge = require('deepmerge');
const coordinates = require('./coordinates');

const rootSchema = `
  type Query {
    # Coordinates
    ${coordinates.query}
  }

  schema {
    query: Query
  }
`;

const resolvers = deepmerge.all([
	{},
	coordinates.resolvers
]);

const typeDefs = [
	rootSchema,
	coordinates.typeDefs
];

exports.resolvers = resolvers;
exports.typeDefs = typeDefs;
