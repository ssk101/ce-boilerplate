const error = require('http-errors')

module.exports = async function(data, res) {
  if(data.ok) {
    const contentType = data.headers && data.headers.get('content-type')
    if(contentType && contentType.includes('image')) {
      res.set({ 'Content-Type': 'image/png' })
      return data
    } else {
      return data
    }
  } else {
    if(data.status === 404) {
      throw error.NotFound(data.status, data.statusText)
    }

    console.error(data)
    throw error.InternalServerError(data.status, data.statusText)
  }
}
