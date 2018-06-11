import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { getLogger } from 'domain/logger';
import { App } from 'components/container/app';
import config from '../exo-element.config';

const logger = getLogger('Renderer');

export default function renderReact(target, state) {
  logger.time('DOM Rendered');
  ReactDOM.render(<App state={state} />, target);
  logger.timeEnd('DOM Rendered');
}

declare const module: {
  hot: {
    accept: (string, Function) => void;
  };
};
