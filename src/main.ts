import { store } from 'domain/store/main';
import render from 'renderer';
import { updateCustomElementAttributes } from 'domain/store/reducers/main';
import exoElementConfig from '../exo-element.config';
import { map, each } from 'lodash';

class ExoElement extends HTMLElement {

  static get observedAttributes() {
    return map(exoElementConfig.attributes, 'name');
  }

  constructor() {
    super();
    render();
    this.render();
  }

  render () {
    store.addWatch('renderLoop', render);
    let obj = {};
    updateCustomElementAttributes(
      each(exoElementConfig.attributes,
           function(attr) { obj[attr.name] = attr.value }));
  }

}

window.customElements.define(exoElementConfig.name, ExoElement);
