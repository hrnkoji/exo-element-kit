export type Quote = {
  quote: string;
  author: string;
};

export type State = {
  quote: Quote;
};

export const defaultState: State = {
  quote: {
    quote:
      'The wit makes fun of other persons the satirist makes fun of the world the humorist makes fun of himself, but in so doing, he identifies himself with people - that is, people everywhere, not for the purpose of taking them apart, but simply revealing their true nature',
    author: 'James Thurber',
  },
};

export function state(store: any): State {
  return store.deref();
}
