import { useParams } from "react-router-dom";

const QuoteDetail = () => {
  const params = useParams();

  return (
    <section>
      <h1>Quote {params.quoteId} Page</h1>
    </section>
  );
};

export default QuoteDetail;
