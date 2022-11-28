import { Route, Switch, Redirect} from 'react-router-dom'
import AllQuotes from './pages/AllQuotes';
import NewQuote from './pages/NewQuote';
import QuoteDetail from './pages/QuoteDetail';
function App() {
  return (
    
      <Switch>
        <Route path="/" exact>
          <Redirect to="quote-list" />
        </Route>
      <Route path="/quote-list" exact>
      <AllQuotes />
      </Route>
      <Route path="/quote-list/:quoteId">
      <QuoteDetail />
      </Route>
      <Route path="/add-quote">
      <NewQuote />
      </Route>
      </Switch>
    
  );
}

export default App;
