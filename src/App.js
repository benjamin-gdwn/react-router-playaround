import { Route, Switch, Redirect } from "react-router-dom";
import Layout from "./components/layout/Layout";
import AllQuotes from "./pages/AllQuotes";
import NewQuote from "./pages/NewQuote";
import QuoteDetail from "./pages/QuoteDetail";
import NotFound from "./pages/NotFound";
function App() {
  return (
    <Layout>
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
        {/* if there is no match then we want to match all */}
        <Route path='*'>
          <NotFound />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
