import DummyComponent from '../components/dummy/dummy.js'

const viewPort = document.body.querySelector('ce-viewport')

const routes = [
  { path: 'dummy-component', component: DummyComponent },
]

const parseLocation = () => {
  return location.pathname.slice(1).toLowerCase() || '/'
}

const findComponentByPath = (path, routes) => {
  return routes.find(r => r.path === path)
}

const router = () => {
  const path = parseLocation()
  const { component } = findComponentByPath(path, routes) || {}

  if(!component) return

  viewPort.innerHTML = ''
  component.setAttribute('slot', 'viewport')
  viewPort.appendChild(component)
}

window.addEventListener('hashchange', router)
window.addEventListener('load', router)
