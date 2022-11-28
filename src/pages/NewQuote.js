import QuoteForm from "../components/quotes/QuoteForm";
import { useHistory } from "react-router-dom";

const NewQuote = () => {
  //        {/* programmatic navigation to trigger a load when submit finishes */}
  // useHistory allows to change the history of pages saved
  const history = useHistory();

  
  const addQuoteHandler = (quoteData) => {
    console.log(quoteData);
    // navigating back to home page after submitting form
    history.push("/quote-list");
  };

  return <QuoteForm onAddQuote={addQuoteHandler} />;
};

export default NewQuote;
