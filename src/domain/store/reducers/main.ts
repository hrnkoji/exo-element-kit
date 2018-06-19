import { getLogger } from 'domain/logger';
import { Quote } from 'domain/store/main';

const logger = getLogger('@store/reducers');

export function updateQuote(store: any, item: Quote) {
  logger.debug(`Update item ${item}`);
  return store.swap(oldState => ({ ...oldState, quote: item }));
}

export function updateCustomElementAttribute(store: any, name: string, value: any) {
  logger.debug('Update custom attribute', name, value);
  return store.swap(oldState => {
    var obj = {...oldState};
    obj.attributes[name] = value;
    return obj;
  });
}
