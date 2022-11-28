import { Fragment } from "react";
import { Link, useParams, useRouteMatch } from "react-router-dom";
import { Route } from "react-router-dom";
import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";
const QuoteDetail = () => {
  const DUMMY_DATA = [
    {
      id: "q1",
      author: "Ben",
      text: "Learning Links",
    },
    {
      id: "q2",
      author: "Bob",
      text: "React is great!",
    },
  ];

  const params = useParams();
// used to remove hard coding for all the urls
  const match = useRouteMatch();
  console.log(match)

  const quote = DUMMY_DATA.find((quote) => quote.id === params.quoteId);
  if (!quote) {
    return <p>Quote Not Found</p>;
  }

  return (
    <Fragment>
      <HighlightedQuote text={quote.text} author={quote.author} />
      <Route path={match.path} exact>
        <div className="centered">
          <Link
            className="btn--flat"
            to={`${match.url}/comment`}>
            Show Comments
          </Link>
        </div>
      </Route>
      <Route path={`${match.path}/comment`}>
        <Comments />
      </Route>
    </Fragment>
  );
};

export default QuoteDetail;
