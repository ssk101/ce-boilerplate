const Joi = require('@hapi/joi')
const joi = need('server/middlewares/joi')
const serialize = need('server/middlewares/serialize')
const handleResponse = need('server/services/handle-response')

const validations = Joi.object().keys({
  limit: Joi.number().min(1).max(100).default(30),
})

async function handler(req, res, next) {
  const response = { ok: true, data: [] }

  return handleResponse(response)
}

module.exports = [
  joi(validations),
  serialize(handler),
]
