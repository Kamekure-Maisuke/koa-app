// import package
const Koa = require('koa');
const render = require('koa-ejs');
const path = require('path');
const route = require('./routes/route');

// new instance
const app = new Koa();

// view setting
render(app, {
  root: path.join(__dirname, 'views'),
  layout: 'template',
  viewExt: 'html',
  cache: false,
  debug: false
});

// use middleware
app.use(route.routes());

// start server
app.listen(3000, () => console.log('Start'));