import { store } from 'domain/store/main';
import render from 'renderer';
import { updateCustomElementAttributes } from 'domain/store/reducers/main';
import exoElementConfig from '../exo-element.config';

class ExoElement extends HTMLElement {
  static get observedAttributes() {
    return ['hello', 'world'];
  }
  constructor() {
    super();
    render();
    this.render();
  }
  render () {
    store.addWatch('renderLoop', render);
    updateCustomElementAttributes({
      hello: this.getAttribute('hello'),
      world: this.getAttribute('world')
    });
  }
}

window.customElements.define(exoElementConfig.name, ExoElement);

