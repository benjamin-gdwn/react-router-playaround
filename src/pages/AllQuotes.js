import QuoteList from '../components/quotes/QuoteList'

const DUMMY_DATA = [
    {
        id: 1,
        author: 'Ben',
        text: 'Learning Links',
    },
    {
        id: 2,
        author: 'Bob',
        text: 'React is great!',
    },

]

const AllQuotes = () => {
    return ( <QuoteList quotes={DUMMY_DATA}/> );
}
 
export default AllQuotes;