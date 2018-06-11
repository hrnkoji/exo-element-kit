import { getLogger } from 'domain/logger';

const logger = getLogger('@middleware/network');
const URL = 'https://talaikis.com/api/quotes/random/';

export async function getQuote() {
  logger.debug('Requesting data from network', '- quote -');
  const resp = await fetch(URL);
  if (resp.ok) {
    return resp.json();
  } else throw new TypeError('getQuote response is not Ok');
}
