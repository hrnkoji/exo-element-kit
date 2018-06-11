import * as React from 'react';
import { Base } from 'components/presentational/base/base';
import { State } from 'domain/store/main';

export function App({ state }: { state: State }) {
  const content = <Base state={state} />;

  return <div className={`container`}>{content}</div>;
}
