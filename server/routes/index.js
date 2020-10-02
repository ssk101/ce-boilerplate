const router = require('express').Router()
const errorHandler = need('server/middlewares/error-handler')

router.use('/dummy', require('./dummy'))

router.get('*', require('./star'))
router.use(errorHandler)

module.exports = router
