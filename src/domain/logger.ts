import Logger from 'js-logger';

Logger.useDefaults();

export function getLogger(name: string) {
  return Logger.get(name);
}
