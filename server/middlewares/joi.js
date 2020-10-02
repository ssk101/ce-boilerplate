const Joi = require('@hapi/joi')

module.exports = function useJoi(schema) {
  validate.schema = schema

  async function validate(req, res, next) {
    let validation = schema

    const data = Object.assign({}, req.body, req.query, req.params)

    try {
      req.joi = await validation.validateAsync(data, { stripUnknown: true })
      return next()
    } catch (err) {
      const [error] = err.details
      const namespace = ['@validation', 'error']
      return res
        .status(422)
        .json({
          message: namespace.concat(error.path).concat(error.type).join('.'),
          details: error.context,
          error: error.message,
        })
    }
  }

  return validate
}