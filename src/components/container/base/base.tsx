import * as React from 'react';
import { State } from 'domain/store/main';
import { onClickGetQuote } from 'domain/middleware/user';
import Button from '@material-ui/core/Button';
import Replay from '@material-ui/icons/Replay';
import Face from '@material-ui/icons/Face';
import FormatQuote from '@material-ui/icons/FormatQuote';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';

const StyledButton = styled(Button)`
  && {
    background-color: black;
    border-radius: 50px;
    border: 0;
    color: white;
    height: 48px;
    padding: 0 30px;
  }
`;

type BaseProps = {
  state: State;
};
export function Base({ state }: BaseProps) {
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
