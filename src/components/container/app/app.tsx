import * as React from 'react';
import { QuoteCard } from 'components/presentational/quote_card/quote_card';
import { state } from 'domain/store/main';
import { onClickGetQuote } from 'domain/middleware/user';
import theme from 'components/styled/muitheme';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { partial } from 'lodash';

export function App({ store }: { store: any }) {

  const _onClickGetQuote = partial(onClickGetQuote, store);

  return (
    <MuiThemeProvider theme={theme}>
      <div className={`container`}>
        <QuoteCard state={state(store)}
                   onClickGetQuote={_onClickGetQuote} />
      </div>
    </MuiThemeProvider>
  );
}
