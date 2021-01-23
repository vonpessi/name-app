'use strict';

const Koa = require('koa');
const router = require('koa-router')();
const cors = require('@koa/cors');

const port = process.env.PORT || 8000;

const app = new Koa();

app.use(cors());


router.get('names', '/names', (ctx) => {

    var names = require('./names.json');
    
    ctx.type = 'application/json; charset=utf-8';
    ctx.body = names.names
  })
  
  app.use(router.routes())
    .use(router.allowedMethods())
  
  
app.listen(port);

console.log(`App listening on port ${port}`);
