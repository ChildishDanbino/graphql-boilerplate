const Koa = require('koa');
const koaBody = require('koa-bodyparser');
const { graphiqlKoa } =  require('graphql-server-koa');
const graphqlRouter = require('./graphqlRouter');

const app = new Koa();
const PORT = process.env.port || 3003;
graphqlRouter.get('/graphiql', graphiqlKoa({ endpointURL: '/graphql' }));

app.use(koaBody());
app.use(graphqlRouter.routes());
app.use(graphqlRouter.allowedMethods());

app.listen(PORT);
console.log(`🚀 graph is listening on port ${PORT} 🚀`); // eslint-disable-line

module.exports = app;