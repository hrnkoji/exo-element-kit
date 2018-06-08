import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { getLogger } from 'domain/logger';
import { App } from 'components/container/app';
import config from '../exo-element.config';

const logger = getLogger('Renderer');

export default function render() {
  logger.time('DOM Render');
  ReactDOM.render(<App />, document.getElementsByTagName(config.name)[0]);
  logger.timeEnd('DOM Render');
}

declare const module: {
  hot: {
    accept: (string, Function) => void;
  };
};

if (module.hot) {
  module.hot.accept('components/container/app', () => {
    logger.time('Hot update applied');
    render();
    logger.timeEnd('Hot update applied');
  });
}
