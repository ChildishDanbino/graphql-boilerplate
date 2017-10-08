const Koa = require('koa');
const koaBody = require('koa-bodyparser');

const graphqlRouter = require('./graphqlRouter');

const app = new Koa();
const PORT = process.env.port || 3003;

app.use(koaBody());
app.use(graphqlRouter.routes());
app.use(graphqlRouter.allowedMethods());

app.listen(PORT);
console.log(`🚀  sysco-graph is listening on port ${PORT} 🚀`); // eslint-disable-line

module.exports = app;
(PORT);