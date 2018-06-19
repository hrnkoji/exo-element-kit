export type Quote = {
  quote: string;
  author: string;
};

export type State = {
  quote: Quote;
  attributes: Object
};

export const defaultState: State = {
  quote: {
    quote:
      'The wit makes fun of other persons the satirist makes fun of the world the humorist makes fun of himself, but in so doing, he identifies himself with people - that is, people everywhere, not for the purpose of taking them apart, but simply revealing their true nature',
    author: 'James Thurber',
  },
  attributes: {}
};

export function state(store: any): State {
  return store.deref();
}
