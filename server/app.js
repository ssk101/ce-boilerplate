global.need = function(thing) {
  const entity = require(`${process.cwd()}/${thing}`)
  return entity
}

const express = require('express')
const path = require('path')
const config = require('./config')
const routes = require('./routes')
const bodyParser = require('body-parser')
const app = express()

app
  .enable('trust proxy')
  .disable('x-powered-by')
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'pug')
  .use(express.static('./build'))
  .use(express.static('./public'))
  .use(bodyParser.urlencoded({ extended: true }))
  .use(bodyParser.json())
  .use(routes)

module.exports = app
