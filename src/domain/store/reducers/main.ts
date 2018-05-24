import { getLogger } from 'domain/logger';
import { store, State } from 'domain/store/main';
import { Quote } from 'domain/store/main';

const logger = getLogger('@store/reducers');

export function updateQuote(item: Quote) {
  logger.debug(`Update item ${item}`);
  return store.swap(oldState => ({ ...oldState, quote: item }));
}

export function updateCustomElementAttributes(attributes: any) {
  logger.debug(`Update custom attributes ${attributes}`);
  return store.swap(oldState => ({ ...oldState,  attributes: { ...attributes }}));
}