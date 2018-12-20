const express = require('express')

const routes = require('./routes')
const logging = require('./logging')
const config = require('../config')

const app = express()

app.locals.config = config

app.enable('trust proxy')
app.disable('x-powered-by')
app.use(express.json())
app.use(logging.accessLog)
app.use(routes)

module.exports = app
