import { getLogger } from 'domain/logger';
import { Quote } from 'domain/store/main';

const logger = getLogger('@store/reducers');

export function updateQuote(store: any, item: Quote) {
  logger.debug(`Update item ${item}`);
  return store.swap(oldState => ({ ...oldState, quote: item }));
}

export function updateCustomElementAttributes(store: any, attributes: any) {
  logger.debug(`Update custom attributes ${attributes}`);
  return store.swap(oldState => ({ ...oldState, attributes: { ...attributes } }));
}
