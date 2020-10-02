const ROOT = 'http://localhost'
const PORT = 3055

module.exports = {
  host: [ROOT, PORT].join(':'),
  root: [ROOT, PORT].join(':'),
  port: PORT,
}
