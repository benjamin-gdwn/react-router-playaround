import { Fragment } from "react";
import { useParams } from "react-router-dom";
import { Route } from "react-router-dom";
import Comments from '../components/comments/Comments'
import HighlightedQuote from '../components/quotes/HighlightedQuote'

const QuoteDetail = () => {
  const DUMMY_DATA = [
    {
        id: 'q1',
        author: 'Ben',
        text: 'Learning Links',
    },
    {
        id: 'q2',
        author: 'Bob',
        text: 'React is great!',
    },

]

  const params = useParams();
  
  const quote = DUMMY_DATA.find((quote) => quote.id === params.quoteId)
  if(!quote) {
    return <p>Quote Not Found</p>
  }
  return (
    <Fragment>
      <HighlightedQuote text={quote.text} author={quote.author} />
        <Route path={`/quote-list/${params.quoteId}/comment`}>
            <Comments />
        </Route>
        </Fragment>
  );
};

export default QuoteDetail;
