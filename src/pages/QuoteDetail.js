import { useParams } from "react-router-dom";
import { Route } from "react-router-dom";
import Comments from '../components/comments/Comments'
const QuoteDetail = () => {
  const params = useParams();

  return (
    <section>
      <h1>Quote {params.quoteId} Page</h1>
      <section>
        <Route path={`/quote-list/${params.quoteId}/comment`}>
            <Comments />
        </Route>
      </section>
    </section>
  );
};

export default QuoteDetail;
