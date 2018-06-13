import { getLogger } from 'domain/logger';
import { App } from 'components/container/app/app';

const logger = getLogger('Renderer');

export default function render(target: HTMLElement & { store: any }) {
  logger.time('DOM Rendered');
  ReactDOM.render(<App store={target.store} />, target);
  logger.timeEnd('DOM Rendered');
}
