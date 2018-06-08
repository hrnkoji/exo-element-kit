import * as React from 'react';
import { Base } from 'components/presentational/base/base';
import { state } from 'domain/store/main';
import theme from 'components/styled/muitheme';
import { MuiThemeProvider } from '@material-ui/core/styles';

export function App() {
  const content = <Base state={state()} />;

  return (
    <MuiThemeProvider theme={theme}>
      <div className={`container`}>{content}</div>
    </MuiThemeProvider>
  );
}
