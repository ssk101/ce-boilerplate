import qs from 'qs'
import config from '../services/config.js'

export class Model {
  async load(endpoint, params = {}) {
    const response = await fetch(
      `${config.root}/${endpoint}?${format(params)}`
    )
    if(response.ok) {
      var data = await response.json()
      return data
    } else {
      throw new Error(response.statusText)
    }
  }

  format(params) {
    return qs.stringify(params, {
      arrayFormat: 'brackets',
      encode: false,
    })
  }
}