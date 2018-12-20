const express = require('express')
const { health } = require('../api')

const router = express.Router()

router.get('/health', health.index)

module.exports = router
