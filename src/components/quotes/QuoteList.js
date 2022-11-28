import { Fragment } from "react";
import { useHistory, useLocation } from "react-router-dom";
import QuoteItem from "./QuoteItem";
import classes from "./QuoteList.module.css";

const sortQuotes = (quotes, ascending) => {
  return quotes.sort((quoteA, quoteB) => {
    if (ascending) {
      return quoteA.id > quoteB.id ? 1 : -1;
    } else {
      return quoteA.id < quoteB.id ? 1 : -1;
    }
  });
};

const QuoteList = (props) => {
  // using this to set query parameters
  const history = useHistory();
  // uselocation allows us to access the location of the loaded page
  const location = useLocation();
  // built in construction function - javascript function not react 
const queryParams = new URLSearchParams(location.search);
  // helper const to store 
const isSortingAscending = queryParams.get('sort') === 'asc';
// calling the sorting function and passing it the quotes and whether the sort should be asc or desc
const sortedQuotes = sortQuotes(props.quotes, isSortingAscending)
// dynamic handler for button if its asc show desc and vice versa
const changeSortHandler = () => {
    history.push("/quote-list?sort=" + (isSortingAscending ? 'desc' : 'asc'));

  };

  return (
    <Fragment>
      <div className={classes.sorting}>
        {/* dynamic to display text depending on helper const */}
        <button onClick={changeSortHandler}>Sort {isSortingAscending ? 'Descending' : 'Ascending'}</button>
      </div>
      <ul className={classes.list}>
        {sortedQuotes.map((quote) => (
          <QuoteItem
            key={quote.id}
            id={quote.id}
            author={quote.author}
            text={quote.text}
          />
        ))}
      </ul>
    </Fragment>
  );
};

export default QuoteList;
