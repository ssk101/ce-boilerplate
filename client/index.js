import './routes'
import * as vdom from 'virtual-dom'
import { bootstrap } from '@scoutgg/widgets/esm/index.js'
import { vdom as renderer } from '@scoutgg/widgets/esm/renderers/vdom.js'
import styles from './styles.json'
import { jsonToCSS } from 'ssjs-utils'
import moment from 'moment'

import './components/viewport/viewport'

global.moment = moment

bootstrap([
  renderer(vdom),
])

const css = jsonToCSS(styles)
var style = document.createElement('style')
style.type = 'text/css'
style.appendChild(document.createTextNode(css))
document.body.appendChild(style)
