import React, { useState } from 'react';
import AddQuoteForm from './components/AddQuoteForm';
import { data } from './components/Data';
import QoutesTable from './components/QoutesTable';
import './App.css';
function App() {
  const [quotesList, setQuotesList] = useState(data);
  const addQuote = (quote, author) => {
    const quoteObject = { quote: quote, author: author };
    setQuotesList([...quotesList, quoteObject]);
  };
  return (
    <div>
      <QoutesTable quotesList={quotesList} />
      <AddQuoteForm addQuote={addQuote} />
    </div>
  );
}

export default App;
