import React, { useState } from 'react';
function AddQuoteForm(props) {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');

  const handleClick = () => {
    props.addQuote(quote, author);

    setQuote('');
    setAuthor('');
  };
  return (
    <div>
      <div>
        <label>Quote</label>
        <input
          type='text'
          value={quote}
          onChange={(e) => setQuote(e.target.value)}
        />
      </div>
      <div>
        <label>Author</label>
        <input
          type='text'
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
      </div>
      <button onClick={handleClick}>ADD</button>
    </div>
  );
}
export default AddQuoteForm;
