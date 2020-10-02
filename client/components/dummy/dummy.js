import { Component, Template } from '@scoutgg/widgets/esm/index.js'
import { Dummy } from '../../models'
import template from './dummy.pug'

@Component('ce')
@Template(template)
class DummyComponent extends HTMLElement {
  async connectedCallback() {

  }
}

export default document.createElement('ce-dummy-component')