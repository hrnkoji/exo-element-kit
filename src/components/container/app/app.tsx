import { QuoteCard } from 'components/presentational/quote_card/quote_card';
import { state } from 'domain/store/main';
import { onClickGetQuote } from 'domain/middleware/user';
import theme from 'components/styled/muitheme';
const MuiThemeProvider = global['material-ui'].MuiThemeProvider;

export function App({ store }: { store: any }) {

  const _onClickGetQuote = _.partial(onClickGetQuote, store);

  return (
    <MuiThemeProvider theme={theme}>
      <div className={`container`}>
        <QuoteCard state={state(store)}
                   onClickGetQuote={_onClickGetQuote} />
      </div>
    </MuiThemeProvider>
  );
}
