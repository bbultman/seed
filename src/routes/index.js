const express = require('express')
const { health } = require('../api')
const apiV1 = require('./v1')

const router = express.Router()

router.get('/health', health.index) // No nesting because this is not a versioned route

router.use('/api/v1', apiV1) // Nest your application's API structure under a version

module.exports = router
