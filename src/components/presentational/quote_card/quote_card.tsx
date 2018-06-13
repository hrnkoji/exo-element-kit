const Button = global['material-ui'].Button;
const Card = global['material-ui'].Card;
const CardContent = global['material-ui'].CardContent;
const CardActions = global['material-ui'].CardActions;
const Typography = global['material-ui'].Typography;

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
            Get Quote
          </StyledButton>
        </CardActions>
      </Card>
    </div>
  );
}
