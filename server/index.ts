import * as Koa from 'koa'
import * as http from 'http'
import * as https from 'https'
import * as logger from 'koa-logger'
import * as serve from 'koa-static'
import * as views from 'koa-views'
import * as path from 'path'
import * as bodyParser from 'koa-bodyParser'
import { renderToString } from 'react-dom/server'

const app = new Koa()

app.use(logger())

app.use(bodyParser())

app.use(serve('./'))

app.use(serve(path.join(__dirname, '../')))

app.use(views(path.join(__dirname, './dist')))

app.use(async (ctx) => {
    // ctx.body = renderToString(<h1></h1>)
})

http.createServer(app.callback()).listen(3344, () => {
    console.log(`http server listening on port: 3344`)
})