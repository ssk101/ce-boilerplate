const { camelize } = require('ssjs-utils')

module.exports = function(cb) {
  return async function(req, res, next) {
    try {
      const response = await cb(req, res, next)
      const resp = camelize(response)

      if(Buffer.isBuffer(resp)) {
        res.type('json')
          .set('Content-Encoding', 'gzip')
          .send(resp)
      } else {
        res.json(resp)
      }
    } catch (err) {
      console.error(err)
      next(err)
    }
  }
}
