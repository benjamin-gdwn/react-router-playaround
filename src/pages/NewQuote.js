import QuoteForm from "../components/quotes/QuoteForm";
import { useHistory } from "react-router-dom";
import useHttp from "../hooks/use-http";
import { addQuote } from "../lib/api";
import { useEffect } from "react";
const NewQuote = () => {
  // importing the custom hook and passing the addQuote function
  const {sendRequest, status} = useHttp(addQuote);
  //        {/* programmatic navigation to trigger a load when submit finishes */}
  // useHistory allows to change the history of pages saved
  const history = useHistory();
  useEffect(() => {
    if(status === 'completed'){
      // navigating back to home page after submitting form
    history.push("/quote-list");
    }
  }, [status, history]);

  
  const addQuoteHandler = (quoteData) => {
    // passing the data from form submit to the send request function
    sendRequest(quoteData);
    
  };

  return <QuoteForm isLoading={status === 'pending'}onAddQuote={addQuoteHandler} />;
};

export default NewQuote;
