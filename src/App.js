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
        {/* Switch is now Routes */}
        <Route path="/" exact>

          <Redirect to="quote-list" />
        </Route>
        <Route path="/quote-list" exact>
          {/* it is now <Route path './quote-list element={<AllQuotes />} */}
          {/* so the element to load is part of the route */}
          {/* the exact keyword is also removed, so do not include */}
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

// Navlink active class name is no longer valid. You need to do it manually as below:
// <NavLink className={(navData.isActive ? classes.active: '')} />

// <Redirect to='welcome/' /> changes - <Navigate replace='welcome/'/>

// <Route /> must be wrapped in <Routes> and there must be an element={} added to the route tag
// If you plan on using nested routes, you start at the parent and add /* for the start of the path
// and the child only needs the extra bit of the url when called in the child


// You can also now put all of your routes and nested routes in one document
// must use <Outllet /> as the placeholder in the child component


// useHistory no longer exists, useNavigate is the new term. 
// const navigate = useNavigate();
// navigate('somelink', {replace:true})
// navigate(-1,-2,1,2) - to navigate to the next or previous pages


// Prompt component used to prevent accidentally leaving pages accidentally you will now have to implement your own work around.

