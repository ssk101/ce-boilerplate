const config = need('server/config')
const ceConfig = need('server/helpers/ce-config')

function star(req, res) {
  req.config = config
  req.ceConfig = ceConfig
  res.render('index', req)
}

module.exports = [
  star,
]
