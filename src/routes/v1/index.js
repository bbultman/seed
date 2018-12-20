const router = require('express').Router()
const { demo } = require('../../api')

router.use('/demo', demo.index)

module.exports = router
