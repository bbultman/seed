const morgan = require('morgan')
const uuid = require('uuid/v4')

morgan.token('uuid', function getId (_, res) {
  return res.locals.reqId
})

// Export an array of middlewares
module.exports = [
  /**
   * Collects the 'x-req-id' header and sets it onto
   * the res.locals.reqId property for use in logging.
   *
   * If the token does not exist, a new uuid will be
   * created.
   */
  (req, res, next) => {
    res.locals.reqId = req.get('x-req-id') || uuid()

    return next()
  },

  // Provide some helpful logging for the developer experience
  morgan(':method :url :status :uuid :response-time ms - :res[content-length]')
]
