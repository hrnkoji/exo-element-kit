import { state, defaultState } from 'domain/store/main';
import render from 'renderer';
import { updateCustomElementAttributes } from 'domain/store/reducers/main';
import exoElementConfig from '../exo-element.config';
import { createAtom } from 'js-atom';

class ExoElement extends HTMLElement {

  store: any;

  static get observedAttributes() {
    return _.map(exoElementConfig.attributes, 'name');
  }

  constructor() {
    super();
    this.store = createAtom(defaultState);
    const _render = _.partial(render, this);
    this.store.addWatch('renderLoop', _render);
    this.waitForCustomElement(exoElementConfig.name, 10)
      .then(() => this.setAttributes());
    if ((module as any).hot) (module as any).hot.accept('renderer.tsx', _render);
  }

  waitForCustomElement(tagName: string, milliseconds: number): Promise<boolean> {
    function promisedTimeout(milliseconds: number): Promise<number> {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(milliseconds);
        }, milliseconds);
      });
    }

    if (document.getElementsByTagName(tagName) === null) {
      return promisedTimeout(milliseconds).then(() => this.waitForCustomElement(tagName, milliseconds));
    } else {
      return Promise.resolve(true);
    }
  }

  setAttributes() {
    // FIXME type any
    const attributes: any = _.reduce(
      exoElementConfig.attributes,
      (obj, attr) => _.set(obj, attr.name, this.getAttribute(attr.name)),
      {}
    );
    updateCustomElementAttributes(this.store, attributes);
  }
  
}

window.customElements.define(exoElementConfig.name, ExoElement);
