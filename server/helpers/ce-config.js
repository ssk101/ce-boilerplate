const config = need('server/config')
const _ = require('lodash')

module.exports = () => {
  const defaults = {
    root: config.root,
    port: config.port,
  }

  return _.mapKeys(defaults, (v, k) => `data-${_.kebabCase(k)}`)
}
