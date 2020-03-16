const Router = require('koa-router');
const router = new Router();

// setting route
router.get('/', async ctx => {
  await ctx.render('index');
})

module.exports = router;