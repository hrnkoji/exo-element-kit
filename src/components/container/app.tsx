import * as React from 'react';
import { Base } from 'components/presentational/base/base';
import { state } from 'domain/store/main';

export function App() {
  const content = <Base state={state()}  />

  return (
    <div className={`container`}>
      { content }
    </div>
  );
}
