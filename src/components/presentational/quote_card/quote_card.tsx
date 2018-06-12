import * as React from 'react';
import Button from '@material-ui/core/Button';
import FormatQuote from '@material-ui/icons/FormatQuote';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

declare const styled: any;

const StyledButton = styled.default(Button)`
  && {
    background-color: black;
    border-radius: 50px;
    border: 0;
    color: white;
    height: 48px;
    padding: 0 30px;
  }
`;

type QuoteCardProps = {
  state: { quote: { quote: string, author: string }},
  // FIXME  any: it should MouseEvent but it breaks.
  onClickGetQuote: (event: any) => void
};

export function QuoteCard({ state, onClickGetQuote }: QuoteCardProps) {
  return (
    <div>
      <Card>
        <CardContent>
          <Typography variant="headline" component="h3">
            {state.quote.quote}
          </Typography>
          <Typography component="p">{state.quote.author}</Typography>
        </CardContent>
        <CardActions>
          <StyledButton onClick={onClickGetQuote} size="small">
            Get Quote <FormatQuote />
          </StyledButton>
        </CardActions>
      </Card>
    </div>
  );
}
